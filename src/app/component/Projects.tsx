"use client";

import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaNpm } from "react-icons/fa6";
import { IoArrowBack } from "react-icons/io5";
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";

export default function Projects() {
  const [index, setIndex] = useState(0); // Track the current index
  const imgSlideRef = useRef<HTMLDivElement>(null); // Reference for the image slide
  const arrowRightRef = useRef<HTMLButtonElement>(null); // Reference for right arrow
  const arrowLeftRef = useRef<HTMLButtonElement>(null); // Reference for left arrow

  useEffect(() => {
    const imgSlide = imgSlideRef.current;
    const portfolioDetails = document.querySelectorAll<HTMLDivElement>(".portfolio-detail");
  
    if (imgSlide) {
      imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    }

// Loop through each portfolio detail and hide/show based on active index

portfolioDetails.forEach((detail, i) => {
  if (i === index) {
    detail.classList.remove("hidden");
    detail.classList.add("active");
  } else {
    detail.classList.remove("active");
    detail.classList.add("hidden");
  }
});
}, [index]); // Re-run when the index changes
  


  const handleArrowRight = () => {
    if (index < 7) {
      setIndex(index + 1);
      arrowLeftRef.current?.classList.remove("disabled");
    } else {
      setIndex(7);
      arrowRightRef.current?.classList.add("disabled");
    }
  };

  const handleArrowLeft = () => {
    if (index > 1) {
      setIndex(index - 1);
      arrowLeftRef.current?.classList.remove("disabled");
    } else {
      setIndex(0);
      arrowLeftRef.current?.classList.add("disabled");
    }
  };

  return (
    <div>
      {/* Projects Section */}

      <section className="portfolio absolute w-full h-full px-[9%] pt-40 pb-8 invisible opacity-0 overflow-hidden bg-bgcolor animate-show-content animation-section max-992:pt-[40rem] max-992:pb-8 max-992:px-[4%]">

        {/* Main Heading */}

        <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[5rem] text-center mb-8 mt-8 text-whitecolor">
          Latest <span className="text-maincolor">Projects</span>
        </h2>

        {/* Project Container */}

        <div className="portfolio-container grid grid-cols-2 gap-12 mt-[8rem] max-768:grid-cols-1">

          {/* Project Box 1 */}

          <div className="portfolio-box max-768:first:order-1">

            {/* Project Detail 1 */}

            <div className="portfolio-detail active">
              <p className="numb">01</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 2 */}

            <div className="portfolio-detail hidden">
              <p className="numb">02</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 3 */}

            <div className="portfolio-detail hidden">
              <p className="numb">03</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 4 */}

            <div className="portfolio-detail hidden">
              <p className="numb">04</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 5 */}

            <div className="portfolio-detail hidden">
              <p className="numb">05</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 6 */}

            <div className="portfolio-detail hidden">
              <p className="numb">06</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 7 */}

            <div className="portfolio-detail hidden">
              <p className="numb">07</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>

            {/* Project Detail 8 */}

            <div className="portfolio-detail hidden">
              <p className="numb">08</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Resume Builder
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, ullam!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <a
                  href="#"
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </a>
                <a
                  href="#"
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </a>
              </div>
            </div>
          </div>

          {/* Project Box 2 */}

          <div className="portfolio-box">

            {/* Project Carousel */}

            <div className="portfolio-carousel w-full h-[40rem] rounded-[1rem] overflow-hidden">

              {/* Image Slider */}

              <div
                className="img-slide grid grid-flow-col auto-cols-[100%] gap-[2rem] h-inherit transition-all duration-500"
                ref={imgSlideRef}
              >

                {/* Image Item 1 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project1.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 2 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project2.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 3 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project3.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 4 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project4.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 5 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project5.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 6 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project6.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 7 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project7.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>

                {/* Image Item 8 */}

                <div className="img-item h-inherit">
                  <Image
                    src="/images/project8.png"
                    className="block w-full h-full object-cover rounded-lg object-center"
                    alt="no-image"
                    width={1200}
                    height={1200}
                  />
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}

            <div className="navigation text-right mt-8">
              <button
                className="arrow-left disabled inline-flex p-[0.4rem] bg-secondbgcolor border-[0.2rem] rounded-[0.6rem] text-[5rem] text-maincolor cursor-pointer border-secondbgcolor text-disabledcolor"
                ref={arrowLeftRef}
                onClick={handleArrowLeft}
              >
                <i className="bx bx-chevron-left">
                  <TiArrowLeftThick />
                </i>
              </button>
              <button
                className="arrow-right inline-flex p-[0.4rem] bg-secondbgcolor border-[0.2rem] border-maincolor rounded-[0.6rem] text-[5rem] text-maincolor cursor-pointer ml-6"
                ref={arrowRightRef}
                onClick={handleArrowRight}
              >
                <i className="bx bx-chevron-right">
                  <TiArrowRightThick />
                </i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
