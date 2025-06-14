import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">MindMirror</div>
        <div className="footer-tagline">Reflect. Heal. Grow.</div>
        <div className="footer-rights">
          © {new Date().getFullYear()} MindMirror. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
