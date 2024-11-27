"use client"

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

      <section className="resume absolute w-full h-full px-[9%] pt-40 pb-8 invisible opacity-0 overflow-hidden bg-bgcolor animate-show-content animation-section max-992:pt-[40rem] max-992:pb-8 max-992:px-[4%]">

        {/* Resume Container */}

        <div className="resume-container grid grid-cols-[1fr_2fr] gap-20 mt-20 max-768:grid-cols-1 max-768:gap-12">

          {/* Left Section: Buttons */}

          <div className="resume-box">
            <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[5rem] text-whitecolor max-400:text-center">
              Why Hire Me?
            </h2>
            <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-20 max-400:text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, repudiandae atque.
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
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  repellendus ad dicta commodi sit in repellat beatae tempora ab
                  ut.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">

                  {/* Experience Items */}
                  
                  {/* Resume Item 1 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 2 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
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
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 4 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 5 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
                    </p>
                    <p className="text-[2rem] text-whitecolor my-3 mb-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestias, qui.
                    </p>
                  </div>

                  {/* Resume Item 6 */}

                  <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                    <p className="year text-maincolor text-3xl font-semibold">
                      2024 - Present
                    </p>
                    <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">
                      Frontend Developer
                    </h3>
                    <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">
                      ABC Corp.
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
                 <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-left text-whitecolor max-400:text-center">My <span className="text-maincolor">Education</span></h2>
                 <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus repellendus ad dicta commodi sit in repellat beatae tempora ab ut.</p>

                 {/* Resume List */}

                 <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">

                  {/* Education Items */}

                  {/* Resume Item 1 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
                     </div>

                     {/* Resume Item 2 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
                     </div>

                     {/* Resume Item 3 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
                     </div>

                     {/* Resume Item 4 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
                     </div>

                     {/* Resume Item 5 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
                     </div>

                     {/* Resume Item 6 */}

                     <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center">
                         <p className="year text-maincolor text-3xl font-semibold">2024</p>
                         <h3 className="text-[2.5rem] font-bold text-whitecolor mt-2">Programming Course</h3>
                         <p className="company relative ml-8 mb-8 text-3xl font-medium text-whitecolor">Onine Course</p>
                         <p className="text-[2rem] text-whitecolor my-3 mb-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, autem?</p>
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
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  repellendus ad dicta commodi sit in repellat beatae tempora ab
                  ut.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] h-auto overflow-visible gap-8">

                  {/* Skills Items */}

                  {/* Resume Item 1 */}

                            <div className="resume-item relative flex items-center bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center h-auto hover:text-maincolor group">
                                <i className='bx html5 text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor '><FaHtml5 /></i>
                                <span className="absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">HTML5</span>
                            </div>

                            {/* Resume Item 2 */}

                            <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                                <i className='bx css3 text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor'><IoLogoCss3 /></i>
                                <span className= "absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">CSS3</span>
                            </div>

                            {/* Resume Item 3 */}

                            <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                                <i className='bx javascript text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor'><IoLogoJavascript /></i>
                                <span className= "absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">JavaScript</span>
                            </div>

                            {/* Resume Item 4 */}

                            <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                                <i className='bx typescript text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor'><BiLogoTypescript /></i>
                                <span className= "absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">TypeScript</span>
                            </div>

                            {/* Resume Item 5 */}

                            <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                                <i className='bx next.js text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor'><SiNextdotjs /></i>
                                <span className= "absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">Next.js</span>
                            </div>

                            {/* Resume Item 6 */}

                            <div className="resume-item relative flex items-center h-auto bg-secondbgcolor rounded-xl p-12 pb-10 flex-col justify-center hover:text-maincolor group">
                                <i className='bx tailwind-css text-[10rem] transition-all duration-500 text-whitecolor hover:text-maincolor'><SiTailwindcss /></i>
                                <span className= "absolute top-[-20%] bg-whitecolor text-bgcolor text-[1.6rem] py-2 px-4 rounded-lg pointer-events-none opacity-0 transform scale-[0.9] transition-all duration-200 group-hover:top-[-25%] group-hover:opacity-100 group-hover:scale-100">Tailwind CSS</span>
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
                <p className="desc text-[2rem] text-whitecolor my-8 mb-10 mt-12 max-400:text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  repellendus ad dicta commodi sit in repellat beatae tempora ab
                  ut.
                </p>

                {/* Resume List */}

                <div className="resume-list grid grid-cols-[repeat(auto-fit,minmax(30rem,1fr))] gap-8 h-[45rem] overflow-auto">

                  {/* About Items */}

                  {/* Resume Item 1 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Gender :<span className="text-whitecolor ml-4 text-3xl">Male</span></p>
                            </div>

                            {/* Resume Item 2 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Age :<span className="text-whitecolor ml-4 text-3xl">19years Old</span></p>
                            </div>

                            {/* Resume Item 3 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Status :<span className="text-whitecolor ml-4 text-3xl">I Am Not Married</span></p>
                            </div>

                            {/* Resume Item 4 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">City :<span className="text-whitecolor ml-4 text-3xl">Karachi</span></p>
                            </div>

                            {/* Resume Item 5 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Nationality :<span className="text-whitecolor ml-4 text-3xl">Pakistan</span></p>
                            </div>

                            {/* Resume Item 6 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Experience :<span className="text-whitecolor ml-4 text-3xl">1+ Years</span></p>
                            </div>

                            {/* Resume Item 7 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Full Time :<span className="text-whitecolor ml-4 text-3xl">Available</span></p>
                            </div>

                            {/* Resume Item 8 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Freelance :<span className="text-whitecolor ml-4 text-3xl">Available</span></p>
                            </div>

                            {/* Resume Item 9 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Phone Number :<span className="text-whitecolor ml-4 text-3xl">0318-2347330</span></p>
                            </div>

                            {/* Resume Item 10 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Email :<span className="text-whitecolor ml-4 text-3xl">hunainisalm09@gmail.com</span></p>
                            </div>

                            {/* Resume Item 11 */}

                            <div className="resume-item bg-secondbgcolor rounded-xl p-12 pb-10 h-[calc(45rem-2rem)/2] flex flex-col justify-center max-400:text-center">
                                <p className="text-maincolor text-3xl">Languages :<span className="text-whitecolor ml-4 text-3xl">Urdu, English</span></p>
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

