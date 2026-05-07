import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Lock, ShieldCheck, ArrowRight, UserPlus } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const { register } = useContext(AuthContext);
  const { addToast } = useToast();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password.length < 6) {
      addToast('Password must be at least 6 characters long', 'error');
      return;
    }
    
    setLoading(true);
    
    try {
      await register(formData.username, formData.email, formData.fullName, formData.password);
      addToast(`Welcome to Neoscrape, ${formData.username}!`, 'success');
      navigate('/feed');
    } catch (err) {
      const errorMsg = err.response?.data?.message || 'Registration failed. Try again.';
      addToast(errorMsg, 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh',
      padding: '2rem 0'
    }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="glass-panel" 
        style={{ 
          padding: '3rem', 
          width: '100%', 
          maxWidth: '500px',
          border: '1px solid var(--primary)',
          boxShadow: '0 0 40px var(--primary-glow)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '4px', 
          background: 'linear-gradient(to right, var(--primary), var(--accent))' 
        }} />
        
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            style={{ 
              width: '60px', 
              height: '60px', 
              background: 'rgba(255, 0, 122, 0.1)', 
              borderRadius: '15px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 1rem' 
            }}
          >
            <UserPlus color="var(--primary)" size={30} />
          </motion.div>
          <h2 style={{ 
            fontSize: '2.25rem', 
            fontWeight: 800, 
            letterSpacing: '-1px',
            marginBottom: '0.5rem',
            color: 'var(--text-main)' 
          }}>Join the Elite</h2>
          <p style={{ color: 'var(--text-muted)' }}>Access real-time tech insights and bookmark your favorites.</p>
        </div>


        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="form-group">
            <label style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>Full Name</label>
            <div style={{ position: 'relative' }}>
              <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                name="fullName"
                className="form-control" 
                placeholder="John Doe"
                style={{ paddingLeft: '40px' }}
                value={formData.fullName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>Username</label>
            <div style={{ position: 'relative' }}>
              <ShieldCheck size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                name="username"
                className="form-control" 
                placeholder="johndoe123"
                style={{ paddingLeft: '40px' }}
                value={formData.username}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>Email Address</label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="john@example.com"
                style={{ paddingLeft: '40px' }}
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label style={{ color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 500 }}>Secure Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="password" 
                name="password"
                className="form-control" 
                placeholder="••••••••"
                style={{ paddingLeft: '40px' }}
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <motion.button 
            whileHover={{ scale: 1.02, boxShadow: '0 0 20px var(--primary-glow)' }}
            whileTap={{ scale: 0.98 }}
            type="submit" 
            disabled={loading}
            className="btn btn-primary" 
            style={{ 
              width: '100%', 
              marginTop: '1rem', 
              padding: '1rem', 
              fontSize: '1.1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              background: 'linear-gradient(to right, var(--primary), var(--accent))',
              opacity: loading ? 0.7 : 1
            }}
          >
            {loading ? 'Initializing...' : (
              <>
                Create Account <ArrowRight size={20} />
              </>
            )}
          </motion.button>
        </form>

        <div style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--text-muted)' }}>
          Already part of the network? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 600 }}>Sign In</Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Register;
