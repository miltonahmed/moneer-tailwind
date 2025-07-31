import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import swiperLogoImage from '../../../src/assets/images/swiper/swiper-logo.png';
import Container from '../../Utils/Container';

const logos = [
  swiperLogoImage,
  swiperLogoImage,
  swiperLogoImage,
  swiperLogoImage,
  swiperLogoImage,
];

const SwiperLogo = () => {
  return (
    <section className="bg-gray-900 py-10">
      <Container>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center items-center"
            >
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default SwiperLogo;
