import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import { BookmarkIcon, LogOutIcon, UserIcon, Menu, ChevronDown, Rss } from 'lucide-react';

import Logo from './Logo';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isLandingPage = location.pathname === '/';

  const handleLogout = () => {
    logout();
    setIsMenuOpen(false);
    navigate('/');
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1.5rem',
        right: '1.5rem',
        height: '70px',
        background: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(20px)',
        border: '1px solid var(--glass-border)',
        borderRadius: '20px',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          <Logo size={36} />
        </Link>
        
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {/* Always show Feed on non-landing pages */}
          {!isLandingPage && (
            <Link to="/feed" style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-main)', transition: 'color 0.2s', fontWeight: 600, padding: '0.5rem 1rem' }} onMouseOver={e => e.currentTarget.style.color='var(--primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-main)'}>
              <Rss size={18} /> Feed
            </Link>
          )}

          {/* User Section or Login/Register */}
          {user && !isLandingPage ? (
            <div style={{ position: 'relative' }}>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="btn"
                style={{ 
                  background: 'rgba(59, 130, 246, 0.1)', 
                  border: '1px solid var(--primary)', 
                  color: 'var(--text-main)',
                  padding: '0.5rem 1.25rem',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <UserIcon size={18} color="var(--primary)" />
                <span style={{ maxWidth: '120px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{user.username}</span>
                <ChevronDown size={16} style={{ transform: isMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
              </motion.button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="glass-panel"
                    style={{
                      position: 'absolute',
                      top: '120%',
                      right: 0,
                      width: '220px',
                      padding: '8px',
                      zIndex: 1001,
                      border: '1px solid var(--glass-border)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                    }}
                  >
                    <div style={{ padding: '12px', borderBottom: '1px solid var(--glass-border)', marginBottom: '8px' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>Logged in as</div>
                      <div style={{ fontWeight: 700, color: 'var(--accent)', fontSize: '0.9rem' }}>{user.email}</div>
                    </div>
                    
                    <Link 
                      to="/bookmarks" 
                      onClick={() => setIsMenuOpen(false)}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        padding: '10px 12px', 
                        borderRadius: '8px',
                        color: 'var(--text-main)',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <BookmarkIcon size={18} /> Bookmarks
                    </Link>
                    
                    <button 
                      onClick={handleLogout}
                      style={{ 
                        width: '100%',
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '10px', 
                        padding: '10px 12px', 
                        borderRadius: '8px',
                        color: '#ef4444',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontFamily: 'inherit',
                        fontSize: '1rem',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={e => e.currentTarget.style.background = 'rgba(239, 68, 68, 0.05)'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <LogOutIcon size={18} /> Logout
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div style={{ display: 'flex', gap: '12px' }}>
              <Link to="/login" className="btn" style={{ color: 'var(--text-main)', border: '1px solid var(--glass-border)' }}>Login</Link>
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
            </div>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
