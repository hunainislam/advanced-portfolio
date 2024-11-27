"use client";

import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { TiArrowLeftThick } from "react-icons/ti";
import { TiArrowRightThick } from "react-icons/ti";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function Projects() {
  const [index, setIndex] = useState(0); // Track the current index
  const imgSlideRef = useRef<HTMLDivElement>(null); // Reference for the image slide
  const arrowRightRef = useRef<HTMLButtonElement>(null); // Reference for right arrow
  const arrowLeftRef = useRef<HTMLButtonElement>(null); // Reference for left arrow

  useEffect(() => {
    const imgSlide = imgSlideRef.current;
    const portfolioDetails =
      document.querySelectorAll<HTMLDivElement>(".portfolio-detail");

    if (imgSlide) {
      imgSlide.style.transform = `translateX(calc(${index * -100}% - ${
        index * 2
      }rem))`;
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

      <section className="portfolio absolute w-full h-full px-[9%] pt-40 pb-8 invisible opacity-0 overflow-hidden bg-bgcolor animate-show-content animation-section 2xl:pt-40 2xl:pb-8 2xl:px-[4%]">
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
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Welcome to the Resume Builder — a powerful tool designed to help
                you craft a professional and personalized resume effortlessly.
                Whether you're starting fresh or updating your existing resume,
                this builder provides an easy-to-use interface with dynamic
                features. Add your details, customize sections, and generate a
                resume that highlights your skills, experience, and
                achievements. Take the next step in your career journey with
                confidence!!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={
                    "https://milestone-based-interactive-resume-builder-nywd.vercel.app/"
                  }
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 2 */}

            <div className="portfolio-detail hidden">
              <p className="numb">02</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                First Portfolio
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Welcome to my very first portfolio! This is a showcase of my
                journey into [e.g., web development, design, or creative
                projects], where I’ve combined my skills, creativity, and
                dedication to create something meaningful. Each project reflects
                my learning, growth, and passion for [e.g., coding, design, or
                problem-solving]. As I continue to explore and expand my
                expertise, this portfolio serves as a starting point, and I’m
                excited to share it with you. Let’s take this journey together!
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS, ReactsHooks
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://my-first-portfolio-theta-eight.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 3 */}

            <div className="portfolio-detail hidden">
              <p className="numb">03</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                E-Commerce-App
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                My E-Commerce App is a dedicated platform for sanitary and
                electric store products, offering a seamless shopping experience
                for customers. From high-quality sanitary fittings to reliable
                electrical equipment, the app is designed to meet the diverse
                needs of homeowners, businesses, and contractors. With features
                like an intuitive user interface, secure payment options, and
                real-time order tracking, this app ensures convenience and
                reliability. Whether you're looking to upgrade your home or
                complete a professional project, our e-commerce solution brings
                everything you need right to your fingertips.
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS, ReactsHooks, Shadcn-UI, Daisy-UI
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://ecommerce-app-store-liart.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 4 */}

            <div className="portfolio-detail hidden">
              <p className="numb">04</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Inventory Management
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Our Inventory Management System is designed to streamline and
                optimize the tracking of products and stock levels in real-time.
                This system helps businesses efficiently manage inventory,
                automate order processing, and maintain accurate records. With
                features like product categorization, barcode scanning,
                automated stock alerts, and detailed reporting, it ensures that
                businesses can reduce errors, improve stock control, and make
                informed decisions. Whether you are managing a small store or a
                large warehouse, our system offers scalable solutions to improve
                operational efficiency and minimize stockouts or overstocking
                issues.
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  HTML5, CSS3, JavaScript
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://inventory-management-system-amber.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 5 */}

            <div className="portfolio-detail hidden">
              <p className="numb">05</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Second Portfolio
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Welcome to my second portfolio! This collection highlights the
                growth and refinement of my skills since my first portfolio. It
                showcases a more advanced level of work, reflecting my
                continuous learning and dedication to excellence. In this
                portfolio, you'll find [e.g., complex projects, innovative
                solutions, or collaborative work] that demonstrate my ability to
                take on diverse challenges and deliver high-quality results. As
                I continue to expand my expertise, I am excited to present these
                projects that mark important milestones in my journey.
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS, Shadcn-UI, Dasiy-UI
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://my-second-portfolio-six.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 6 */}

            <div className="portfolio-detail hidden">
              <p className="numb">06</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Third Portfolio
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Welcome to my third portfolio! This collection represents the
                pinnacle of my growth and expertise in [e.g., web development,
                graphic design, or project management]. It highlights the
                sophisticated projects and innovative solutions I’ve created,
                showcasing my ability to tackle complex challenges with
                creativity and precision. From [e.g., large-scale applications,
                collaborations with clients, or cutting-edge design work], each
                project is a testament to my commitment to quality and
                continuous improvement. I’m proud to share the work that has
                helped me evolve as a professional and look forward to the
                future of limitless possibilities
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://my-third-portfolio-six.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 7 */}

            <div className="portfolio-detail hidden">
              <p className="numb">07</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Parallax Effect
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Parallax effect is a popular web design technique where the
                background content moves at a different speed than the
                foreground content while scrolling. This creates an illusion of
                depth, making the website appear more dynamic and interactive.
                It enhances the user experience by adding visual interest and
                engagement to the page. For example, when you scroll down a
                webpage, the background might move slower than the text or
                images in the foreground, creating a sense of movement. The
                parallax effect is often used in modern websites, especially for
                storytelling, showcasing products, or adding an immersive touch
                to the design
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://parallax-effect-animation.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
              </div>
            </div>

            {/* Project Detail 8 */}

            <div className="portfolio-detail hidden">
              <p className="numb">08</p>
              <h3 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left my-[0.8rem] mb-8 text-whitecolor mt-8">
                Animal Photos Gallery
              </h3>
              <p className="text-[2rem] font-medium mt-16 text-whitecolor line-clamp-2">
                Welcome to the Animal Photos Gallery, a visual journey through
                the diverse and beautiful world of animals. This collection
                features stunning images of various species, capturing their
                natural beauty, behavior, and habitats. From majestic wild
                animals to charming domestic pets, each photograph tells a
                unique story, showcasing the diversity and wonder of the animal
                kingdom. Explore this gallery to discover the beauty of nature
                and gain a deeper appreciation for wildlife conservation.
              </p>
              <div className="tech my-8 text-whitecolor underline-offset-[2rem] underline pb-8">
                <p className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-3xl text-left text-maincolor mt-4 ">
                  Next.js, TailwindCSS
                </p>
              </div>
              <div className="live-github">
                <Link
                  target="_blank"
                  href={"https://animal-photos-gallery.vercel.app/"}
                  className="inline-flex p-[0.9rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx arrow-back rotate-[135deg] mr-2">
                    <IoArrowBack />
                  </i>
                  <span className="">Live Project</span>
                </Link>
                <Link
                  target="_blank"
                  href={"https://github.com/hunainislam?tab=repositories"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx github">
                    <FaGithub />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/in/hunain-islam-2057832b7/"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx linkedin">
                    <FaLinkedinIn />
                  </i>
                </Link>
                <Link
                  target="_blank"
                  href={"https://vercel.com/malik-hunains-projects"}
                  className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"
                >
                  <i className="bx vercel">
                    <IoLogoVercel />
                  </i>
                </Link>
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
