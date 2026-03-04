# 🎬 AI Movie Insight Builder

An intelligent movie analysis tool that fetches movie details from IMDb, analyzes audience reviews using AI, and provides sentiment-based insights.

## ✨ Features

- 🔍 Search movies by IMDb ID
- 🎭 Display movie details (title, poster, cast, year, rating, plot)
- 📝 Fetch and analyze audience reviews from TMDB
- 🤖 AI-powered sentiment analysis using Google Gemini
- 💎 Beautiful, responsive UI with animations
- ⚡ Caching system to avoid redundant API calls
- 🎨 Modern gradient design with glassmorphism effects

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vercel** - Deployment

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **TypeScript** - Type safety
- **Prisma** - ORM for database
- **PostgreSQL** - Database
- **Zod** - Input validation

### APIs & Services
- **OMDb API** - Movie metadata
- **TMDB API** - Movie reviews
- **Google Gemini AI** - Sentiment analysis

## 📋 Prerequisites

- Node.js 18+ and npm
- PostgreSQL database
- API Keys:
  - OMDb API key ([Get here](http://www.omdbapi.com/apikey.aspx))
  - TMDB API key ([Get here](https://www.themoviedb.org/settings/api))
  - Google Gemini API key ([Get here](https://aistudio.google.com/app/apikey))

## 🚀 Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd <project-folder>
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Copy environment file
cp .env.example .env

# Edit .env and add your API keys and database URL
# DATABASE_URL="postgresql://user:password@localhost:5432/moviedb"
# OMDB_API_KEY=your_key
# TMDB_API_KEY=your_key
# GEMINI_API_KEY=your_key

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend

# Install dependencies
npm install

# Copy environment file
cp .env.local.example .env.local

# Edit .env.local
# NEXT_PUBLIC_API_URL=http://localhost:4000

# Start development server
npm run dev
```

### 4. Access the Application

- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## 📦 Project Structure

```
├── server/
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic
│   │   ├── routes/          # API routes
│   │   ├── validation/      # Input validation
│   │   ├── lib/             # Utilities (Prisma client)
│   │   ├── app.ts           # Express app setup
│   │   └── index.ts         # Server entry point
│   ├── prisma/
│   │   └── schema.prisma    # Database schema
│   └── package.json
│
└── frontend/
    ├── app/
    │   ├── page.tsx         # Main page
    │   ├── layout.tsx       # Root layout
    │   └── globals.css      # Global styles
    ├── components/
    │   ├── MovieSearch.tsx  # Search input
    │   └── MovieResult.tsx  # Results display
    └── package.json
```

## 🎯 How It Works

1. **User Input**: Enter an IMDb ID (e.g., `tt0133093` for The Matrix)
2. **Cache Check**: System checks if movie data exists in database
3. **Data Fetching**: If not cached:
   - Fetch movie details from OMDb API
   - Convert IMDb ID to TMDB ID
   - Fetch reviews from TMDB API
4. **AI Analysis**: Send reviews to Google Gemini for sentiment analysis
5. **Storage**: Save movie data, reviews, and AI insights to database
6. **Display**: Show results with beautiful UI

## 🔑 Environment Variables

### Server (.env)
```env
PORT=4000
DATABASE_URL="postgresql://..."
OMDB_API_KEY=your_key
TMDB_API_KEY=your_key
GEMINI_API_KEY=your_key
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## 🧪 Testing

Try these IMDb IDs:
- `tt0133093` - The Matrix
- `tt0111161` - The Shawshank Redemption
- `tt0468569` - The Dark Knight
- `tt0109830` - Forrest Gump

## 🚢 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variable: `NEXT_PUBLIC_API_URL`
4. Deploy

### Backend (Railway/Render/Heroku)
1. Create new project
2. Connect GitHub repository
3. Add environment variables
4. Deploy

## 🎨 Design Decisions

- **Caching**: Implemented database caching to reduce API calls and improve response time
- **Error Handling**: Graceful error handling with user-friendly messages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Type Safety**: TypeScript throughout for better DX and fewer bugs
- **Modular Architecture**: Separation of concerns (controllers, services, routes)
- **AI Integration**: Google Gemini for cost-effective, high-quality sentiment analysis

## 📝 Assumptions

- IMDb IDs are provided in correct format (tt + 7 digits)
- Users have stable internet connection
- API keys have sufficient quota
- PostgreSQL database is accessible
- Reviews are in English for AI analysis

## 🐛 Known Limitations

- AI analysis quality depends on review availability
- Some movies may not have reviews on TMDB
- Rate limits apply based on API tier

## 📄 License

This project is created for the Brew Hiring Assignment.

## 👤 Author

[Your Name]

## 🙏 Acknowledgments

- OMDb API for movie metadata
- TMDB for movie reviews
- Google Gemini for AI capabilities
