# RidersBuddy

A mobile app for motorcycle riders to discover routes, track rides, and connect with other riders.

## Tech Stack

- **React Native** with Expo SDK 56
- **Expo Router** — file-based navigation
- **TypeScript**
- **expo-secure-store** — secure JWT token storage

## Prerequisites

- Node.js 20+
- [Expo Go](https://expo.dev/go) on your phone **or** an Android emulator

## Setup

```bash
git clone https://github.com/rAJ-1312/RidersBuddy-App.git
cd RidersBuddy-App
npm install --legacy-peer-deps
```

## Running

```bash
# Start dev server (scan QR with Expo Go)
npm start

# Open on Android emulator (requires Android SDK)
ANDROID_HOME=$HOME/Android/Sdk npm run android
```

The app connects to the [RidersBuddy backend](https://github.com/rAJ-1312/RidersBuddy) running at `http://localhost:8000`. For a physical device, replace `localhost` with your machine's LAN IP in `services/api.ts`.

## Code Quality

```bash
npm run lint          # ESLint
npm run format        # Prettier
npm run typecheck     # TypeScript check
```

Pre-commit hooks run lint + format automatically on every commit.
