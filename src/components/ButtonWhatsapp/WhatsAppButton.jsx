import { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import '../../style/_whatsapp-button.scss'; // Importa o SCSS

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Função para detectar o scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5521969635460?text=Ol%C3%A1,%20gostaria%20de%20agendar%20um%20hor%C3%A1rio."
      className={`whatsapp-button ${isVisible ? 'visible' : ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}
