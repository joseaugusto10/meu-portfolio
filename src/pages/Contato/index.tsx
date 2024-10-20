import './style.css';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaGithub } from 'react-icons/fa';
import Lottie from 'react-lottie';
import animationData from '../../assets/animacao/jose-computer.json';

const Contato = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="contact-container">
      <h1>Contato</h1>
      <p className="contact-text">Entre em contato comigo pelos seguintes canais:</p>

      <div className="contact-info">
        <p>
          <FaEnvelope className="contact-icon" />
          <a href="mailto:jose_augusto2019@hotmail.com">jose_augusto2019@hotmail.com</a>
        </p>
        <p>
          <FaWhatsapp className="contact-icon" />
          <a href="https://wa.me/553497954378" target="_blank" rel="noopener noreferrer">
            34 9 9795-4378
          </a>
        </p>
        <p>
          <FaLinkedin className="contact-icon" />
          
          <a href="https://www.linkedin.com/in/joseaugusto2019" target="_blank" rel="noopener noreferrer">
            www.linkedin.com/in/joseaugusto2019
          </a>
        </p>
        <p>
          <FaGithub className="contact-icon" />
          <a href="https://github.com/joseaugusto10" target="_blank" rel="noopener noreferrer">
          www.github.com/joseaugusto10
          </a>
        </p>
      </div>

      <div className="contact-animation">
        <Lottie options={defaultOptions} height={350} width={350} />
      </div>
    </div>
  );
};

export default Contato;
