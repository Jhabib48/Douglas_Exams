import {Route, Routes, useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Hero = () => {

  return (
    <div className="items-center w-10/12 grid-cols-2 mx-auto overflow-x-hidden lg:grid md:py-14 lg:py-24 xl:py-14 lg:mt-3 xl:mt-5 mt-20" data-aos="fade-right" data-aos-duration="800">
      <div className="pr-2 md:mb-14 py-14 md:py-0">
        <h1 className="text-3xl font-semibold text-blue-900 xl:text-5xl lg:text-3xl">
          <span className="block w-full">Find and Add Your Exams</span> 
          with Ease at Douglas Exams!
        </h1>
        <p className="py-4 text-lg text-gray-500 2xl:py-8 md:py-6 2xl:pr-5">
          Simplify your exam search and organization with Douglas Exams, your go-to platform for all exam-related information at Douglas College.
        </p>
        <div className="mt-4">
          <Link to='/createAccount'>
            <a href="#explore" className="px-5 py-3 text-lg tracking-wider text-white bg-blue-500 rounded-lg md:px-8 hover:bg-blue-600 group">
              <span>Get Started</span>
            </a>
          </Link>
        </div>
      </div>
      <div className="pb-10 overflow-hidden md:p-10 lg:p-0 sm:pb-0">
        <img id="heroImg1" className="transition-all duration-300 ease-in-out lg:w-full sm:mx-auto sm:w-4/6 sm:pb-12 lg:pb-0" src="https://bootstrapmade.com/demo/templates/FlexStart/assets/img/hero-img.png" alt="Douglas Exams Hero Image" width="500" height="488"/>
      </div>
    </div>
  );
}

export default Hero;
