import Phone from '../../../src/assets/images/hero/app-phone.png';
import ShapeCircle from '../../../src/assets/images/hero/circles.png';
import PlayBtn from '../../../src/assets/images/hero/play-btn.svg';
import ShapeOne from '../../../src/assets/images/hero/shape-1.png';
import ShapeTwo from '../../../src/assets/images/hero/shape-2.png';
import ShapeThree from '../../../src/assets/images/hero/shape-3.png';

import Image from '../../Utils/Image';
import Paragraph from '../../Utils/Paragraph';

const Hero = () => {
  return (
    <section className="h-screen hero-bg relative overflow-hidden">
      {/* Background Shapes */}
      <Image
        src={ShapeOne}
        className=" hidden lg:block absolute top-0 right-0 z-0   "
      />
      <Image
        src={ShapeTwo}
        className=" hidden lg:block absolute top-0 right-0 z-0 "
      />
      <div className=" hidden lg:block absolute top-0 w-[408px] h-auto mt-[29px]">
        <Image src={ShapeCircle} className="w-full" />
        <Image
          src={ShapeThree}
          className="absolute top-1/2  -translate-y-1/2 left-0 z-0 "
        />
      </div>

      <div className="max-w-[1109px] mx-auto h-full flex items-center justify-center px-4 sm:px-4 relative z-10  md:my-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-28 sm:gap-4 items-center">
          {/* Left Content */}
          <div className="max-w-[535px] text-center lg:text-left">
            <h4 className="text-sm md:text-base text-text-primary font-montserrat font-bold leading-6 tracking-tight">
              Convert Ideas into practical Applications
            </h4>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-montserrat font-bold text-text-blue tracking-[0.2px] mt-6 mb-4">
              New Digital App for blockchain
            </h1>
            <Paragraph
              className="text-base font-bold font-lato leading-7 text-text-primary"
              text="Quisque tincidunt molestie erat quis viverra. Proin accumsan risus quis nunc tempor, nec blandit orci gravida. Vivamus convallis nec tortor ut sollicitudin. In in ultrices erat. Mauris sollicitudin urna sed lacinia tempor"
            />
            <div className="flex flex-col sm:flex-row gap-6 mt-8 items-center">
              <button className="w-44 h-12 rounded-3xl btn-bg font-montserrat text-sm font-semibold text-white">
                Read More
              </button>
              <div className="flex gap-x-4 items-center">
                <div className="w-[38px] h-[38px]">
                  <Image src={PlayBtn} className="w-full" alt="Play Button" />
                </div>
                <h3 className="text-base font-bold font-lato text-text-primary tracking-[0.553px]">
                  Watch Video
                </h3>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className=" relative">
            <div className="w-[350px] md:w-[450px] lg:w-[572px] absolute left-32 top-0 -translate-y-1/2 z-10">
              <Image src={Phone}  className="w-full h-auto " alt="Phone Image" />
            </div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Hero;
