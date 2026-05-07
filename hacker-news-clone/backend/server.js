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

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/stories', storyRoutes);
app.use('/api', scrapeRoutes);

// Error Middleware
const { errorHandler } = require('./middleware/errorMiddleware');
app.use(errorHandler);

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  
  // Run scraper automatically on server start
  console.log('Running initial scraper...');
  scrapeHackerNews().catch(err => console.error('Initial scrape failed:', err));

  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
