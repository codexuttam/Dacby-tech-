import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import StoryCard from '../components/StoryCard';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const Home = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scraping, setScraping] = useState(false);
  const { user } = useContext(AuthContext);
  const { addToast } = useToast();

  const fetchStories = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:5000/api/stories');
      setStories(res.data);
    } catch (error) {
      console.error(error);
      addToast("Failed to fetch stories", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleScrape = async () => {
    try {
      setScraping(true);
      addToast("Syncing with Hacker News...", "info");
      await axios.post('http://localhost:5000/api/scrape');
      await fetchStories();
      addToast("Successfully synced stories!", "success");
    } catch (error) {
      console.error("Scrape failed", error);
      addToast("Failed to sync stories", "error");
    } finally {
      setScraping(false);
    }
  };

  const userBookmarks = user?.bookmarks?.map(b => typeof b === 'string' ? b : b._id) || [];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '2.5rem', fontWeight: 700, background: 'linear-gradient(to right, var(--primary), var(--accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Top Stories
        </motion.h1>
        
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleScrape}
          disabled={scraping}
          className="btn btn-primary"
          style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          <RefreshCw size={18} className={scraping ? "spin-anim" : ""} style={{ animation: scraping ? 'spin 1s linear infinite' : 'none' }} />
          {scraping ? 'Syncing...' : 'Sync HN'}
        </motion.button>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {stories.map((story, index) => (
            <StoryCard 
              key={story._id} 
              story={story} 
              index={index} 
              isBookmarkedInitial={userBookmarks.includes(story._id)}
            />
          ))}
          {stories.length === 0 && <p style={{ textAlign: 'center', color: 'var(--text-muted)' }}>No stories found. Try syncing!</p>}
        </div>
      )}
    </div>
  );
};

export default Home;
