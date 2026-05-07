# Hacker News Clone (MERN Stack)

A full-stack web application built using the MERN stack (MongoDB, Express, React, Node.js). This project features a web scraper that fetches the top 10 stories from Hacker News, a robust JWT-based authentication system, and a premium, animated frontend.

## Features
- **Automated Web Scraper:** Scrapes the top 10 stories from Hacker News automatically on server start and via API.
- **User Authentication:** Secure JWT-based registration and login system.
- **Story Management:** View top stories and save your favorites using the bookmark feature.
- **Premium UI:** Glassmorphism design system with fluid animations powered by Framer Motion.
- **State Management:** Uses React Context API for global state management.

## Project Structure
- `backend/` - Node.js & Express server, MongoDB models, Web scraper.
- `frontend/` - React application built with Vite.

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local instance or Atlas URI)

## Environment Variables
The application requires the following environment variables to run.

Create a `.env.local` file in the `backend/` directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/hacker-news-clone
JWT_SECRET=your_super_secret_jwt_key
```

## Setup Instructions

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Ensure your MongoDB instance is running.
4. Start the backend server:
   ```bash
   node server.js
   ```
   *(The server will run on port 5000 and automatically execute the initial scrape).*

### 2. Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *(The Vite server will typically start on port 5173).*

## API Endpoints

### Scraper
- `POST /api/scrape` - Triggers the Hacker News scraper manually.

### Authentication
- `POST /api/auth/register` - Registers a new user.
- `POST /api/auth/login` - Logs in a user and returns a JWT.
- `GET /api/auth/me` - Fetches the authenticated user's profile.

### Stories & Bookmarks
- `GET /api/stories` - Fetches all scraped stories (sorted by points).
- `GET /api/stories/:id` - Fetches a single story by ID.
- `POST /api/stories/:id/bookmark` - Toggles the bookmark status for a specific story (Requires Auth).
