import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ size = 32 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="40" rx="8" fill="url(#logo_grad)" />
        <path
          d="M10 20L16 26L30 12"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <defs>
          <linearGradient
            id="logo_grad"
            x1="0"
            y1="0"
            x2="40"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#ff007a" />
            <stop offset="1" stopColor="#f43f5e" />
          </linearGradient>
        </defs>
      </svg>
      <span
        style={{
          fontWeight: 800,
          fontSize: '1.5rem',
          letterSpacing: '-0.5px',
          background: 'linear-gradient(to right, #ff007a, #f43f5e)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontFamily: "'Outfit', sans-serif"
        }}
      >
        NEO<span style={{ color: 'var(--text-main)', WebkitTextFillColor: 'var(--text-main)' }}>SCRAPE</span>
      </span>
    </motion.div>
  );
};

export default Logo;
