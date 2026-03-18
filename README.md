# Novel

A cross-platform mobile novel reader built with Expo and React Native, designed to respect user privacy and support Arabic and multilingual content out of the box.

## Why

Creating a fast mobile reader that works on both iOS and Android, respects the user, and supports Arabic and many languages out of the box.

## Goals

- Working on both iOS and Android with no limitations
- Creating a mobile app that respects the user
- Support Arabic and many languages out of the box

## Stack

- **Expo** - Frontend framework with native modules support
- **React Native** - Cross-platform library
- **NativeWind & Tailwind CSS** - Utility-first styling
- **shadcn/ui-like components** - Reusable UI components
- **React Query** - Server state management
- **Expo Router** - File-based routing

## Features

### Legend

- 🚫 Not started
- ⚠️ Under development
- ✅ Implemented

| Feature                                  | Status |
| ---------------------------------------- | ------ |
| Arabic novel sources (Arno)              | ✅     |
| Browse popular novels                    | ✅     |
| View novel details (cover, genres, desc) | ✅     |
| Chapter listing                          | ✅     |
| Read chapters                            | ⚠️     |
| Resources of all languages               | ⚠️     |
| User can disable and enable a source     | 🚫     |
| Comprehensive reader with progress       | 🚫     |
| Auto scroll                              | 🚫     |
| SQLite storage                           | 🚫     |
| Downloadable chapters                    | 🚫     |
| User library                             | 🚫     |
| Clean UI                                 | ⚠️     |
| Cover caching                            | 🚫     |
| Settings page                            | 🚫     |
| Theme switching                          | 🚫     |
| Reading progress tracker                 | 🚫     |
| Search feature                           | 🚫     |
| Search all sources                       | 🚫     |
| Testing for all sources                  | 🚫     |

## Getting Started

### Prerequisites

- Node.js 18+
- Bun or npm
- Expo CLI
- iOS Simulator / Android Emulator (or Expo Go for testing)

### Installation

```bash
# Install dependencies
bun install

# Start development server
bun start -c
bun build:sources # needed to build sources

# Run on iOS
bun run ios

# Run on Android
bun run android
```

### Scripts

| Command                 | Description           |
| ----------------------- | --------------------- |
| `bun start`             | Start Expo dev server |
| `bun run ios`           | Run on iOS            |
| `bun run android`       | Run on Android        |
| `bun run web`           | Run on web            |
| `bun run lint`          | Run oxlint            |
| `bun run build:sources` | Build Sources         |
| `bun run lint:fix`      | Fix lint issues       |
| `bun run fmt`           | Format code           |

## License

MIT
