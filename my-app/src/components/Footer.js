import React from 'react';
import '../Styles/footer.css';

const Footer = ({ readElement }) => {
  const footerLinks = [
    { name: 'Website Policies', url: '#website-policies' },
    { name: 'Terms & Conditions', url: '#terms-conditions' },
    { name: 'Help', url: '#help' },
    { name: 'Abbreviations', url: '#abbreviations' },
    { name: 'Sitemap', url: '#sitemap' },
    { name: 'Archive', url: '#archive' },
    { name: 'Downloads', url: '#downloads' },
    { name: 'Feedback', url: '#feedback' },
    { name: 'Visitor Pass', url: '#visitor-pass' },
    { name: 'Important Links', url: '#important-links' },
    { name: 'Contact Us', url: '#contact-us' },
    { name: 'Gallery', url: '#gallery' },
  ];

  return (
    <footer className="footer bg-light py-3" role="contentinfo">
      <div className="container">
        <div className="footer-content">
          {/* Navigation Links as List */}
          <nav className="footer-nav" role="navigation">
            {footerLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                onMouseEnter={() => readElement(`Navigate to ${link.name}`)} // TTS on hover
                onMouseLeave={() => readElement('')} // Stop reading on mouse leave
                tabIndex="0" // Allow keyboard navigation
              >
                {link.name} {index < footerLinks.length - 1 ? '|' : ''}
              </a>
            ))}
          </nav>

          {/* Last Updated Section */}
          <div className='footer-last'>
            <div className="last-updated">
              <p
                onMouseEnter={() => readElement(`Last Updated On: 10-10-2024 09:55:21`)} // TTS on hover
                onMouseLeave={() => readElement('')} // Stop reading on mouse leave
                tabIndex="0" // Allow keyboard navigation
              >Last Updated On: 10-10-2024 09:55:21</p>
            </div>

            {/* Logo Section */}
            <div className="footer-logo">
              <img 
                src="./indiagovin_logo.png" 
                alt="Government of India" 
                onMouseEnter={() => readElement('Government of India logo')} // TTS for logo
                onMouseLeave={() => readElement('')} // Stop reading on mouse leave
              />
            </div>
          </div>
          <div className="footer-copyright">
            <p
              onMouseEnter={() => readElement('Content owned & provided by Ministry of Electronics & Information Technology, Government of India')} // TTS on hover
              onMouseLeave={() => readElement('')} // Stop reading on mouse leave
              tabIndex="0" // Allow keyboard navigation
                          
            >Content owned & provided by Ministry of Electronics & Information Technology, Government of India</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;