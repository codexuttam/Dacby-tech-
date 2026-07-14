import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      style={{
        marginTop: '4rem',
        padding: '2rem 0',
        borderTop: '1px solid var(--glass-border)',
        textAlign: 'center',
        color: 'var(--text-muted)',
        fontSize: '0.875rem'
      }}
    >
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Hacker News Clone. Built with MERN Stack.</p>
        <p style={{ marginTop: '0.5rem' }}>Designed for premium user experience.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;

// core update 9
