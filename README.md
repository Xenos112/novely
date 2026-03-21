# Novel

[![TypeScript](https://img.shields.io/github/actions/workflow/status/Xenos112/novely/lint-js.yml?label=TypeScript&logo=typescript)](https://github.com/Xenos112/novely/actions)
[![React](https://img.shields.io/github/actions/workflow/status/Xenos112/novely/lint-js.yml?label=React&logo=react)](https://github.com/Xenos112/novely/actions)
[![Go](https://img.shields.io/github/actions/workflow/status/Xenos112/novely/lint-go.yml?label=Go&logo=go)](https://github.com/Xenos112/novely/actions)
[![Kotlin](https://img.shields.io/github/actions/workflow/status/Xenos112/novely/lint-go.yml?label=Kotlin&logo=kotlin)](https://github.com/Xenos112/novely/actions)

A mobile novel reader for Android, designed to respect user privacy and support Arabic and multilingual content out of the box.

## Why

Creating a fast mobile reader that works on Android, respects the user, and supports Arabic and many languages out of the box.

## Goals

- Working on Android with no limitations
- Creating a mobile app that respects the user
- Support Arabic and many languages out of the box
- Fast and reliable scraping with Go

## Stack

### App

- **Expo** - Frontend framework with native modules support
- **React Native** - Cross-platform library
- **NativeWind & Tailwind CSS** - Utility-first styling
- **shadcn/ui-like components** - Reusable UI components
- **React Query** - Server state management
- **Expo Router** - File-based routing

### Scraping

- **Go + Colly** - Web scraping logic
- **Golang Mobile** - Compiles Go to Android AAR
- **Kotlin** - Native module that reads the AAR

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
- [Android Studio](https://developer.android.com/studio) with:
  - Android SDK
  - NDK
  - Android SDK Command Line Tools
  - Android SDK Platform Tools
  - Android Emulator (optional, for emulator testing)

### Installation

```bash
# Install dependencies
bun install

# Build the Go scraper to Android AAR
bun go:release

# Start development server
bun start -c

# Run on Android
bun run android
```

### Scripts

| Command            | Description                     |
| ------------------ | ------------------------------- |
| `bun start`        | Start Expo dev server           |
| `bun run android`  | Run on Android                  |
| `bun run web`      | Run on web                      |
| `bun run lint`     | Run oxlint                      |
| `bun run lint:fix` | Fix lint issues                 |
| `bun run fmt`      | Format code                     |
| `bun go:build`     | Build Go sources                |
| `bun go:test`      | Run Go tests                    |
| `bun go:fmt`       | Format Go code                  |
| `bun go:lint`      | Lint Go code                    |
| `bun go:release`   | Build Go scraper to Android AAR |

## License

MIT
