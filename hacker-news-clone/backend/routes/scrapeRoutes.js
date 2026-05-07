const express = require('express');
const router = express.Router();
const { runScrape } = require('../controllers/scrapeController');

router.post('/scrape', runScrape);

module.exports = router;
