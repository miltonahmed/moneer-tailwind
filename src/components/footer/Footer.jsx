import { FaChevronRight, FaPhone, FaRegEnvelope } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router';
import Logo from '../../assets/images/footer-logo.png';
import Container from '../../Utils/Container';
import { footerMenuData, } from '../../Utils/Data/Footer/FooterMenuData';
import { footerTitleData } from '../../Utils/Data/Footer/FooterTitleData';
import Image from '../../Utils/Image';
import Paragraph from '../../Utils/Paragraph';

const Footer = () => {
  return (
    <footer className="py-12 sm:py-20 md:py-28 footer-bg">
      <Container>
        <div className=" flex lg:gap-14  2xl:gap-x-[100px] items-center xs:mx-4 md:mx-6 xl:mx-auto max-lg:flex-wrap gap-y-5 sm:justify-between">
          {/* Footer Logo part  */}
          <div className=" w-full sm:w-[60%] md:w-[285px] ">
            {/* footer logo  */}
            <Link>
              <Image src={Logo} alt="footer logo" />
            </Link>
            {/* Paragraph */}
            <Paragraph
              text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo"
              className="font-lato font-normal text-base leading-7 text-white mt-7 max-w-[400px]"
            />

            <address className="inline-grid  grid-cols-1 gap-4">
              <Link
                to="mail:"
                className="inline-grid grid-cols-[16px_auto] gap-x-[18px]"
              >
                <FaRegEnvelope className=" text-secondary mt-2" />
                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  monnersupport@email.com
                </span>
              </Link>
              <Link
                to="call:123-123-123"
                className="inline-grid grid-cols-[16px_auto] gap-x-[18px]"

              >
                <FaPhone className="text-secondary mt-2" />
                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  (+1) 123-123-123
                </span>
              </Link>
              <Link
                to="https://maps.app.goo.gl/xxfH919ot456AQbk8"
                target="_blank"
                className="grid grid-cols-[16px_auto] gap-x-[18px] "
              >
                <MdLocationOn className="text-secondary mt-2" />

                <span className="font-lato text-white font-bold text-base leading-6 tracking-[0.7px] ">
                  275 Jimmy Way Copperopolis, California(CA), 95228
                </span>
              </Link>
            </address>
          </div>
          {/* Footer Middle  */}
          <div className=" w-full sm:w-[30%] md:w-[186px] pt-5">
            <h4 className="font-montserrat text-2xl text-white tracking-[0.8px] font-bold capitalize pt">
              Company
            </h4>
            <div className="flex gap-y-4">
              <ul className="mt-8">
                {footerMenuData.map((item, index) => (
                  <li key={index}>
                    <Link className="grid grid-cols-[14px_auto] gap-x-2 mt-3 items-center">
                      <FaChevronRight className="text-secondary mt-2" />
                      <span className="font-lato font-bold text-base text-white leading-6 tracking-[0.7px] capitalize">
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Footer Right  */}
          <div className=" w-full lg:w-[436px] ">
            <h4 className="font-montserrat text-2xl text-white tracking-[0.8px] font-bold capitalize leading-[52px]">
              Recent News
            </h4>
            <div className="mt-[22px] grid grid-cols-1 md:grid-cols-2  lg:grid-cols-1  gap-y-[14px] gap-x-5">
              {footerTitleData.map((item, index) => (
                <Link
                  to="/"
                  key={index}
                  className="border-b border-white/25 pb-4 block cursor-pointer"
                >
                  <h5 className="font-montserrat text-base font-bold text-white leading-6 tracking-[0.533px]">
                    {item.title}
                  </h5>
                  <div className="flex gap-x-2">
                    <span className="font-lato text-sm font-bold text-[#AEADAD]/75">
                      Published on:
                    </span>
                    <span className="font-lato text-sm font-bold text-[#AEADAD]">
                      {item.date}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
