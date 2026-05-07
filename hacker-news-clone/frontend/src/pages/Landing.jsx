import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Terminal, Shield, Zap, BookMarked, ArrowRight, Github, Twitter, Cpu } from 'lucide-react';

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: <Zap className="text-primary" />,
      title: "Hyper-Fast Sync",
      description: "Real-time scraping from Hacker News with optimized background workers for zero-latency browsing."
    },
    {
      icon: <Shield className="text-accent" />,
      title: "Secure Identity",
      description: "Enterprise-grade authentication with JWT and bcrypt. Your data and bookmarks are encrypted and safe."
    },
    {
      icon: <BookMarked className="text-success" />,
      title: "Deep Persistence",
      description: "Bookmark your favorite stories and access them anytime, anywhere. Never lose a valuable insight again."
    },
    {
      icon: <Terminal className="text-primary" />,
      title: "Cyber Aesthetic",
      description: "A premium dark-themed UI designed for the modern developer. Low eye strain, high productivity."
    }
  ];

  return (
    <div style={{ paddingBottom: '100px' }}>
      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ 
          textAlign: 'center', 
          padding: '120px 20px', 
          position: 'relative' 
        }}
      >
        {/* Animated Background Orbs */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '20%', 
          width: '300px', 
          height: '300px', 
          background: 'rgba(255, 0, 122, 0.2)', 
          filter: 'blur(100px)', 
          borderRadius: '50%', 
          zIndex: -1,
          opacity: 0.3
        }}></div>
        <div style={{ 
          position: 'absolute', 
          bottom: '10%', 
          right: '20%', 
          width: '300px', 
          height: '300px', 
          background: 'rgba(244, 63, 94, 0.2)', 
          filter: 'blur(100px)', 
          borderRadius: '50%', 
          zIndex: -1,
          opacity: 0.3
        }}></div>

        <motion.div variants={itemVariants}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 16px', 
            background: 'rgba(255, 0, 122, 0.1)', 
            border: '1px solid rgba(255, 0, 122, 0.2)', 
            borderRadius: '100px',
            color: 'var(--primary)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            <Cpu size={16} />
            Powered by Next-Gen Web Scraping
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} style={{ 
          fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', 
          fontWeight: 900, 
          lineHeight: 1.1, 
          marginBottom: '24px',
          letterSpacing: '-2px'
        }}>
          Hacker News <br />
          <span style={{ 
            background: 'linear-gradient(to right, var(--primary), var(--accent))', 
            WebkitBackgroundClip: 'text', 
            WebkitTextFillColor: 'transparent' 
          }}>Reimagined.</span>
        </motion.h1>

        <motion.p variants={itemVariants} style={{ 
          fontSize: '1.25rem', 
          color: 'var(--text-muted)', 
          maxWidth: '700px', 
          margin: '0 auto 40px',
          lineHeight: 1.6
        }}>
          The ultimate platform for developers to track the pulse of tech. 
          Aggregated, curated, and styled with a premium cyber-dark aesthetic.
        </motion.p>

        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <Link to="/register" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
            Get Started <ArrowRight size={20} />
          </Link>
          <Link to="/feed" className="btn" style={{ 
            background: 'rgba(255,255,255,0.05)', 
            border: '1px solid var(--glass-border)',
            padding: '1rem 2rem',
            fontSize: '1.1rem'
          }}>
            View Feed
          </Link>
        </motion.div>

        {/* Hero Visual Section */}
        <motion.div 
          variants={itemVariants}
          style={{ 
            marginTop: '80px', 
            position: 'relative', 
            display: 'flex', 
            justifyContent: 'center',
            alignItems: 'center',
            height: '600px',
            width: '100%'
          }}
        >
          {/* Main Tablet Mockup */}
          <motion.div
            style={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              maxWidth: '700px',
              maskImage: 'radial-gradient(circle, black 70%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 70%, transparent 100%)'
            }}
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 7, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src="/assets/hero-tablet.png"
              alt="Dashboard Preview"
              style={{ 
                width: '100%', 
                filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.8))',
                borderRadius: '40px'
              }}
            />
          </motion.div>

          {/* Floating Cards (Generated Group) */}
          <motion.div
            style={{ 
              position: 'absolute',
              top: '-10%',
              right: '-5%',
              width: '450px',
              zIndex: 3,
              maskImage: 'radial-gradient(circle, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 60%, transparent 100%)'
            }}
            animate={{ 
              y: [0, 30, 0],
              x: [0, 10, 0],
              rotate: [0, 3, 0]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <img 
              src="/assets/floating-cards.png"
              alt="Floating UI Elements"
              style={{ 
                width: '100%',
                filter: 'drop-shadow(0 10px 40px rgba(255, 0, 122, 0.3))'
              }}
            />
          </motion.div>

          {/* Additional Floating Element (Left) */}
          <motion.div
            style={{
              position: 'absolute',
              top: '20%',
              left: '10%',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, var(--primary), var(--accent))',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              opacity: 0.2,
              filter: 'blur(40px)'
            }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <section style={{ padding: '80px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '16px' }}>Engineered for Performance</h2>
          <p style={{ color: 'var(--text-muted)' }}>Experience Hacker News like never before.</p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '24px' 
        }}>
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel"
              style={{ padding: '2.5rem', transition: 'transform 0.3s ease' }}
              whileHover={{ y: -10 }}
            >
              <div style={{ 
                width: '50px', 
                height: '50px', 
                background: 'rgba(255,255,255,0.05)', 
                borderRadius: '12px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '20px',
                border: '1px solid var(--glass-border)'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px' }}>{feature.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack / Stats Section */}
      <section style={{ 
        marginTop: '60px', 
        padding: '60px', 
        borderRadius: '32px',
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
        border: '1px solid var(--glass-border)',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '32px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Built with Modern Tech
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.6 }}>
          <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>MONGODB</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>EXPRESS</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>REACT</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>NODE.JS</div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800 }}>FRAMER MOTION</div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
