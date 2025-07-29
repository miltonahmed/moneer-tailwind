import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Container from '../../Utils/Container';
import { RecentProjectData } from '../../Utils/Data/Banner/RecentProjectData';
import Paragraph from '../../Utils/Paragraph';
import RecentProjectCard from '../Common/Slider/RecentProjectCard';

// Swiper imports
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const RecentProject = () => {
   const pagination = {
     clickable: true,
     renderBullet: function (index, className) {
       return '<span class="' + className + '">'  + '</span>';
     },
   };

  
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
        <div className="w-full relative">
          <div className="absolute h-[265px] -left-11 flex items-center">
            <MdOutlineNavigateBefore className="text-2xl text-[#B2B1B1] cursor-pointer prevSlider" />
          </div>
          <div className="absolute h-[265px] -right-11 flex items-center ">
            <MdOutlineNavigateNext className="text-2xl text-[#B2B1B1] cursor-pointer nextSlider" />
          </div>
          <Swiper
            slidesPerView={3}
            spaceBetween={34}
            loop={true}
            pagination={pagination}
            navigation={{
              prevEl: '.prevSlider',
              nextEl: '.nextSlider',
            }}
            modules={[Pagination, Navigation]}
            className="recentProjectSlider"
            breakpoints={{
              350: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 34,
              },
            }}
            
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
