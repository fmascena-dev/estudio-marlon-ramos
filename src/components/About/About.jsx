import '../../style/_about.scss';
import Cortes from '../../assets/images.svg';

export default function About() {
  return (
    <section className="about">
      <div className="container about-content">
        <div
          className="logo-about"
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <img src={Cortes} alt="Imagem sobre a barbearia" />
        </div>

        <div
          className="about-description"
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="1500"
        >
          <h2>SOBRE</h2>
          <p>
            Somos mais do que uma barbearia, somos um espaço dedicado ao estilo,
            cuidado e bem-estar masculino. Com profissionais qualificados e
            apaixonados pelo que fazem, oferecemos cortes modernos, cuidados com
            a barba, sobrancelha, pigmentação capilar, manutenção de prótese e
            muito mais. Aqui, cada detalhe é pensado para proporcionar a melhor
            experiência, unindo tradição e tendências para elevar sua
            autoestima. Venha conhecer nosso espaço e transforme seu visual com
            quem entende do assunto!
          </p>
          <p>
            Horário de funcionamento: <strong className="horario">09:00</strong>{' '}
            às <strong className="horario">19:00</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
