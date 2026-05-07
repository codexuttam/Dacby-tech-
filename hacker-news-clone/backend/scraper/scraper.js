const axios = require('axios');
const cheerio = require('cheerio');
const Story = require('../models/Story');

const scrapeHackerNews = async () => {
  try {
    console.log('Starting scrape...');
    const { data } = await axios.get('https://news.ycombinator.com/');
    const $ = cheerio.load(data);
    
    const stories = [];
    
    $('.athing').slice(0, 10).each((i, el) => {
      const id = $(el).attr('id');
      const titlebox = $(el).find('.titleline > a');
      const title = titlebox.text();
      let url = titlebox.attr('href');
      
      // Handle relative URLs
      if (url && url.startsWith('item?id=')) {
        url = `https://news.ycombinator.com/${url}`;
      }

      const subtext = $(`#score_${id}`).parent();
      const pointsText = $(`#score_${id}`).text();
      const points = pointsText ? parseInt(pointsText.replace(' points', ''), 10) : 0;
      
      const author = subtext.find('.hnuser').text() || 'anonymous';
      const postedAt = subtext.find('.age').attr('title') || subtext.find('.age').text() || 'unknown';

      // Extract comments count
      const commentsText = subtext.find('a').last().text();
      let commentsCount = 0;
      if (commentsText && commentsText.includes('comment')) {
        commentsCount = parseInt(commentsText.replace(/\D/g, ''), 10) || 0;
      }

      stories.push({
        title,
        url,
        points,
        commentsCount,
        author,
        postedAt
      });
    });

    for (const storyData of stories) {
      await Story.findOneAndUpdate(
        { url: storyData.url },
        { $set: storyData },
        { upsert: true, new: true }
      );
    }
    console.log('Scrape completed and saved to DB.');
    return stories;
  } catch (error) {
    console.error('Error during scraping:', error);
    throw error;
  }
};

module.exports = { scrapeHackerNews };
