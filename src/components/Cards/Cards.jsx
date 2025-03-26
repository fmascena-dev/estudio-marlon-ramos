import '../../style/_services.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import CorteOne from '../../assets/corte1.png';
import CorteTwo from '../../assets/corte2.png';

const services = [
  { img: CorteOne, name: 'Corte', price: 'R$ 30,00' },
  { img: CorteTwo, name: 'Barba', price: 'R$ 15,00' },
  { img: '/Cards/cavanhaque.jpg', name: 'Cavanhaque', price: 'R$ 10,00' },
  { img: '/Cards/sobrancelha.jpg', name: 'Sobrancelha', price: 'R$ 10,00' },
  {
    img: '/Cards/reflexo-corte.jpeg',
    name: 'Reflexo com corte',
    price: 'R$ 80,00',
  },
  { img: '/Cards/pigmentacao.jpeg', name: 'Pigmentação', price: 'R$ 15,00' },
  { img: '/Cards/platinado.jpeg', name: 'Platinado global', price: 'R$ 80,00' },
  {
    img: '/Cards/protese-capilar.jpeg',
    name: 'Prótese capilar',
    price: 'Consultar',
  },
  { img: '/Cards/alisamento.png', name: 'Alisamento', price: 'R$ 20,00' },
];

export default function Cards() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={3}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      loop={true}
      breakpoints={{
        1024: { slidesPerView: 3 },
        768: { slidesPerView: 2 },
        480: { slidesPerView: 1 },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="haircut">
            <img src={service.img} alt={service.name} />
            <div className="haircut-info">
              <strong className='nome-service'>{service.name}</strong>
              <button>{service.price}</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}