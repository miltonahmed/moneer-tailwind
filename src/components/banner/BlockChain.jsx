import simpleImage from '../../../src/assets/images/form-img.png';
import Shape from '../../../src/assets/images/from-oval.png';
import Container from '../../Utils/Container';
import { BlockChainData } from '../../Utils/Data/Banner/BlockChainData';
import { ProgressbarData } from '../../Utils/Data/Banner/ProgressbarData';
import Image from '../../Utils/Image';

import Paragraph from '../../Utils/Paragraph';
 

const BlockChain = () => {
  return (
    <section className="py-10 mt-[49px] mb-[135px] relative ">
      <Image className="absolute left-0 bottom-0 z-0" src={Shape} />
      <Container>
        <div className="grid grid-cols-2">
          <div className="w-[678px] overflow-hidden">
            <Image
              src={simpleImage}
              className="z-10 absolute left-0 bottom-0 "
            />
          </div>

          <div className="w-[553px]">
            <h3 className="font-montserrat font-bold text-4xl leading-12 text-text-primary mb-6">
              Moving your Existing Solution to the Blockchain
            </h3>
            <div className="grid grid-cols-2 gap-[17px] ">
              {BlockChainData.map((item, i) => (
                <div className=" flex gap-2.5 relative " key={i}>
                  {item.icon}
                  <div>
                    <h4 className="font-montserrat text-base font-bold leading-6 tracking-normal  text-text-primary mb-1">
                      {item.title}
                    </h4>
                    <span className="font-lato text-base font-normal leading-7 text-text-secondary">
                      {item.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 mb-6 ">
              {ProgressbarData.map((item, i) => (
                <div className="flex justify-between items-center" key={i}>
                  <h5 className="font-montserrat text-sm font-bold leading-6 text-[#3E3D3D]">
                    {item.label}
                  </h5>
                  <div className="w-[369px] h-1 bg-[#D9D9D9] opacity-50 rounded-sm">
                    <div
                      className={`btn-bg ${item.barWidth} h-1 rounded-sm`}
                    ></div>
                  </div>
                  <span className="font-montserrat text-sm font-bold leading-6 text-[#3E3D3D]">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
            <Paragraph
              className="font-lato text-base font-normal leading-7 text-text-secondary"
              text=" Aliquam bibendum mi egestas mi tempus hendrerit vehicula pretium sem, porta suscipit erat maximum faucibus vel"
            />

            <button className="w-3xs h-12 rounded-3xl btn-bg font-montserrat text-sm font-semibold text-white mt-2.5">
              Read More
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BlockChain;
