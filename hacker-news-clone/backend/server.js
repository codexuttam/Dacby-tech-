const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config({ path: './.env.local' });
require('dotenv').config(); // Fallback to .env

const authRoutes = require('./routes/authRoutes');
const storyRoutes = require('./routes/storyRoutes');
const scrapeRoutes = require('./routes/scrapeRoutes');
const { scrapeHackerNews } = require('./scraper/scraper');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Root Route for Health Checks
app.get('/', (req, res) => {
  res.send('NeoScrape API is running...');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api', scrapeRoutes);

// Error Middleware
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Database Connection
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
  
  // Run scraper automatically on server start
  console.log('Running initial scraper...');
  scrapeHackerNews().catch(err => console.error('Initial scrape failed:', err));

  // Run scraper every 10 minutes (10 * 60 * 1000 ms) to keep data fresh and updated
  setInterval(() => {
    console.log('Running periodic scrape...');
    scrapeHackerNews().catch(err => console.error('Periodic scrape failed:', err));
  }, 10 * 60 * 1000);

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
