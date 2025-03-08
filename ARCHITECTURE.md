# Airdrop API Architecture

## Overview
The Airdrop API is a Node.js service that verifies user eligibility for token airdrops on the Agoric blockchain. It implements a Redis-based queue system to manage proof generation requests with strict rate limiting of one transaction per 8 seconds.

## Core Components

### Queue System
- **Redis-backed Queue**: Manages request processing with configurable parameters
- **Rate Limiting**: 
  - Global: 1 transaction per 8 seconds
  - IP-based: 10 requests per minute per IP
- **Queue Recovery**: Persistence of failed requests with retry mechanisms
- **Circuit Breaker**: Prevents system overload during high-traffic periods

### API Endpoints
1. **POST /api/verify-eligibility**
   - Verifies user eligibility via public key
   - Returns Merkle proof for eligible users
   - Rate-limited via queue system

2. **GET /api/queue-status**
   - Returns current queue metrics
   - Queue health status
   - Current queue length

3. **GET /api/transaction-rate**
   - Current transaction count
   - Window remaining time
   - Maximum transactions per window

4. **GET /health**
   - Redis connection status
   - Queue health metrics
   - System status

### Security Features
- Helmet security headers
- Request size limiting
- Input validation
- IP-based rate limiting
- Request tracking via UUIDs

### Monitoring & Logging
- Request logging with duration tracking
- Queue metrics monitoring
- Error logging with Pino
- Transaction rate monitoring

### Reliability Features
- Graceful shutdown handling
- Redis connection retry strategy
- Queue overflow protection
- Failed request recovery

## Data Flow
1. Client submits public key
2. Request enters Redis queue
3. Queue processes requests with 8-second spacing
4. Merkle proof generation
5. Response delivery to client

## Configuration
- Redis connection settings
- Queue parameters
- Rate limiting rules
- Logging levels

## Error Handling
- Request timeout (408)
- Queue capacity exceeded (503)
- IP rate limit exceeded (429)
- Internal server errors (500)