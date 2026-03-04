# 🚢 Deployment Guide

## Frontend Deployment (Vercel)

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select `frontend` as root directory
   - Add environment variable:
     - `NEXT_PUBLIC_API_URL`: Your backend URL
   - Click "Deploy"

### Option 2: Vercel CLI

```bash
cd frontend
npm install -g vercel
vercel login
vercel --prod
```

## Backend Deployment

### Option 1: Railway (Recommended)

1. **Create Account**
   - Go to [railway.app](https://railway.app)
   - Sign up with GitHub

2. **Create New Project**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select `server` as root directory

3. **Add PostgreSQL**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway will auto-generate DATABASE_URL

4. **Add Environment Variables**
   ```
   PORT=4000
   OMDB_API_KEY=your_key
   TMDB_API_KEY=your_key
   GEMINI_API_KEY=your_key
   ```

5. **Configure Build**
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npx prisma migrate deploy && npm start`

6. **Deploy**
   - Railway will auto-deploy
   - Copy the public URL

### Option 2: Render

1. **Create Account**
   - Go to [render.com](https://render.com)
   - Sign up

2. **Create PostgreSQL Database**
   - New → PostgreSQL
   - Copy the Internal Database URL

3. **Create Web Service**
   - New → Web Service
   - Connect GitHub repository
   - Root Directory: `server`
   - Build Command: `npm install && npx prisma generate && npm run build`
   - Start Command: `npx prisma migrate deploy && npm start`

4. **Add Environment Variables**
   ```
   DATABASE_URL=<from-step-2>
   OMDB_API_KEY=your_key
   TMDB_API_KEY=your_key
   GEMINI_API_KEY=your_key
   ```

### Option 3: Heroku

1. **Install Heroku CLI**
   ```bash
   npm install -g heroku
   heroku login
   ```

2. **Create App**
   ```bash
   cd server
   heroku create your-app-name
   ```

3. **Add PostgreSQL**
   ```bash
   heroku addons:create heroku-postgresql:mini
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set OMDB_API_KEY=your_key
   heroku config:set TMDB_API_KEY=your_key
   heroku config:set GEMINI_API_KEY=your_key
   ```

5. **Deploy**
   ```bash
   git subtree push --prefix server heroku main
   ```

## Post-Deployment

### 1. Update Frontend Environment

Update `NEXT_PUBLIC_API_URL` in Vercel to point to your deployed backend:
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

### 2. Test Deployment

1. Visit your frontend URL
2. Try searching for a movie: `tt0133093`
3. Verify all features work

### 3. Enable CORS

Make sure your backend allows requests from your frontend domain. The `cors()` middleware in `app.ts` should handle this, but you can restrict it:

```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
```

## Environment Variables Checklist

### Backend
- ✅ `DATABASE_URL` - PostgreSQL connection string
- ✅ `OMDB_API_KEY` - OMDb API key
- ✅ `TMDB_API_KEY` - TMDB API key
- ✅ `GEMINI_API_KEY` - Google Gemini API key
- ✅ `PORT` - Server port (optional, defaults to 4000)

### Frontend
- ✅ `NEXT_PUBLIC_API_URL` - Backend API URL

## Troubleshooting

**Build fails on "prisma generate"?**
- Make sure `prisma` is in dependencies, not devDependencies
- Or add to build command: `npm install --include=dev`

**Database migration fails?**
- Run migrations manually: `npx prisma migrate deploy`
- Check DATABASE_URL is correct

**CORS errors?**
- Verify NEXT_PUBLIC_API_URL is correct
- Check backend CORS configuration

**API keys not working?**
- Verify environment variables are set correctly
- Check for typos in variable names
- Restart the service after adding variables

## Monitoring

### Railway
- View logs in Railway dashboard
- Set up alerts for errors

### Vercel
- View deployment logs
- Monitor function invocations
- Check analytics

## Cost Optimization

- **Free Tiers:**
  - Vercel: Free for personal projects
  - Railway: $5 credit/month
  - Render: Free tier available
  - Heroku: Free tier (with limitations)

- **Tips:**
  - Use caching to reduce API calls
  - Implement rate limiting
  - Monitor API usage

## Security Checklist

- ✅ Never commit `.env` files
- ✅ Use environment variables for secrets
- ✅ Enable HTTPS (automatic on Vercel/Railway)
- ✅ Implement rate limiting
- ✅ Validate all inputs
- ✅ Keep dependencies updated

## Next Steps

1. Set up custom domain
2. Add monitoring (Sentry, LogRocket)
3. Implement analytics
4. Set up CI/CD pipeline
5. Add automated tests
