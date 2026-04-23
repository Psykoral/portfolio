# Legacy Modernization with Codex

A **Next.js-driven portfolio project** that demonstrates AI-assisted modernization work with concrete before/after examples instead of hypothetical product pitches.

This version intentionally avoids Babel-centric framing. It uses **Next.js** as the primary application framework and **Turbopack** in local development via `next dev --turbo`.

## What this project shows

This repo is designed to help in interviews and recruiter conversations by showing:

- how a legacy **jQuery** pattern can be modernized into a **Next.js / React** component flow
- how a broken, risky **PHP 5** snippet can be upgraded into a safer **PHP 8.3** implementation
- how AI can accelerate:
  - code transformation
  - test creation
  - documentation
  - install notes
  - regression coverage
  - workflow automation

## Core story

This is **not** meant to be "an AI app I might build someday."

It is meant to be:

> a clean, credible artifact that demonstrates AI-assisted modernization work I can discuss in interviews with real technical depth.

## Project structure

```text
app/                  Next.js app router pages
components/           Reusable UI components
data/                 Before/after modernization examples
lib/                  Helper utilities and analysis logic
__tests__/            Jest tests
docs/                 Supporting writeups, prompts, and deployment notes
```

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Test

```bash
npm test
```

## Build

```bash
npm run build
npm start
```

## Why Next.js

This repo is positioned as a modern stack example, so the app itself is implemented in **Next.js** rather than older standalone tooling. For development performance, the dev script uses **Turbopack**.
