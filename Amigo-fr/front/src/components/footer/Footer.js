// import React, { useEffect, useState } from 'react';
// import './footer.css';
// import logo from './logo.png';
// import { Link } from 'react-router-dom';

// const Footer = () => {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize();

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className="footer-container">
//       <div className="footer-content">
//         <div className="footer-logo">
//           <img src={logo} alt="logo" />
//         </div>
//         <div className="footer-info">
//           <p>
//             Partagez le trajet et le coût avec Amigo, l’unique service de Taxi en Tunisie sous le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.
//           </p>
//         </div>
//         <div className={`footer-links ${isMobile ? 'mobile' : ''}`}>
//           <div className="footer-column">
//             <h3>About</h3>
//             <ul>
//               <li>Notre mission</li>
//               <li>Nos normes de haute qualité</li>
//               <li>Partagez, c'est mieux!</li>
//             </ul>
//           </div>
//           <div className="footer-column">
//             <h3>Contact</h3>
//             <ul className="contact-list">
//               <li>
//                 <Link to="/">+216 95 436 978</Link>
//               </li>
//               <li>
//                 <Link to="/about">contact@getwireless.com.tn</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2023 Amigo. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React, { useEffect, useState } from 'react';
import './footer.css';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-info">
          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>
          <p>
            Partagez le trajet et le coût avec Amigo, l’unique service de Taxi en Tunisie sous le concept de partage de course avec des services de haute qualité qui répondent à vos besoins.
          </p>
        </div>
        <div className={`footer-links ${isMobile ? 'mobile' : ''}`}>
          <div className="footer-section">
            <h3>About</h3>
            <ul>
              <li>
                <Link to="/about#mission">Notre mission</Link>
              </li>
              <li>
                <Link to="/about#quality">Nos normes de haute qualité</Link>
              </li>
              <li>
                <Link to="/about#sharing">Partagez, c'est mieux !</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>
                <FontAwesomeIcon icon={faPhoneAlt} />
                <span>+216 95 436 978</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>
                  <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="40232f2e3421233400212d29272f6e342e">contact@amigo.tn</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
