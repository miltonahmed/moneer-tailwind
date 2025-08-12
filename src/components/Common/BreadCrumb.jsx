import { useState } from 'react';
import { FaAngleRight } from 'react-icons/fa';
import { Link } from 'react-router';
import breadCrumb from '../../../src/assets/images/breadcrumb.jpg';
import Container from '../../Utils/Container';
const BreadCrumb = () => {

  const [pathName] = useState(window.location.pathname)
  const pathArray = pathName?.split('/');
  const currentPath = pathArray[1]
  return (
    <section>
      <div
        className="bg-cover bg-center p-[92px_0_125px_0] "
        style={{ backgroundImage: `url(${breadCrumb})` }}
      >
        <Container>
          <h3 className="text-center font-montserrat text-4xl font-bold leading-12 text-white tracking-widest capitalize">
            {currentPath}
          </h3>
          <div className="flex justify-center items-center gap-2 mt-9">
            <Link to="/home">
              <h5 className="font-lato text-sm font-bold leading-normal text-white">
                Home
              </h5>
            </Link>
            <FaAngleRight className="text-white" />
            <h5 className="font-lato text-sm font-bold leading-normal text-[#C9B5E5]">
              {currentPath}
            </h5>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default BreadCrumb;
