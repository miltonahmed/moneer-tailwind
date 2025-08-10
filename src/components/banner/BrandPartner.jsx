import Marquee from 'react-fast-marquee';
import marquee from '../../../src/assets/images/marque/marqu.png';
import Image from '../../Utils/Image';
const BrandPartner = () => {
  return (
    <div>
        <Marquee>
          {[0, 1, 2, 3, 4].map((item, index) => (
            <div key={index} className="w-[95px] h-[79px] flex justify-center mx-10">
              <Image src={marquee} className="w-full" />
            </div>
          ))}
        </Marquee>
      
    </div>
  ); 


};

export default BrandPartner;
