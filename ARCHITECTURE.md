
# Agoric Airdrop API - Architecture Documentation

This document provides a comprehensive overview of the Agoric Airdrop API system architecture, focusing on the request handling, queue implementation, and rate limiting mechanisms.

## System Overview

The API serves as an intermediary between users and the Agoric blockchain. It:

1. Receives eligibility check requests from users
2. Verifies if the user's public key exists in a merkle tree
3. Returns eligibility status and, if eligible, a merkle proof
4. Enforces rate limiting to comply with blockchain constraints

## Core Components

### 1. Express Server (`index.js`)

The main server handles HTTP requests, middleware configuration, and route definitions. It integrates with the queue system for rate limiting.

Key features:
- CORS support
- Request ID generation
- JSON parsing
- Error handling middleware
- Health and monitoring endpoints

### 2. Queue System (`src/queue.js`)

The queue is the central component for rate limiting and ensuring controlled access to the blockchain. It implements a functional composition pattern using several "enhancers" that add specific capabilities.

#### Queue Enhancers:

1. **withMetrics**: 
   - Tracks total processed requests, errors, and timeouts
   - Implements circuit breaker pattern to stop accepting requests during high error rates
   - Provides methods to increment metrics and retrieve current stats

2. **withProcessing**:
   - Handles the core request processing logic
   - Uses Redis to track global request counts
   - Enforces the 1 request per 8 seconds limit using Redis counters
   - Processes queue items sequentially

3. **withEnqueuing**:
   - Manages request queue with timestamps and request IDs
   - Implements timeouts for queued requests
   - Rejects requests when queue capacity is exceeded or circuit breaker is open

4. **withReset**:
   - Provides ability to reset queue state for testing or recovery

5. **withLogging**:
   - Standardizes logging of queue events and metrics

### 3. Merkle Tree Verification (`merkle-tree/tree.js`)

Handles the cryptographic verification of user eligibility:
- Maintains a merkle tree of eligible public keys
- Produces inclusion proofs for eligible addresses
- Returns undefined for ineligible addresses

### 4. Redis Integration

Redis serves two critical functions:
1. **Global Rate Limiting**: Tracks request counts across potential multiple API instances
2. **State Management**: Ensures rate limiting works even if the API is horizontally scaled

## Request Flow

1. Client submits a verification request with their public key
2. Request is assigned a unique ID and passed to the rate limiter middleware
3. Rate limiter enqueues the request with a timeout
4. When processed, the queue:
   - Increments the global request counter in Redis
   - Checks if the limit is exceeded
   - If not, processes the request
   - Waits for the configured processing delay before handling the next request
5. The merkle tree API checks the public key against the tree
6. Response is sent to the client with eligibility status and proof if eligible

## Circuit Breaker Pattern

The system implements a circuit breaker to prevent cascading failures:

1. Tracks error rates over time
2. If errors exceed threshold (10+ errors in last minute), circuit opens
3. When open, new requests are rejected immediately
4. Circuit automatically resets after a 1-minute cooling period
5. Prevents system overload during partial outages

## Rate Limiting Strategy

The rate limiting uses a hybrid approach:
1. **Queue-based**: Requests enter a FIFO queue when received
2. **Token bucket**: Redis tracks a global counter that expires after the time window
3. **Fixed delay**: Each request processing includes a mandatory delay

This strategy ensures:
- Exactly 1 request processed every 8 seconds (as required)
- Fair request processing (first-come, first-served)
- System stability under high load
- Graceful rejection when capacity is exceeded

## Monitoring and Health

The system provides multiple endpoints for operational monitoring:

1. `/api/queue-status`: Detailed metrics about queue state
2. `/api/queue-health`: Simplified health status based on error rates
3. `/health`: Overall system health including Redis connectivity

## Scalability Considerations

The architecture supports horizontal scaling with some considerations:

1. Redis serves as the central coordination point
2. Global request counting works across multiple instances
3. Each instance maintains its own request queue
4. For perfect distribution, a load balancer with sticky sessions is recommended

## Error Handling

Multiple layers of error handling ensure system reliability:

1. Request timeouts prevent stuck requests
2. Circuit breaker prevents cascade failures
3. Error logging with request IDs for traceability
4. Graceful shutdown handling for deployment updates

## Configuration

The system is highly configurable through environment variables, allowing fine-tuning of:
- Request limits
- Time windows
- Queue timeouts
- Processing delays
- Maximum queue sizes
