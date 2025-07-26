import { Outlet } from "react-router"
import Navbar from "../Header/Navbar"
import Footer from "../footer/Footer"

const RootLayouts = () => {
  return (
    <>
      <Navbar/>
       <Outlet/>
       <Footer/>
    </>
  )
}

export default RootLayouts