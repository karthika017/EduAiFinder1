import React from 'react';
import { Mail, Phone, MapPin, Globe, Link2 } from 'lucide-react';
import logoImg from '../../assets/logo.png'; // Make sure this points to your new logo file
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Info & Socials */}
        <div className="footer-col brand-col">
          <div className="footer-logo" style={{ marginBottom: '15px' }}>
            <img 
              src={logoImg} 
              alt="EduAI Finder Logo" 
              style={{ 
                height: '40px', 
                width: 'auto', 
                objectFit: 'contain' 
              }} 
            />
          </div>
          <p className="brand-description">
            Discover the best AI tools for teaching, learning and research.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Website" className="social-icon"><Globe size={20} /></a>
            <a href="#" aria-label="Twitter" className="social-icon"><Link2 size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="social-icon"><Link2 size={20} /></a>
            <a href="#" aria-label="Social Link" className="social-icon"><Link2 size={20} /></a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#students">Students</a></li>
            <li><a href="#teachers">Teachers</a></li>
            <li><a href="#researchers">Researchers</a></li>
            <li><a href="#categories">Categories</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </div>

        {/* Column 3: Categories */}
        <div className="footer-col">
          <h3>Categories</h3>
          <ul>
            <li><a href="#learning">Learning</a></li>
            <li><a href="#teaching">Teaching</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#programming">Programming</a></li>
            <li><a href="#writing">Writing</a></li>
            <li><a href="#presentation">Presentation</a></li>
            <li><a href="#data-analysis">Data Analysis</a></li>
            <li><a href="#productivity">Productivity</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col contact-col">
          <h3>Contact</h3>
          <ul className="contact-list">
            <li>
              <Mail size={18} className="contact-icon" />
              <a href="mailto:info@eduaiFinder.com">info@eduaiFinder.com</a>
            </li>
            <li>
              <Phone size={18} className="contact-icon" />
              <a href="tel:+911234567890">+91 1234567890</a>
            </li>
            <li>
              <MapPin size={18} className="contact-icon" />
              <span>India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <p>&copy; {currentYear} EduAI Finder. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;