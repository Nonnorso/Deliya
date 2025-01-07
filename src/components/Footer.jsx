import { Link, useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {

    const navigate = useNavigate();
  
    const handleNavigate = (path) => {
      window.scrollTo(0, 0);
      navigate(path);
    };
  
    return (
      <footer className="footer-container">
          <h2 id="contact">Contactez-moi</h2>
          <p><a href="tel:+33623115647"><span className="icon">✆</span> 06.23.11.56.47</a></p>
          <p> <a href="mailto:eliya.philippot@gmail.com"><span className="icon">✉</span> eliya.philippot@gmail.com</a></p>
          <p><Link to="/LegalMentions" onClick={() => handleNavigate('/LegalMentions')}>Mentions Légales</Link></p>
          <p>© 2025 Nonnorso &#128059; All rights reserved</p>
      </footer>
    );
  };
  
  export default Footer;