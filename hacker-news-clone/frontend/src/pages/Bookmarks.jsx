import React, { useContext } from 'react';
import StoryCard from '../components/StoryCard';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion } from 'framer-motion';

const Bookmarks = () => {
  const { user, setUser } = useContext(AuthContext);
  const { addToast } = useToast();

  const handleBookmarkToggle = (isNowBookmarked, storyId) => {
    // If we unbookmark from this page, we might want to remove it locally from the UI
    if (!isNowBookmarked && user) {
      const newBookmarks = user.bookmarks.filter(b => b._id !== storyId);
      setUser({ ...user, bookmarks: newBookmarks });
      addToast("Bookmark removed", "info");
    }
  };

  const bookmarks = user?.bookmarks || [];

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ fontSize: '2.5rem', fontWeight: 700, background: 'linear-gradient(to right, var(--accent), #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
        >
          Your Bookmarks
        </motion.h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Saved stories to read later.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {bookmarks.length === 0 ? (
          <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
            <p>You haven't bookmarked any stories yet.</p>
          </div>
        ) : (
          bookmarks.map((story, index) => (
            <StoryCard 
              key={story._id} 
              story={story} 
              index={index} 
              isBookmarkedInitial={true}
              onBookmarkToggle={handleBookmarkToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Bookmarks;
