import Container from '../../Utils/Container';
import { RecentProjectData } from '../../Utils/Data/Banner/RecentProjectData';
import Paragraph from '../../Utils/Paragraph';
import RecentProjectCard from '../Common/Slider/RecentProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper imports
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const RecentProject = () => {
  return (
    <section className="py-[90px] bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-text-primary text-4xl font-bold mb-3">
            Recent Projects
          </h2>
          <Paragraph
            className="text-base text-text-secondary font-lato font-normal leading-[26px] max-w-[726px] mx-auto"
            text="Phasellus sodales est id sapien condimentum sagittis. Vivamus eget lorem augue. Nunc ut diam tellus. Fusce mattis luctus sem, sollicitudin tincidunt ante ullamcorper"
          />
        </div>
        <div className="w-full">
          <Swiper
            slidesPerView={3}
            spaceBetween={34}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {RecentProjectData.map(item => (
              <SwiperSlide key={item.id}>
                <RecentProjectCard
                  image={item.image}
                  title={item.title}
                  subTitle={item.subTitle}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Swiper Slider */}
      </Container>
    </section>
  );
};

export default RecentProject;
