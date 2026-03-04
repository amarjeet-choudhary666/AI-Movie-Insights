# 🚀 Quick Start Guide

## Step-by-Step Setup (5 minutes)

### 1. Install Dependencies

```bash
# Backend
cd server
npm install

# Frontend (in new terminal)
cd frontend
npm install
```

### 2. Setup Environment Variables

**Server (.env)**
```bash
cd server
cp .env.example .env
```

Edit `server/.env`:
```env
PORT=4000
DATABASE_URL="postgresql://user:password@localhost:5432/moviedb"
OMDB_API_KEY=your_omdb_key
TMDB_API_KEY=your_tmdb_key
GEMINI_API_KEY=your_gemini_key
```

**Frontend (.env.local)**
```bash
cd frontend
cp .env.local.example .env.local
```

Edit `frontend/.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000
```

### 3. Setup Database

```bash
cd server

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev
```

### 4. Start Servers

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Test the App

1. Open http://localhost:3000
2. Enter an IMDb ID: `tt0133093` (The Matrix)
3. Click "Search"
4. View the AI-powered insights!

## 🔑 Getting API Keys

### OMDb API (Free)
1. Visit: http://www.omdbapi.com/apikey.aspx
2. Select "FREE" tier
3. Enter email
4. Check email for API key

### TMDB API (Free)
1. Visit: https://www.themoviedb.org/signup
2. Create account
3. Go to Settings → API
4. Request API key (choose "Developer")
5. Fill form and get key

### Google Gemini API (Free)
1. Visit: https://aistudio.google.com/app/apikey
2. Sign in with Google
3. Click "Create API Key"
4. Copy the key

## 🎬 Test IMDb IDs

- `tt0133093` - The Matrix
- `tt0111161` - The Shawshank Redemption
- `tt0468569` - The Dark Knight
- `tt0109830` - Forrest Gump
- `tt1375666` - Inception

## ❓ Troubleshooting

**Database connection error?**
- Make sure PostgreSQL is running
- Check DATABASE_URL in .env

**API errors?**
- Verify all API keys are correct
- Check API key quotas

**Port already in use?**
- Change PORT in server/.env
- Update NEXT_PUBLIC_API_URL in frontend/.env.local

**Prisma errors?**
- Run `npx prisma generate`
- Run `npx prisma migrate dev`

## 📚 Next Steps

- Read full [README.md](./README.md)
- Deploy to production
- Add more features!
