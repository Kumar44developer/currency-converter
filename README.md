<p align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.6.2-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-5.4.8-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Vitest-4.0.5-FCC72B?style=for-the-badge&logo=vitest&logoColor=black" alt="Vitest" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</p>

# 💱 Currency Converter

> A high-performance, real-time currency conversion web application built with React 18, TypeScript, and Vite. Features live foreign exchange rates via the Frankfurter API, national flag emojis, currency swapping, and comprehensive test coverage.

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [API Integration](#-api-integration)
- [Testing Suite](#-testing-suite)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

Currency Converter is an intuitive, responsive financial tool designed for seamless currency conversions. Built with modern web standards, strict TypeScript typing, and accessibility in mind, it interfaces with the open-source Frankfurter API to deliver accurate, up-to-the-minute global exchange rates.

The application incorporates input validation, dynamic flag rendering, instant two-way currency swapping, and clear error boundaries for network resilience.

---

## ✨ Key Features

- **Live Exchange Rates** — Connects directly to the Frankfurter API to deliver real-time currency conversion rates.
- **Global Currency Catalog** — Automatically fetches and populates all active ISO currency codes on initialization.
- **Dynamic Flag Indicators** — Displays regional flag emojis generated on the fly from ISO currency codes.
- **One-Click Currency Swap** — Instant bi-directional swapping between base and target currencies with immediate rate recalculation.
- **Smart Input Validation** — Restricts non-numeric characters, caps pre-decimal values at 12 digits, and limits decimal input.
- **Accessible UI Design** — Full keyboard navigation, semantic HTML labels, ARIA associations, and clean contrast ratios.
- **Responsive Card Layout** — Centered card layout that adapts seamlessly to desktop, tablet, and mobile screens.
- **Robust Error Handling** — Friendly user-facing alerts for network failures or unavailable exchange pairs.
- **Complete Test Coverage** — 100% unit and integration test pass rate across components, utilities, and API modules.

---

## 🛠️ Tech Stack

| Technology | Role | Purpose |
|------------|------|---------|
| React 18.3.1 | Frontend Library | Component-based UI and reactive state management |
| TypeScript 5.6.2 | Language | Static typing, interface definitions, and type safety |
| Vite 5.4.8 | Build Tool | Lightning-fast development server and optimized bundler |
| Vitest 4.0.5 | Testing Framework | High-performance unit and component test runner |
| React Testing Library | Testing Utility | User-centric DOM testing and assertion validation |
| Happy DOM | Test Environment | Lightweight virtual DOM for rapid test execution |
| Frankfurter API | Data Source | Free, open-source European Central Bank exchange rates |

---

## 🏗️ System Architecture

```
User Input (Amount & Currencies)
            │
            ▼
┌───────────────────────────────────────┐
│              App.tsx                  │
│  - Input State & Validation Rules     │
│  - Active Currencies Selection        │
│  - Conversion State Management        │
└───────┬───────────────────────┬───────┘
        │                       │
        ▼                       ▼
┌──────────────────┐    ┌──────────────────┐
│ fetchCurrencies  │    │     getRates     │
│ /currencies      │    │ /latest?amount=… │
└──────────────────┘    └──────────────────┘
        │                       │
        └───────────┬───────────┘
                    ▼
┌───────────────────────────────────────┐
│            UI Components              │
│  - AmountInput (validation, digits)   │
│  - CurrencySelect (flags, options)    │
│  - SwapButton (bi-directional toggle) │
│  - Result (formatted output)          │
└───────────────────────────────────────┘
```

---

## 📁 Project Structure

```
project Number3/
├── index.html                  # HTML entry point
├── package.json                # Project dependencies and script definitions
├── package-lock.json           # Lockfile for deterministic package installations
├── tsconfig.json               # TypeScript compiler configuration for source files
├── tsconfig.node.json          # TypeScript compiler configuration for build tools
├── vite.config.ts              # Vite configuration with Vitest integration
├── .gitignore                  # Git ignore definitions
├── DOCUMENTATION.md            # In-depth developer guide and reference
├── README.md                   # Project overview and instructions
└── src/
    ├── main.tsx                # Application mounting entry point
    ├── App.tsx                 # Root application container and controller
    ├── App.test.tsx            # Full integration tests for App workflows
    ├── index.css               # Global stylesheet and CSS variables
    ├── setupTests.ts           # Vitest and Testing Library environment setup
    ├── api/
    │   ├── fetchCurrencies.ts  # Fetches supported currencies list
    │   ├── fetchCurrencies.test.ts # Tests for currency fetching
    │   ├── getRates.ts         # Requests real-time conversion rates
    │   └── getRates.test.ts    # Tests for exchange rate fetching
    ├── components/
    │   ├── AmountInput.tsx     # Validated numeric input component
    │   ├── AmountInput.test.tsx # Unit tests for AmountInput
    │   ├── CurrencySelect.tsx  # Select component with flag rendering
    │   ├── CurrencySelect.test.tsx # Unit tests for CurrencySelect
    │   ├── Result.tsx          # Formatted exchange rate result display
    │   ├── Result.test.tsx     # Unit tests for Result component
    │   ├── SwapButton.tsx      # Accessible currency swap button
    │   └── SwapButton.test.tsx # Unit tests for SwapButton
    └── utils/
        ├── convertAmount.ts    # Exchange rate computation helper
        ├── convertAmount.test.ts # Unit tests for rate calculation
        ├── makeFlagFromCurrency.ts # Flag emoji generator from currency code
        └── makeFlagFromCurrency.test.ts # Unit tests for flag generator
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Kumar44developer/currency-converter.git
   cd currency-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## 📜 Available Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Starts Vite local development server with hot module replacement |
| `npm run build` | Compiles TypeScript and builds optimized production bundle to `dist/` |
| `npm run preview` | Serves the production build locally for verification |
| `npm test` | Runs the test suite in interactive watch mode |
| `npm run test:run` | Executes all 37 unit and integration tests once |
| `npm run test:ui` | Launches Vitest interactive browser UI dashboard |
| `npm run coverage` | Generates detailed code coverage metrics |

---

## 🌐 API Integration

The app uses the [Frankfurter API](https://www.frankfurter.app/docs/), an open-source foreign exchange API that tracks European Central Bank published reference rates.

### Endpoints Used

1. **Fetch All Currencies**
   - **Method**: `GET`
   - **URL**: `https://api.frankfurter.app/currencies`
   - **Response Format**: Key-value pairs where key is the ISO 4217 currency code and value is the currency name.

2. **Calculate Exchange Rates**
   - **Method**: `GET`
   - **URL**: `https://api.frankfurter.app/latest?amount={amount}&from={from}&to={to}`
   - **Response Format**: JSON object containing base currency, target rates, and computed totals.

---

## 🧪 Testing Suite

The project includes unit tests and full integration tests with Vitest, Happy DOM, and React Testing Library:

- **Amount Input Tests** (`AmountInput.test.tsx`):
  - Non-numeric input stripping
  - Maximum integer digit boundary validation
  - Multiple decimal point prevention
  - ARIA described-by accessibility validation

- **Currency Select Tests** (`CurrencySelect.test.tsx`):
  - Option rendering with flag emojis
  - Change event handling
  - Disabled codes prevention
  - Selected state retention

- **Component Tests** (`SwapButton.test.tsx`, `Result.test.tsx`):
  - Click handling and accessible labels
  - Two-digit decimal precision formatting

- **Utility Tests** (`convertAmount.test.ts`, `makeFlagFromCurrency.test.ts`):
  - Fractional conversion precision
  - Regional indicator flag emoji generation and fallbacks

- **Application Integration Tests** (`App.test.tsx`):
  - Currency catalogue loading
  - Conversion execution and calculation display
  - Network error handling and feedback
  - Bi-directional currency swap and automatic rate fetching
  - Input invalidation states and button toggling
  - Auto-clearing results on selection modifications

To run the complete test suite:
```bash
npm run test:run
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/NewFeature`)
3. Commit your changes (`git commit -m "Add NewFeature"`)
4. Push to the branch (`git push origin feature/NewFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.
