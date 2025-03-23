
# Towa Uchafu website

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository
```sh
git clone https://github.com/sempijja/towa-tech.git
cd towa-tech
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

This will start the development server at http://localhost:5173/

### Available Commands

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready application
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally
- `npm run test` - Run tests (if configured)

## 🏗️ Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── ui/            # Base UI components (shadcn/ui)
│   └── [feature]/     # Feature-specific components
├── hooks/             # Custom React hooks
├── lib/               # Utility functions and helpers
├── pages/             # Page components
├── assets/            # Static assets (images, fonts)
├── services/          # API services and data fetching
├── styles/            # Global styles and themes
├── types/             # TypeScript type definitions
└── App.tsx            # Main application component
```

## 💻 Technologies Used

- **React** - Frontend library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - UI component library
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

## 🌏 Deployment

The site is configured for deployment to GitHub Pages or any static hosting service:

1. Build the project
```sh
npm run build
```

2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Conventions

- **Components**: Use PascalCase for component files and function names
- **Hooks**: Prefix with `use` and use camelCase
- **Utilities**: Use camelCase for utility functions
- **Styling**: Use Tailwind CSS utility classes
- **Documentation**: Document components with JSDoc comments

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
