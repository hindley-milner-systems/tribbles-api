
# Agoric Airdrop API

A production-ready Node.js API for handling token airdrop eligibility checks on the Agoric blockchain with robust request rate limiting.

## Overview

This API facilitates a token airdrop for the Agoric blockchain. It allows users to verify their eligibility by checking if their public key exists in a merkle tree of approved addresses. The API enforces strict rate limiting (1 transaction every 8 seconds) using a Redis-based queuing system.

## Features

- ✅ **Merkle Tree Verification**: Verifies user eligibility based on public keys
- ✅ **Rate Limiting**: Redis-based queue enforcing 1 transaction per 8 seconds
- ✅ **Circuit Breaker**: Prevents cascading failures during high error rates
- ✅ **Request Timeouts**: Automatic request timeouts to prevent queue clogging
- ✅ **Health Monitoring**: Endpoints for system status and queue metrics

## API Endpoints

### Verify Eligibility
```
POST /api/verify-eligibility
```
Body:
```json
{
  "publicKey": {
    "key": "user-public-key-here"
  }
}
```
Response (eligible):
```json
{
  "message": "User is eligible for airdrop.",
  "payload": [/* merkle proof */]
}
```

Response (ineligible):
```json
{
  "message": "User is ineligible for the tribbles airdrop.",
  "requestId": "uuid-here"
}
```

### Queue Status
```
GET /api/queue-status
```

### Queue Health
```
GET /api/queue-health
```

### Service Health
```
GET /health
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3000 |
| `REDIS_URL` | Redis connection string | redis://localhost:6379 |
| `REQUEST_LIMIT` | Maximum requests per time window | 1 |
| `TIME_WINDOW` | Rate limit time window (ms) | 8000 |
| `QUEUE_TIMEOUT` | Max time requests can wait in queue (ms) | 60000 |
| `MAX_QUEUE_SIZE` | Maximum queue size | 1000 |
| `PROCESSING_DELAY` | Delay between processing requests (ms) | 8000 |
| `LOG_LEVEL` | Logging level | info |

## Getting Started

1. Ensure Redis is installed and running
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

## Testing

Run the test suite:
```
npm test
```

## License

See [LICENSE](./LICENSE) file.
