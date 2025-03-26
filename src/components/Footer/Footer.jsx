import '../../style/_footer.scss';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../../assets/logo-studio.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div
        className="footer-icons"
        data-aos="flip-up"
        data-aos-delay="300"
        data-aos-duration="2000"
      >
        <a href="https://www.instagram.com/marlonestudio" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com/marlon.ramos.756" target="_blank">
          <FaFacebook />
        </a>
        <a href="#">
          <FaYoutube />
        </a>
      </div>

      <div className="logo-footer">
        <img
          src={Logo}
          alt="Logo da Barbearia"
          data-aos="flip-up"
          data-aos-delay="300"
          data-aos-duration="2000"
        />
      </div>

      <div className="direitos-footer">
        <p>
          Copyright 2025 | Estúdio de Corte Marlon Ramos - Todos os direitos
          reservados.
        </p>
      </div>

      <span className="desenvolvedor">
        Desenvolvido por{' '}
        <a href="https://www.linkedin.com/in/felipe-mascena" target="_blank">
          Felipe Mascena
        </a>
      </span>
    </footer>
  );
}
