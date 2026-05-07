import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookmarkIcon, ExternalLink, Clock, User, ArrowUpCircle, MessageSquare } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

const StoryCard = ({ story, index, isBookmarkedInitial, onBookmarkToggle }) => {
  const { user } = useContext(AuthContext);
  const [isBookmarked, setIsBookmarked] = useState(isBookmarkedInitial);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsBookmarked(isBookmarkedInitial);
  }, [isBookmarkedInitial]);

  const handleBookmark = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please login to bookmark stories!");
      return;
    }
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.post(`http://localhost:5000/api/stories/${story._id}/bookmark`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const updatedBookmarks = res.data.map(b => typeof b === 'string' ? b : b._id);
      const isNowBookmarked = updatedBookmarks.includes(story._id);
      setIsBookmarked(isNowBookmarked);
      if (onBookmarkToggle) {
        onBookmarkToggle(isNowBookmarked, story._id);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Convert HN postedAt string like "2 hours ago" to a real time representation if needed, or just display.
  // We'll just display it directly since HN gives us relative strings usually.
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ scale: 1.01 }}
      className="glass-panel"
      style={{ padding: '1.5rem', marginBottom: '1rem', display: 'flex', gap: '1rem', position: 'relative', overflow: 'hidden' }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary)' }}></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minWidth: '60px' }}>
        <ArrowUpCircle size={28} color="var(--accent)" style={{ marginBottom: '4px' }} />
        <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>{story.points}</span>
      </div>
      
      <div style={{ flex: 1 }}>
        <a href={story.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', lineHeight: 1.3, color: 'var(--text-main)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-main)'}>
            {story.title}
          </h3>
          <ExternalLink size={16} color="var(--text-muted)" style={{ marginTop: '4px', flexShrink: 0 }} />
        </a>
        
        <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <User size={14} /> {story.author}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} /> {story.postedAt}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <MessageSquare size={14} /> {story.commentsCount || 0} comments
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleBookmark}
          disabled={loading}
          style={{ 
            background: isBookmarked ? 'rgba(245, 158, 11, 0.1)' : 'transparent',
            border: isBookmarked ? '1px solid var(--accent)' : '1px solid var(--glass-border)',
            color: isBookmarked ? 'var(--accent)' : 'var(--text-muted)',
            padding: '8px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s'
          }}
        >
          <BookmarkIcon size={20} fill={isBookmarked ? 'var(--accent)' : 'none'} />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default StoryCard;
