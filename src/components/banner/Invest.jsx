import Container from '../../Utils/Container';
import Paragraph from '../../Utils/Paragraph';

const Invest = () => {
  return (
    <section className="pt-[72px] pb-[49px]">
      <Container>
        <div className="text-center max-w-[725px] mx-auto">
          <h2 className="font-montserrat text-[34px] font-bold text-text-primary leading-normal">
            Why do Investors Trust Us
          </h2>
          <Paragraph
            className="text-base font-normal text-text-secondary leading-7 "
            text="Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros. Aenean mattis "
          />
        </div>
        <div className="">
          <svg
            className="fill-white filter drop-shadow-[0_2px_16px_rgba(20,23,120,0.14)] hover:drop-shadow-[0_4px_20px_rgba(20,23,120,0.3)] transition-all duration-300 w-[80px] h-[80px]"
             >

                        
            </svg>
        </div>
      </Container>
    </section>
  );
};

export default Invest;
