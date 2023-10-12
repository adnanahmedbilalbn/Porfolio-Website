import React from "react";
import { FiGithub } from "react-icons/fi";
// import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-scroll";
import profilePhoto from "../assets/profile.jpeg";

// import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl xl:m-auto h-full">
      <div className="flex justify-center sm:flex-row flex-col w-full">
        <div className="max-[450px]:pl-3 flex sm:flex-col max-[450px]:flex-col max-[500px]:items-start flex-row justify-evenly sm:justify-center sm:items-start items-center w-full sm:w-1/4 mb-9">
          <a href="/" className="nav-first-wrapper pl-3 flex items-center">
            <img
              src={profilePhoto}
              alt="profile-img"
              className="w-10"
              style={{ minWidth: "70px" }}
            />

            <h4 className="text-lg pl-2 text-white uppercase tracking-wider font-medium font-primary">
              Adnan
            </h4>
          </a>

          <div className="flex justify-evenly sm:w-full w-3/12 max-[500px]:w-2/5 mt-7 text-gray-400">
            <a
              href="https://github.com/adnanahmedbilalbn"
              target="_blank"
              className="md:mr-5 mr-3 inner-shadow-effect max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center"
            >
              <FiGithub />
            </a>
            {/* <a
              href="</div>"
              target="_blank"
              className="max-[450px]:w-12 max-[450px]:h-12 max-[450px]:text-xl lg:w-14 lg:h-14 md:w-12 md:h-12 max-[500px]:text-lg h-10 w-10 text-xl rounded-md btn-shadow md:text-2xl flex justify-center items-center"
            >
              <FiLinkedin />
            </a> */}
          </div>
        </div>
        <div className="flex justify-evenly max-[450px]:flex-col  max-[500px]:pl-4 sm:w-9/12 w-full">
          <div className="max-[500px]:mb-10">
            <h3 className="red-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col text-gray-400 max-[450px]:text-lg lg:text-lg sm:text-md text-sm font-semibold">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer hover:text-red-600 font-normal hover:underline transition-all duration-500"
              >
                Home
              </Link>

              <Link
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
              >
                Features
              </Link>

              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
              >
                Portfolio
              </Link>

              <Link
                activeClass="active"
                to="pricing"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
              >
                Pricing
              </Link>

              <Link
                activeClass="active"
                to="blog"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="max-[500px]:mb-10">
            <h3 className="red-text lg:text-lg max-[450px]:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              RESOURCES
            </h3>
            <div className="flex flex-col max-[450px]:text-lg text-gray-400 lg:text-lg sm:text-md text-sm font-semibold">
              <a
                className=" hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Authentication
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                System Status
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Pricingt
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Over Right
              </a>
            </div>
          </div>
          <div className="">
            <h3 className="red-text max-[450px]:text-lg lg:text-lg sm:text-md text-sm font-secondary tracking-wider mb-4">
              QUICK LINKS
            </h3>
            <div className="flex flex-col max-[450px]:text-lg text-gray-400 lg:text-lg sm:text-md text-sm font-semibold">
              <a
                className=" hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                About
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Portfolio
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Services
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Blog
              </a>
              <a
                className="mt-3 hover:text-red-600 font-normal hover:underline transition-all duration-500"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
