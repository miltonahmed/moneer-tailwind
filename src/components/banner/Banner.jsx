import ContactForm from "./ContactForm"
import Divider from "./Divider"
import Hero from "./Hero"
import Invest from "./Invest"
import Promote from "./Promote"
import RecentProject from "./RecentProject"

const Banner = () => {
  return (
    <>
     <Hero/>
       {/* <SwiperLogo/> */}
      <Divider/> 
      <Invest/> 
      <RecentProject/>
      <ContactForm/>
      <Promote/>
      
    </>
  )
}

export default Banner