import BlockChain from "./BlockChain"
import BrandPartner from "./BrandPartner"
import ContactForm from "./ContactForm"
import Divider from "./Divider"
import Hero from "./Hero"
import Invest from "./Invest"
import Promote from "./Promote"
import RecentProject from "./RecentProject"
import RoadMap from "./RoadMap"

const Banner = () => {
  return (
    <>
      <Hero />
      {/* <SwiperLogo/> */}
      <BrandPartner />
      <Divider />
      <Invest />
      <BlockChain/>
      <Promote />
      <RecentProject />
      <RoadMap/>
      <ContactForm />
    </>
  );
}

export default Banner