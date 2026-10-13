# EkPaisa – Smarter Loans, Better Life

A high-converting, modern fintech loan marketplace and financial discovery platform built with **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Framer Motion**.

Redesigned from the ground up to deliver a clean, spacious, green-and-white fintech user experience while preserving 100% of EkPaisa's verified loan products, partner banks, calculation parameters, and support channels.

---

## 🚀 Live Features

- **⚡ 2-Step Instant Loan Discovery Widget:** Quick qualification based on loan category, monthly income, and employment profile with zero CIBIL impact.
- **🏦 40+ Bank & NBFC Comparison:** Live ratings and interest rates for top institutions (HDFC, SBI, ICICI, Axis, Kotak, Tata Capital, Bajaj Finserv, IndusInd, etc.).
- **📊 Precision Reducing-Balance EMI Calculator:** Accurate monthly repayment calculations with principal vs. interest proportion breakdowns and interactive 6-month amortization schedule previews.
- **🎯 2-Minute Credit Score Simulator:** Soft inquiry credit health check with dynamic circular score gauge (300–900).
- **🤝 Reverse-Auction Loan Bidding Platform:** Preview where verified lenders compete with tailored interest rate bids for your application.
- **💬 24/7 AI Loan Advisor & Refer & Earn:** Conversational loan advisor simulation and referral bonus tracker.
- **📱 Responsive & Uncluttered:** Spacious desktop layouts (1440px+) and fluid mobile views (390px) with dedicated bottom navigation and slide-over drawers.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern component architecture & hooks |
| **TypeScript** | Strict type safety for financial data models |
| **Vite 8** | Ultra-fast HMR and optimized production bundling |
| **Tailwind CSS v4** | Modern utility-first styling with scoped design tokens |
| **Framer Motion** | Fluid micro-interactions, accordions, and animated step transitions |
| **Lucide React** | Consistent, lightweight fintech iconography |
| **Oxlint** | High-performance JavaScript/TypeScript linter |

---

## 📋 Prerequisites

Make sure you have the following installed on your machine:

- **[Node.js](https://nodejs.org/)** (v18.0.0 or higher recommended, v20+ LTS supported)
- **npm** (comes with Node.js) or **pnpm** / **yarn**

Verify your installation:
```bash
node -v
npm -v
```

---

## 💻 Getting Started & How to Run

### 1. Clone the Repository
```bash
git clone https://github.com/yash08123/EkPaisa-Website.git
cd EkPaisa-Website
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```

Once started, open your browser and navigate to:
```
http://localhost:5173/
```
*(or the local IP address displayed in your terminal)*

---

## 📦 Other Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with Hot Module Replacement (HMR). |
| `npm run build` | Runs TypeScript compilation (`tsc -b`) and generates production bundles into `dist/`. |
| `npm run preview` | Locally serves and previews the production build from `dist/`. |
| `npm run lint` | Runs `oxlint` for rapid code quality and syntax checks. |

---

## 📁 Project Structure

```plaintext
Paisa/
├── public/                 # Static assets (favicons, SVG icons)
├── src/
│   ├── assets/             # Brand logos & hero graphics
│   ├── components/         # Reusable React UI components
│   │   ├── ApplyModal.tsx      # 3-step loan application modal dialog
│   │   ├── BiddingPlatform.tsx # Reverse-auction marketplace preview
│   │   ├── CreditScore.tsx     # CIBIL score simulator & circular gauge
│   │   ├── CTA.tsx             # Conversion banner & phone callback
│   │   ├── EMICalculator.tsx   # Reducing-balance EMI calculator & schedule
│   │   ├── FAQ.tsx             # Filterable search accordion
│   │   ├── Features.tsx        # 6 core fintech pillars & editorial cards
│   │   ├── Footer.tsx          # 4-column footer, legal disclosures, address
│   │   ├── Hero.tsx            # Conversion hero + 2-step discovery card
│   │   ├── HowItWorks.tsx      # 3-step digital journey & document list
│   │   ├── LoanCategories.tsx  # 13 verified loan products & filter pills
│   │   ├── Navbar.tsx          # Sticky glassmorphic navbar & mobile drawer
│   │   ├── Partners.tsx        # Bank & NBFC grid with trust badges
│   │   └── ReferAI.tsx         # Refer & Earn card + AI Advisor simulator
│   ├── data/
│   │   └── loanData.ts     # Centralized product data, banks, FAQs, metrics
│   ├── App.tsx             # Root application orchestrator
│   ├── index.css           # Tailwind CSS v4 base resets & brand color tokens
│   └── main.tsx            # React application entry point
├── .gitignore              # Git ignore configuration
├── package.json            # Project manifest & dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration with React plugin
```

---

## 🎨 Brand Design System

| Token | Hex Code | Usage |
| :--- | :--- | :--- |
| **Primary Green** | `#16834A` | Primary buttons, active highlights, key metrics |
| **Deep Green** | `#105C38` | Headings, hero emphasis, button hover states |
| **Accent Green** | `#28A866` | Live badges, feature tags, score progress |
| **Pale Green** | `#F0F8F2` | Accent containers, card tints, input focus rings |
| **Primary Dark Text** | `#172B21` | High-contrast body and heading typography |
| **Muted Slate** | `#65756B` | Secondary descriptions, subheadings, captions |
| **Border Soft** | `#E1EAE3` | Subtle card outlines and divider rules |
| **Surface Off-White** | `#F7FAF7` | Alternating section background shades |

---

## 📞 Official Contacts & Verification

- **Customer Support Phone:** `+91 8588808538` (Mon – Sun: 9:00 AM – 9:00 PM)
- **Support Email:** `team@ekpaisa.co.in`
- **Registered Office:** Kaushambi, Ghaziabad, Uttar Pradesh, India
- **Partner Network:** 40+ RBI-regulated Scheduled Commercial Banks and NBFCs

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
