"use client";

import React, { useState } from "react";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function Resume() {
  // State to manage the active section index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of button labels
  const resumeSections = ["Experience", "Education", "Skills", "About Me"];

  return (
    <div>
      {/* Resume Section */}

      <section className="resume absolute w-full h-full px-[9%] pt-40 pb-8 invisible opacity-0 overflow-hidden bg-bgcolor animate-show-content animation-section 2xl:pt-40 2xl:pb-8 2xl:px-[4%]">
        {/* Resume Container */}

        <div className="resume-container grid grid-cols-[1fr_2fr] gap-20 mt-20 max-768:grid-cols-1 max-768:gap-12">
          {/* Left Section: Buttons */}

          <div className="resume-box">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-whitecolor max-400:text-center">
              Why Hire Me?
            </h2>
            <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-20 max-400:text-center line-clamp-4">
              I bring a unique blend of skills, dedication, and a passion for
              delivering exceptional results. With a proven track record in
              [mention your expertise or field, e.g., web development,
              designing, or project management], I ensure that every project I
              undertake is executed with precision and creativity.
            </p>
            {resumeSections.map((section, idx) => (
              <button
                key={idx}
                className={`resume-btn w-full h-[5.3rem] bg-secondbgcolor border-[0.2rem] text-3xl font-semibold mb-8 rounded-lg cursor-pointer ${
                  activeIndex === idx
                    ? "active ring-2 ring-maincolor text-maincolor shadow-[0_0_2em]"
                    : "border-secondbgcolor text-whitecolor"
                }`}
                onClick={() => setActiveIndex(idx)}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Right Section: Content */}

          <div className="resume-box">
            {activeIndex === 0 && (
              // Resume Detail

              <div className="resume-detail experience active block">
                <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left text-whitecolor max-400:text-center ">
                  My <span className="text-maincolor">Experience</span>
                </h2>
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center line-clamp-2">
                  With [2024 Present] of hands-on experience in [Frontend
                  Develpor], I have successfully delivered projects that combine
                  creativity, functionality, and precision. I have worked
                  extensively on [mention specific areas, e.g., front-end
                  development, graphic design, or project coordination],
                  utilizing tools and technologies like [list key tools,
                  frameworks, or software you specialize in]. My experience
                  includes collaborating with diverse teams, meeting tight
                  deadlines, and exceeding client expectations. Each project has
                  honed my skills and fueled my passion for [your
                  industry/field], enabling me to take on challenges confidently
                  and deliver impactful solutions.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">
                  {/* Experience Items */}

                  {/* Resume Item 1 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      July 2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      Develop There Official Website
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 2 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      July 2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      As a WebDevelpor
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      Maked E-Commerce Website For Client
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 3 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      As a Contributed Team Task
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      Have Contributed On The Team Task
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeIndex === 1 && (
              // Resume Detail

              <div className="resume-detail education">
                <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left text-whitecolor max-400:text-center">
                  My <span className="text-maincolor">Education</span>
                </h2>
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center line-clamp-2">
                  I have a strong academic foundation in [IT Cource Governor
                  House]. My education has equipped me with comprehensive
                  knowledge and practical skills in [e.g., programming, data
                  analysis, or marketing], which I apply to real-world projects.
                  Alongside my coursework, I actively participated in [e.g.,
                  workshops, hackathons, or research], further enriching my
                  learning experience. This robust academic background serves as
                  the bedrock for my professional growth and adaptability.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">
                  {/* Education Items */}

                  {/* Resume Item 1 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      October 2024
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Programming Course
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      Web Develpor
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2 line-clamp-3">
                      I am a web developer skilled in creating and maintaining
                      websites that deliver an engaging user experience. My
                      expertise lies in both front-end and back-end development,
                      allowing me to build dynamic and responsive web
                      applications. I am proficient in programming languages
                      such as HTML, CSS, and JavaScript for front-end
                      development, as well as server-side technologies like
                      Node.js, Python for back-end development.
                    </p>
                  </div>

                  {/* Resume Item 2 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      October 2024
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      It Initiative Governor House Karachi
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      UI/UX Designer
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2 line-clamp-3">
                      I am a UI/UX designer who is an expert in enhancing the
                      user experience and visual appeal of any digital product.
                      My work is not limited to design; I also play an essential
                      role in connecting users with the product and making their
                      interactions smooth. I conduct research and testing to
                      understand the needs and preferences of users, and then I
                      incorporate those insights into my designs.
                    </p>
                  </div>

                  {/* Resume Item 3 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Programming Course
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      Onine Course
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nesciunt, autem?
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeIndex === 2 && (
              // Resume Detail

              <div className="resume-detail skills">
                <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left text-whitecolor max-400:text-center">
                  My <span className="text-maincolor">Skills</span>
                </h2>
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center line-clamp-2">
                  I possess a versatile skill set that spans across [e.g., web
                  development, graphic design, or project management]. My
                  technical proficiencies include [e.g., HTML, CSS, JavaScript,
                  Next.js, TypeScript,TailwindCSS etc.], which enable me to
                  create innovative and efficient solutions. In addition, I
                  excel in [e.g., problem-solving, communication, teamwork],
                  ensuring seamless collaboration and project success. My
                  ability to adapt to new tools and technologies allows me to
                  stay ahead in an ever-evolving industry, making me a valuable
                  asset to any team or project.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] h-auto overflow-visible gap-8">
                  {/* Skills Items */}

                  {/* Resume Item 1 */}

                  <div className="resume-item relative flex items-center bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center h-auto hover:text-maincolor group">
                    <i className="bx html5 text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor ">
                      <FaHtml5 />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      HTML5
                    </span>
                  </div>

                  {/* Resume Item 2 */}

                  <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                    <i className="bx css3 text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor">
                      <IoLogoCss3 />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      CSS3
                    </span>
                  </div>

                  {/* Resume Item 3 */}

                  <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                    <i className="bx javascript text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor">
                      <IoLogoJavascript />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      JavaScript
                    </span>
                  </div>

                  {/* Resume Item 4 */}

                  <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                    <i className="bx typescript text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor">
                      <BiLogoTypescript />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      TypeScript
                    </span>
                  </div>

                  {/* Resume Item 5 */}

                  <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                    <i className="bx next.js text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor">
                      <SiNextdotjs />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      Next.js
                    </span>
                  </div>

                  {/* Resume Item 6 */}

                  <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                    <i className="bx tailwind-css text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor">
                      <SiTailwindcss />
                    </i>
                    <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeIndex === 3 && (
              // Resume Details

              <div className="resume-detail about-me">
                <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left text-whitecolor max-400:text-center">
                  About <span className="text-maincolor">Me</span>
                </h2>
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center line-clamp-2">
                  I am a passionate and driven professional with a keen interest
                  in [e.g., web development, design, or business]. With a focus
                  on innovation and creativity, I strive to deliver impactful
                  solutions that resonate with both functionality and
                  aesthetics. Beyond my professional journey, I am someone who
                  enjoys [e.g., learning new technologies, exploring creative
                  ideas, or problem-solving]. My ability to adapt, collaborate,
                  and stay committed to continuous learning defines who I am,
                  both as a professional and as an individual. I believe in
                  turning challenges into opportunities and contributing
                  meaningfully to every project I undertake.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">
                  {/* About Items */}

                  {/* Resume Item 1 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Gender :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Male
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 2 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Age :
                      <span className="text-whitecolor ml-4 text-3xl">
                        19years Old
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 3 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Status :
                      <span className="text-whitecolor ml-4 text-3xl">
                        I Am Not Married
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 4 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      City :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Karachi
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 5 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Nationality :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Pakistan
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 6 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Experience :
                      <span className="text-whitecolor ml-4 text-3xl">
                        1+ Years
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 7 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Full Time :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Available
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 8 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Freelance :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Available
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 9 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Phone Number :
                      <span className="text-whitecolor ml-4 text-3xl">
                        0318-2347330
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 10 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Email :
                      <span className="text-whitecolor ml-4 text-3xl">
                        hunainisalm09@gmail.com
                      </span>
                    </p>
                  </div>

                  {/* Resume Item 11 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                    <p className="text-maincolor text-3xl">
                      Languages :
                      <span className="text-whitecolor ml-4 text-3xl">
                        Urdu, English
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
