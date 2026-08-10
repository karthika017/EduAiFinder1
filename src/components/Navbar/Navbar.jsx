import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 40px',
      backgroundColor: '#0f4c81',
      color: '#ffffff'
    }}>
      {/* Brand Logo / Title */}
      <div style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none' }}>
          EduAI Finder
        </Link>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Link to="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
          Home
        </Link>

        <Link to="/about" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
          About
        </Link>

        {/* Updated: Points to /#categories anchor instead of /categories page */}
        <a href="/#categories" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '500' }}>
          Categories
        </a>
      </div>
    </nav>
  );
}