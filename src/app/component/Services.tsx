import React from "react";
import { FaCode } from "react-icons/fa6";
import { FaPaintbrush } from "react-icons/fa6";
import { FaPalette } from "react-icons/fa";
import { BiArrowBack } from "react-icons/bi";
import { FaChartSimple } from "react-icons/fa6";

export default function Services() {
  return (
    <div>
      {/*  Services Section */}

      <section className="absolute w-full h-full p-40 px-[9%] pb-8 invisible opacity-0 overflow-hidden bg-bgcolor animate-show-content animation-section max-992:pt-[40rem] max-992:pb-8 max-992:px-[4%]">

        {/* Main Heading */}

        <div>
          <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[5rem] text-center mb-8 mt-8 text-whitecolor">
            My <span className="text-maincolor">Services</span>
          </h2>
        </div>

        {/* Services Container */}

        <div className="services-container grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20">

          {/* Services Box 1*/}

          <div className="services-box group p-12 bg-secondbgcolor ring-bgcolor rounded-lg transition duration-500 ring-2 hover:ring-maincolor hover:scale-[1.02] hover:text-maincolor hover:shadow-[0_0_2rem] hover:shadow-maincolor">

            {/* Icons */}

            <div className="icon flex justify-between items-center sm:justify-between md:items-center">
              <i className="bx bx-code-alt text-[5rem] transition duration-500 text-whitecolor group-hover:text-maincolor">
                <FaCode />
              </i>
              <a
                href="#"
                className="inline-flex bg-whitecolor rounded-full p-4 transition duration-500 group-hover:bg-maincolor"
              >
                <i className="bx bx-arrow-back text-[4rem] text-bgcolor transform rotate-[225deg] transition duration-500 hover:rotate-[180deg] ">
                  <BiArrowBack />
                </i>
              </a>
            </div>
            <h3 className="text-[3.5rem] font-bold my-2 mb-8 transition duration-500 group-hover:text-maincolor text-whitecolor">
              Web Development
            </h3>
            <p className="text-[2rem] font-medium text-whitecolor line-clamp-3">
              I’m a web developer, crafting interactive websites using HTML,
              CSS, JavaScript, Next.js and various frameworks to create
              seamless, user-friendly experiences.
            </p>
          </div>

          {/* Services Box 2*/}

          <div className="services-box group p-12 bg-secondbgcolor ring-bgcolor rounded-lg transition duration-500 ring-2 hover:ring-maincolor hover:scale-[1.02] hover:text-maincolor hover:shadow-[0_0_2rem] hover:shadow-maincolor">

            {/* Icons */}

            <div className="icon flex justify-between items-center sm:justify-between md:items-center">
              <i className="bx bx-code-alt text-[5rem] transition duration-500 text-whitecolor group-hover:text-maincolor">
                <FaChartSimple />
              </i>
              <a
                href="#"
                className="inline-flex bg-whitecolor rounded-full p-4 transition duration-500 group-hover:bg-maincolor"
              >
                <i className="bx bx-arrow-back text-[4rem] text-bgcolor transform rotate-[225deg] transition duration-500 hover:rotate-[180deg] ">
                  <BiArrowBack />
                </i>
              </a>
            </div>
            <h3 className="text-[3.5rem] font-bold my-2 mb-8 transition duration-500 group-hover:text-maincolor text-whitecolor">
              Graphic Designer
            </h3>
            <p className="text-[2rem] font-medium text-whitecolor line-clamp-3">
              I’m a digital marketer, helping brands grow online through
              targeted strategies, SEO, social media, and analytics to reach and
              engage audiences effectively
            </p>
          </div>

          {/* Services Box 3*/}

          <div className="services-box group p-12 bg-secondbgcolor ring-bgcolor rounded-lg transition duration-500 ring-2 hover:ring-maincolor hover:scale-[1.02] hover:text-maincolor hover:shadow-[0_0_2rem] hover:shadow-maincolor">
            
            {/* Icons */}

            <div className="icon flex justify-between items-center sm:justify-between md:items-center">
              <i className="bx bx-code-alt text-[5rem] transition duration-500 text-whitecolor group-hover:text-maincolor">
                <FaPaintbrush />
              </i>
              <a
                href="#"
                className="inline-flex bg-whitecolor rounded-full p-4 transition duration-500 group-hover:bg-maincolor"
              >
                <i className="bx bx-arrow-back text-[4rem] text-bgcolor transform rotate-[225deg] transition duration-500 hover:rotate-[180deg] ">
                  <BiArrowBack />
                </i>
              </a>
            </div>
            <h3 className="text-[3.5rem] font-bold my-2 mb-8 transition duration-500 group-hover:text-maincolor text-whitecolor">
              UI/UX Designer
            </h3>
            <p className="text-[2rem] font-medium text-whitecolor line-clamp-3">
              I’m a UI/UX Designer, helping brands grow online through targeted
              strategies, SEO, social media, and analytics to reach and engage
              audiences effectively
            </p>
          </div>

          {/* Services Box 4*/}

          <div className="services-box group p-12 bg-secondbgcolor ring-bgcolor rounded-lg transition duration-500 ring-2 hover:ring-maincolor hover:scale-[1.02] hover:text-maincolor hover:shadow-[0_0_2rem] hover:shadow-maincolor">
            
            {/* Icons */}

            <div className="icon flex justify-between items-center sm:justify-between md:items-center">
              <i className="bx bx-code-alt text-[5rem] transition duration-500 text-whitecolor group-hover:text-maincolor">
                <FaPalette />
              </i>
              <a
                href="#"
                className="inline-flex bg-whitecolor rounded-full p-4 transition duration-500 group-hover:bg-maincolor"
              >
                <i className="bx bx-arrow-back text-[4rem] text-bgcolor transform rotate-[225deg] transition duration-500 hover:rotate-[180deg] ">
                  <BiArrowBack />
                </i>
              </a>
            </div>
            <h3 className="text-[3.5rem] font-bold my-2 mb-8 transition duration-500 group-hover:text-maincolor text-whitecolor">
              Graphic Designer
            </h3>
            <p className="text-[2rem] font-medium text-whitecolor line-clamp-3">
              I’m a graphic designer, creating visual concepts with creativity,
              color, typography, and design software to communicate ideas and
              captivate audiences
            </p>
          </div>
          
        </div>
      </section>
    </div>
  );
}
