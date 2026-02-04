# Krithika Portfolio

A modern, interactive portfolio website built with React, Node.js, Express, and SQLite.

## 🚀 Quick Start

### One-Command Setup
```bash
npm run setup
```

This will:
1. Install all dependencies
2. Initialize the SQLite database
3. Seed the database with sample data

### Run the Application
```bash
npm run dev
```

Visit `http://localhost:5000` to view the portfolio.

## 📋 Prerequisites

- **Node.js** (v18 or higher)
- **npm** (comes with Node.js)

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Wouter** - Lightweight routing
- **Radix UI + shadcn/ui** - Accessible component library
- **React Query** - Data fetching and caching

### Backend
- **Node.js** - JavaScript runtime
- **Express 5** - Web framework
- **SQLite** - Embedded database
- **Drizzle ORM** - Type-safe database operations
- **better-sqlite3** - Fast SQLite driver

## 📁 Project Structure

```
├── client/          # Frontend React application
│   └── src/
│       ├── components/  # Reusable components
│       ├── pages/       # Page components
│       └── lib/         # Utilities
├── server/          # Backend Express server
│   ├── db.js        # Database connection
│   ├── routes.js    # API routes
│   └── storage.js   # Database operations
├── shared/          # Shared code (client + server)
│   ├── schema.js    # Database schema
│   └── routes.js    # API route definitions
├── script/          # Utility scripts
│   ├── init-db.js   # Database initialization
│   └── seed-db.js   # Database seeding
└── portfolio.db     # SQLite database (created after init)
```

## 🗄️ Database

### Tables
- **contact_messages** - Contact form submissions
- **projects** - Portfolio projects
- **skills** - Technical skills with proficiency levels

### Database Commands
```bash
# Initialize database (create tables)
npm run db:init

# Seed database with sample data
npm run db:seed

# Push schema changes (Drizzle)
npm run db:push
```

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run setup` | One-command setup (install + init + seed) |
| `npm run db:init` | Initialize database |
| `npm run db:seed` | Seed database with sample data |
| `npm run db:push` | Push schema changes to database |

## 🎨 Features

- ✨ Animated splash screen
- 🎭 Dark/light theme toggle
- 📱 Fully responsive design
- 🎬 Smooth page transitions
- 📊 Dynamic project showcase
- 💼 Skills display with proficiency levels
- 📧 Contact form with database storage
- 🔍 SEO optimized
- ♿ Accessible (ARIA compliant)

## 🌐 Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=./portfolio.db
PORT=5000
```

## 📚 Documentation

For complete, line-by-line documentation, see:
- **[COMPLETE_DOCUMENTATION.md](./COMPLETE_DOCUMENTATION.md)** - Comprehensive guide for beginners

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
NODE_ENV=production npm start
```

### Deploy to Vercel/Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist/public`
4. Add environment variables

## 🐛 Troubleshooting

### Database not found
```bash
npm run db:init
```

### Module not found errors
```bash
npm install
```

### Port already in use
Change `PORT` in `.env` file or kill the process using port 5000.

## 📝 Customization

1. **Update content**: Edit seed data in `server/storage.js`
2. **Add projects**: Use the database or modify seed script
3. **Change theme**: Edit `tailwind.config.js` and `client/src/index.css`
4. **Add pages**: Create new components in `client/src/pages/`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🙏 Acknowledgments

- Built with [React](https://react.dev)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

**Made with ❤️ by Krithika**
