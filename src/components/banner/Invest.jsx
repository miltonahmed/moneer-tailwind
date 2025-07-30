import Container from '../../Utils/Container';
import { InvestData } from '../../Utils/Data/Banner/InvestData';
import Image from '../../Utils/Image';
import Paragraph from '../../Utils/Paragraph';


const Invest = () => {
  return (
    <section className="pt-[72px] pb-[49px]">
      <Container>
        <div className="text-center max-w-[725px] mx-auto px-4 sm:px-6">
          <h2 className="font-montserrat text-[24px] sm:text-[28px] md:text-[34px] font-bold text-text-primary leading-snug sm:leading-normal">
            Why do Investors Trust Us
          </h2>

          <Paragraph
            className="mt-4 text-sm sm:text-base font-normal text-text-secondary leading-7"
            text="Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros. Aenean mattis "
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-[70px] justify-items-center mt-10">
          {InvestData.map(item => (
            <div
              key={item.id}
              className="pt-[30px] pb-[38px] px-[18px] w-full max-w-[346px] flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 invest_shadow rounded-[12px] border border-gray-200 sm:border-none"
            >
              <div className="w-[80px] h-[80px] rounded-full flex items-center justify-center overflow-hidden shadow-[0_0px_10px_rgba(0,0,0,0.30)]">
                <Image src={item.image} alt={item.title} />
              </div>

              <h1 className="pt-[27px] text-[20px] font-bold text-third font-montserrat tracking-[0.067px] text-center">
                {item.title}
              </h1>

              <p className="pt-[9px] text-[#727272] font-normal font-lato leading-[26px] text-center">
                {item.subTitle}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Invest;
