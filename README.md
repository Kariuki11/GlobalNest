# Money Market Client

A modern fintech web application for virtual investment in treasury bonds, international stocks, and cryptocurrencies.

## 🚀 Features

- **Virtual Investment Platform**: Simulate investments without real money
- **Real-time Market Data**: Live crypto, stocks, and bonds data
- **Portfolio Tracking**: Visual charts and performance analytics
- **Financial News**: Latest market news and updates
- **Responsive Design**: Mobile-first, modern UI

##  Tech Stack

- **React 18** with Vite
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Axios** for API communication
- **Recharts** for data visualization
- **Lucide React** for icons

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd money-market-client
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
# Edit .env with your API endpoints
```

4. Start the development server:
```bash
npm run dev
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── services/           # API services
├── context/            # React Context providers
├── hooks/              # Custom React hooks
└── utils/              # Utility functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Pages

- `/` - Landing page (redirects to dashboard)
- `/login` - Authentication
- `/register` - User registration
- `/dashboard` - Main dashboard
- `/market` - Market data (Crypto, Stocks, Bonds)
- `/invest` - Investment interface
- `/portfolio` - Portfolio management
- `/news` - Financial news
- `/settings` - User settings

## 🔧 Development

This is a frontend-only application that interfaces with a backend API. The backend should provide endpoints for:

- Authentication (`/api/login`, `/api/register`)
- Market data (`/api/market/crypto`, `/api/market/stocks`, `/api/market/bonds`)
- Portfolio management (`/api/portfolio`, `/api/invest`)
- News feed (`/api/news`)

## 📄 License

MIT License
