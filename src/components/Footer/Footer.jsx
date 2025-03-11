import '../../style/_footer.scss'
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
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
          <a href="#">
            <FaInstagram />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaYoutube />
          </a>
        </div>

        <div className='logo-footer'>
          <img
            src={Logo}
            alt="Logo da Barbearia"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="2000"
          />
        </div>

        <div className='direitos-footer'>
          <p>Copyright 2025 | Estúdio de Corte Marlon Ramos - Todos os direitos reservados.</p>
        </div>
      </footer>
    );
}