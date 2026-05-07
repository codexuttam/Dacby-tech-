const { scrapeHackerNews } = require('../scraper/scraper');

const runScrape = async (req, res) => {
  try {
    const stories = await scrapeHackerNews();
    res.status(200).json({ message: 'Scraping successful', data: stories });
  } catch (error) {
    res.status(500).json({ message: 'Scraping failed', error: error.message });
  }
};

module.exports = { runScrape };
