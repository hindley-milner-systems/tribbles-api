import { union, getProp, compose } from './utils.js';

const ConnectionState = union('ConnectionState', [
  'Connected',
  'Disconnected',
  'Reconnecting',
]);
const Effect = union('Effect', ['UpdateHealth', 'Reconnect', 'Log', 'None']);

// Some helper functions
const isConnectionRefused = err =>
  err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT';

const toDisconnected = err =>
  ConnectionState.Disconnected({ reason: err.code, timestamp: Date.now() });

const toConnectedWithError = err =>
  ConnectionState.Connected({ withError: err, timestamp: Date.now() });

const logError = err => {
  console.error('Redis Client Error', err);
  return err; // Returns err after logging
};

const warningLogger = message => () => {
  console.warn(message);
  return null;
};

const toReconnecting = () =>
  ConnectionState.Reconnecting({ timestamp: Date.now() });
const handleEvent = (event, data) => {
  switch (event) {
    case 'error':
      return data.code === 'ECONNREFUSED' || data.code === 'ETIMEDOUT'
        ? [
            ConnectionState.Disconnected({ reason: data.code }),
            Effect.UpdateHealth({ service: 'redis', status: 'disconnected' }),
          ]
        : [
            ConnectionState.Connected({ withError: data }),
            Effect.Log({ level: 'error', message: 'Redis Client Error', data }),
          ];
    case 'close':
      return [
        ConnectionState.Reconnecting({}),
        Effect.Reconnect({ delay: 1000 }),
      ];
    default:
      return [ConnectionState.Connected({}), Effect.None({})];
  }
};
// Redis connection status tracker
let redisConnectionStatus = {
  isConnected: false,
  lastError: null,
  lastReconnectAttempt: null,
};

// Update and get Redis connection status
const updateRedisStatus = status => {
  redisConnectionStatus = { ...redisConnectionStatus, ...status };
  return redisConnectionStatus;
};

const getRedisStatus = () => redisConnectionStatus;
const Request = union('Request', ['Valid', 'Invalid']);
const Proof = union('Proof', ['Eligible', 'Ineligible']);

// Validation function returning a Request type
const validateRequest = req =>
  isValidRequest(req)
    ? Request.Valid({ key: req.body.publicKey.key, requestId: req.requestId })
    : Request.Invalid({
        error: 'Invalid request format',
        requestId: req.requestId,
      });

// Generate proof returning a Proof type
const generateProof = ({ key, requestId }) => {
  const proof = treeAPI.constructProof(key);
  const [_fst, snd] = proof;

  return isUndefinedCheck(snd)
    ? Proof.Ineligible({ requestId })
    : Proof.Eligible({ proof, requestId });
};

// Response handlers
const respondToRequest = res => result =>
  result.match({
    Invalid: ({ error, requestId }) =>
      res.status(400).json({ error, requestId }),

    Valid: data => respondToProof(res)(generateProof(data)),
  });

const respondToProof = (res, next) => proofResult =>
  Promise.resolve(proofResult)
    .then(result =>
      result.match({
        Ineligible: ({ requestId }) =>
          res.status(400).json({
            message: 'User is ineligible for the tribbles airdrop.',
            requestId,
          }),

        Eligible: ({ proof, requestId }) => handleSuccessfulRequest(proof, res),
      }),
    )
    .catch(error => next(error));

export {
  updateRedisStatus,
  getRedisStatus,
  respondToRequest,
  validateRequest,
  handleEvent,
};
