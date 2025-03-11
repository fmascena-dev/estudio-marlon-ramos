import { useEffect } from 'react';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import Services from './components/Services/Services';
import AOS from 'aos';
import 'aos/dist/aos.css';
import WhatsAppButton from './components/ButtonWhatsapp/WhatsAppButton';

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      delay: 300,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <>
      <Header />
      <About />
      <Services />
      <Map />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
