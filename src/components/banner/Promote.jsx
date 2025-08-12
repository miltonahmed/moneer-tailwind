import Shape from '../../../src/assets/images/promot-shape.png';
import simpleImage from '../../../src/assets/images/promote.png';
import Container from '../../Utils/Container';
import { PromoteData } from '../../Utils/Data/Banner/PromoteData';
import Image from '../../Utils/Image';
import Paragraph from '../../Utils/Paragraph';
const Promote = () => {
  return (
    <section className=" relative mt-[80px] py-24">
      <div className="absolute top-0 left-0 z-0">
        <img src={Shape} alt="Section Bottom Shape" />
      </div>
      <Container>
        <div className=" flex gap-24 relative z-10 ">
          <div className='w-[540px]'>
            <h3 className=" text-4xl text-text-primary font-bold  font-montserrat">
              Promote your Cryptocurrency
            </h3>

            <div className="">
              {PromoteData.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col items-start sm:flex-row   gap-8 mb-10 mt-10 max-w-[540px]"
                >
                  {/* Image */}
                  <div className="w-[80px] h-[80px] rounded-full flex justify-center  items-center  overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.30)]">
                    <Image src={item.image} alt={item.title} />
                  </div>

                  {/* Text Content */}
                  <div className="  max-w-[422px] sm:w-full">
                    <h3 className=" text-base text-[#000619] font-bold  font-montserrat leading-6 tracking-[0.333px] mb-[15px]">
                      {item.title}
                    </h3>
                    <Paragraph text={item.subTitle} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=" relative z-10">
            <div className=" -mr-[200px] hidden lg:block">
              <Image
                src={simpleImage}
                alt="Promotion Visual"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default Promote;