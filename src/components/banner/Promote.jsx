import simpleImage from '../../../src/assets/images/promote.png';
import Container from '../../Utils/Container';
import { PromoteData } from '../../Utils/Data/Banner/PromoteData';
import Image from '../../Utils/Image';
import Paragraph from '../../Utils/Paragraph';
const Promote = () => {
  return (
    <section className=" xs:py-4 md:py-6 lg:py-10 relative ">
      <Container>
        <div className=" flex gap-24  ">
          <div>
            <h3 className="text-[34px] text-text-primary font-bold leading-12 font-montserrat">
              Promote your Cryptocurrency{' '}
            </h3>

            <div>
              {PromoteData.map(item => (
                <div
                  key={item.id}
                  className="flex flex-col items-start sm:flex-row   gap-8 mb-10 mt-10"
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
          <div className="flex-1 relative">
            <div className=" -mr-[200px] hidden lg:block">
              <Image
                src={simpleImage}
                alt="Promotion Visual"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
      {/* <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src={shapeImage}
          alt="Section Bottom Shape"
          className="w-full h-auto object-cover"
        />
      </div> */}
    </section>
  );
};
export default Promote;