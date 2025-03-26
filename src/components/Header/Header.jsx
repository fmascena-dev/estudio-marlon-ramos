import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import Logo from '../../assets/logo-studio.png';
import '../../style/_header.scss';

export default function Header() {
  return (
    <header className="bg-header container">
      <section className="section-header">
        <div className="ghost">
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
        <figure className="logo">
          <img src={Logo} alt="Logo do Estúdio" />
        </figure>

        <div className="btn-header">
          <a
            href="https://sites.appbarber.com.br/agendamento/estudiodecortemarlonramos"
            className="btn-agendar"
            target="_blank"
          >
            Agendar Horário
          </a>
        </div>
      </section>

      <section className="hero container">
        <h1>ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE.</h1>
        <p>
          Horário de funcionamento: <strong>09:00</strong> às{' '}
          <strong>19:00</strong>
        </p>
        <a
          href="https://sites.appbarber.com.br/agendamento/estudiodecortemarlonramos"
          class="button-contact"
          target="_blank"
        >
          Agendar horário
        </a>
      </section>
    </header>
  );
}
