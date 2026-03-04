# How to Get TMDB API Key

## Why TMDB?
IMDb doesn't provide a public API for reviews. TMDB (The Movie Database) is the best alternative and provides:
- Movie reviews from real users
- High-quality data
- Free API access
- Easy integration

## Steps to Get TMDB API Key

### 1. Create Account
1. Go to https://www.themoviedb.org/signup
2. Fill in your details
3. Verify your email

### 2. Request API Key
1. Log in to your account
2. Go to Settings: https://www.themoviedb.org/settings/api
3. Click "Request an API Key"
4. Choose "Developer" option
5. Accept the terms

### 3. Fill Application Form
- **Application Name**: AI Movie Insight Builder
- **Application URL**: http://localhost:3000 (or your domain)
- **Application Summary**: A web application that provides AI-powered movie insights and sentiment analysis

### 4. Get Your API Key
1. After submitting, you'll get your API key immediately
2. Copy the "API Key (v3 auth)" value
3. Paste it in your `.env` file:
   ```
   TMDB_API_KEY=your_api_key_here
   ```

### 5. Restart Server
```bash
cd backend
npm run dev
```

## Testing
Try searching for movies with reviews:
- `tt0133093` - The Matrix (has many reviews)
- `tt0468569` - The Dark Knight (has many reviews)
- `tt1375666` - Inception (has many reviews)

## API Endpoints Used

### 1. Find Movie by IMDb ID
```
GET https://api.themoviedb.org/3/find/{imdb_id}?api_key={key}&external_source=imdb_id
```

### 2. Get Movie Reviews
```
GET https://api.themoviedb.org/3/movie/{tmdb_id}/reviews?api_key={key}&language=en-US&page=1
```

## Alternative: Use Sample Data
If you can't get a TMDB key immediately, the app will still work by analyzing the movie plot with AI when no reviews are available.

## Rate Limits
- Free tier: 40 requests per 10 seconds
- More than enough for this application

## Documentation
Full TMDB API docs: https://developers.themoviedb.org/3
