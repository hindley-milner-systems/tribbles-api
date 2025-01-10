import pino from 'pino';

const makeLogger = () =>
  pino({
    level: process.env.LOG_LEVEL || 'info',
    timestamp: () => `,"time":"${new Date().toISOString()}"`,
  });
export default makeLogger;
