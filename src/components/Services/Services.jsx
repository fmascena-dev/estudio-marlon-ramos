import '../../style/_services.scss'
import CorteOne from '../../assets/corte1.png'
import CorteTwo from '../../assets/corte2.png'
import CorteThree from '../../assets/corte3.png'


export default function Services() {
    return (
      <section className="services">
        <div className="container services-content">
          <h2 data-aos="fade-right" data-aos-delay="300" data-aos-duration="1500">
            SERVIÇOS
          </h2>
          <p data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
            Na nossa barbearia, oferecemos um atendimento personalizado para
            realçar o seu estilo com precisão e qualidade. Trabalhamos com
            cortes masculinos modernos e clássicos, sempre valorizando o seu
            visual. Além disso, cuidamos da sua barba com técnicas precisas para
            um acabamento impecável e confortável. Para quem deseja um olhar
            mais marcante, realizamos o design de sobrancelhas, garantindo um
            formato harmonioso e natural. Também oferecemos pigmentação capilar,
            ideal para cobrir falhas e dar mais densidade aos fios, além de
            reflexos para quem busca um toque moderno e iluminado no cabelo. Se
            precisar de um retoque rápido, o pezinho mantém o corte sempre
            alinhado e bem definido. Para quem usa prótese capilar, realizamos a
            manutenção completa, garantindo durabilidade, conforto e um aspecto
            natural. E, claro, os pequenos também têm espaço aqui! Com paciência
            e dedicação, realizamos cortes infantis para deixar os pequenos
            estilosos e satisfeitos. Venha viver a experiência de um atendimento
            de qualidade e saia renovado! ✂️
          </p>
        </div>
        <section className="haircuts">
          <div
            className="haircut"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <img src={CorteOne} alt="Corte de cabelo normal" />
            <div className="haircut-info">
              <strong>Corte de cabelo normal</strong>
              <button>R$ 45,00</button>
            </div>
          </div>

          <div
            className="haircut"
            data-aos="flip-up"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <img src={CorteTwo} alt="Barba completa" />
            <div className="haircut-info">
              <strong>Barba completa</strong>
              <button>R$ 35,00</button>
            </div>
          </div>

          <div
            className="haircut"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            <img src={CorteThree} alt="Corte de cabelo e barba" />
            <div className="haircut-info">
              <strong>Cabelo e barba</strong>
              <button>R$ 70,00</button>
            </div>
          </div>
        </section>
      </section>
    );
};
