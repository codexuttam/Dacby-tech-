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
          padding: '120px 20px 40px', 
          position: 'relative' 
        }}
      >
        {/* Animated Background Orbs */}
        <div style={{ 
          position: 'absolute', 
          top: '10%', 
          left: '10%', 
          width: '400px', 
          height: '400px', 
          background: 'rgba(255, 0, 122, 0.15)', 
          filter: 'blur(120px)', 
          borderRadius: '50%', 
          zIndex: -1,
          opacity: 0.3
        }}></div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          gap: '60px',
          flexWrap: 'wrap'
        }}>
          {/* Left Side: Content */}
          <div style={{ flex: '1', minWidth: '320px', textAlign: 'left' }}>
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
              fontSize: 'clamp(2.5rem, 6vw, 4rem)', 
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
              maxWidth: '600px', 
              marginBottom: '40px',
              lineHeight: 1.6
            }}>
              The ultimate platform for developers to track the pulse of tech. 
              Aggregated, curated, and styled with a premium cyber-dark aesthetic.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px' }}>
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
          </div>

          {/* Right Side: Infographic */}
          <motion.div 
            variants={itemVariants}
            style={{ 
              flex: '1', 
              minWidth: '320px', 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: '100%',
                maxWidth: '500px',
                maskImage: 'radial-gradient(circle, black 80%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle, black 80%, transparent 100%)'
              }}
            >
              <img 
                src="/assets/hero-infographic.png" 
                alt="Technical Infographic" 
                style={{ 
                  width: '100%', 
                  filter: 'drop-shadow(0 0 30px var(--primary-glow))' 
                }}
              />
            </motion.div>
          </motion.div>
        </div>
        
      </motion.section>

      {/* Feature Section 1: Unified Dashboard (Image Left, Text Right) */}
      <section style={{ padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '80px', 
          flexWrap: 'wrap-reverse',
          justifyContent: 'center'
        }}>
          {/* Visual: Tablet */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              flex: '1', 
              minWidth: '320px', 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative',
              maskImage: 'radial-gradient(circle, black 80%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 80%, transparent 100%)'
            }}
          >
            <motion.img 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              src="/assets/hero-tablet.png" 
              alt="Unified Dashboard" 
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))',
                borderRadius: '24px'
              }}
            />
          </motion.div>

          {/* Text: Dashboard Content */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>Deep Technical Intelligence</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Experience a unified dashboard that tracks performance metrics, active threats, and system health in real-time. 
                Neoscrape is engineered for developers who demand high-fidelity data and zero latency.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                  Real-time Network Activity Tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                  Advanced Traffic Distribution Charts
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600 }}>
                  <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                  Live Event Logging & Monitoring
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Section 2: Smart Curation (Text Left, Image Right) */}
      <section style={{ padding: '80px 0', overflow: 'hidden' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '80px', 
          flexWrap: 'wrap',
          justifyContent: 'center'
        }}>
          {/* Text: Curation Content */}
          <div style={{ flex: '1', minWidth: '320px' }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '24px' }}>Curated for the Modern Developer</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '32px' }}>
                Stay ahead of the curve with AI-driven curation. We filter the noise of Hacker News to bring you 
                the most relevant technical breakthroughs, industry shifts, and gadgets that matter.
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <div className="glass-panel" style={{ padding: '20px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)' }}>500+</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Stories Daily</div>
                </div>
                <div className="glass-panel" style={{ padding: '20px', flex: 1, textAlign: 'center' }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent)' }}>0ms</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Sync Latency</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Visual: Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              flex: '1', 
              minWidth: '320px', 
              display: 'flex', 
              justifyContent: 'center',
              position: 'relative',
              maskImage: 'radial-gradient(circle, black 80%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(circle, black 80%, transparent 100%)'
            }}
          >
            <motion.img 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              src="/assets/floating-cards.png" 
              alt="Smart Curation" 
              style={{ 
                width: '100%', 
                maxWidth: '600px', 
                filter: 'drop-shadow(0 10px 40px rgba(255, 0, 122, 0.2))'
              }}
            />
          </motion.div>
        </div>
      </section>

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
