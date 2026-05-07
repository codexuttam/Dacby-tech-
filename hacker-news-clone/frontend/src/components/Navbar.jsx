import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { BookmarkIcon, LogOutIcon, UserIcon, TerminalSquare } from 'lucide-react';

import Logo from './Logo';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
        <Link to="/">
          <Logo size={36} />
        </Link>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          {user ? (
            <>
              <Link to="/bookmarks" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-main)', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color='var(--primary)'} onMouseOut={e => e.currentTarget.style.color='var(--text-main)'}>
                <BookmarkIcon size={18} /> Bookmarks
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent)' }}>
                <UserIcon size={18} /> {user.username}
              </div>
              <button onClick={handleLogout} className="btn" style={{ background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <LogOutIcon size={16} /> Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn" style={{ color: 'var(--text-main)' }}>Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
