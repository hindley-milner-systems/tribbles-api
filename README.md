# Airdrop API

A Node.js API service for verifying and distributing token airdrops on the Agoric blockchain.

## Features
- Merkle proof generation for airdrop eligibility
- Rate-limited request processing
- Redis-based queue system
- IP-based request limiting
- Health monitoring endpoints

## Prerequisites
- Node.js 16+
- Redis 6+
- MacOS/Linux environment

## Installation
```bash
git clone <repository-url>
cd airdrop-api
npm install