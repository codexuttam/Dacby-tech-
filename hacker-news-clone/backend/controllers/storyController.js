const Story = require('../models/Story');
const User = require('../models/User');

const getStories = async (req, res) => {
  try {
    const stories = await Story.find().sort({ points: -1 }).limit(50); // Get recent/top
    res.json(stories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getStoryById = async (req, res) => {
  try {
    const story = await Story.findById(req.params.id);
    if (story) {
      res.json(story);
    } else {
      res.status(404).json({ message: 'Story not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    const storyId = req.params.id;

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const storyExists = await Story.findById(storyId);
    if (!storyExists) {
      return res.status(404).json({ message: 'Story not found' });
    }

    const isBookmarked = user.bookmarks.includes(storyId);
    if (isBookmarked) {
      user.bookmarks = user.bookmarks.filter(id => id.toString() !== storyId);
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();
    
    // Return updated bookmarks
    const updatedUser = await User.findById(req.user._id).populate('bookmarks');
    res.json(updatedUser.bookmarks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getStories, getStoryById, toggleBookmark };
