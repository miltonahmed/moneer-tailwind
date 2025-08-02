import { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import Logo from '../../assets/images/logo.png';
import Container from '../../Utils/Container';
import { menuData } from '../../Utils/Data/MenuData';
import Image from '../../Utils/Image';
import ResponseBar from './ResponseBar';


const Navbar = () => {
  const [showBars, setShowBars] = useState(false);

  
  return (
    <>
      <nav className=" py-3 sm:py-4 lg:py-6 bg-navBg overflow-x-hidden absolute top-0 left-0 w-full z-50">
        <Container>
          <div className="flex justify-between items-center xs:mx-4 md:mx-6 xl:mx-auto">
            {/* Logo  */}
            <Link to="/">
              <Image src={Logo} alt="company logo" />
            </Link>
            {/* Menu  */}
            <ul className=" hidden lg:flex items-center gap-14">
              {menuData.map(item => (
                <li key={item.id}>
                  {/* Menu link  */}
                  <NavLink
                    to={item.path}
                    className="text-white text-base font-bold font-lato capitalize leading-6 tracking-[0.7px] relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-full after:h-[2px] after:transition-transform after:duration-300 hover:after:scale-x-100 after:scale-x-0 navItemHover hover:font-black"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <FaUser className="text-white text-base" />
            </ul>
            {/* Bars icons  */}
            <FaBars
              onClick={() => setShowBars(true)}
              className="text-white text-2xl lg:hidden"
            />
          </div>
        </Container>
        {(
          <ResponseBar showBars={showBars} setShowBars={setShowBars} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
