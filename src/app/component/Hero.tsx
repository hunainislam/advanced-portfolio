import Image from 'next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { FaNpm } from "react-icons/fa6";

export default function Hero() {
  return (
    <div>
        {/* <!-- Hero Section --> */}

      <section className="home active absolute w-full h-full p-40 px-[9%] pb-8 overflow-hidden bg-bgcolor animate-show-content animation-section flex items-center gap-20 invisible opacity-0 max-992:pt-[40rem] max-992:pb-8 max-992:px-[4%] max-768:flex-col-reverse max-768:justify-center max-768:gap-8">

        {/* Home Detail */}

        <div className="home-detail max-400:text-center">

            {/* Main Heading */}

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-[5rem] text-whitecolor">MALIK <span className="text-maincolor">HUNAIN</span></h1>

            {/* Sub Heading */}

            <h2 className="scroll-m-20 border-b pb-2 mt-4 text-5xl font-semibold tracking-tight first:mt-0 text-whitecolor">I'm a <span style={{ "--i": 4 } as React.CSSProperties} data-text="Coder" className="relative inline-block text-transparent">Coder</span>
                <span style={{ "--i": 3 } as React.CSSProperties} data-text="UI/UX Designer" className="relative inline-block text-transparent">UI/UX Designer</span>
                <span style={{ "--i": 2 } as React.CSSProperties} data-text="Bloger" className="relative inline-block text-transparent">Bloger</span><span style={{ "--i": 1 } as React.CSSProperties} data-text="Designer" className="relative inline-block text-transparent">Designer</span>
            </h2>

            {/* Paragraph */}

            <p className="scroll-m-20 text-3xl font-medium tracking-tight my-4 mb-10 text-whitecolor">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, aliquam beatae maiores quam sed ullam ipsa neque deserunt magni! Ipsam eveniet illo perferendis praesentium tempore vitae sequi nostrum tenetur corrupti.</p>

            {/* Download Button */}

            <div className="btn-sci flex items-center max-400:flex-col-reverse">
                <a href="#" className="btn inline-block px-12 py-6 bg-maincolor border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[2rem] text-bgcolor transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor scroll-m-20 text-2xl font-semibold tracking-tight">
                    Download CV
                </a>

                {/* Social Links */}

                <div className="sci ml-8 max-400:ml-0 max-400:mb-8">
                    <a href="#" className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"><i className="bx github"><FaGithub /></i></a>
                    <a href="#" className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"><i className="bx linkedin"><FaLinkedinIn /></i></a>
                    <a href="#" className="inline-flex p-[0.8rem] border-[0.2rem] border-maincolor rounded-full text-4xl text-maincolor mx-[0.8rem] my-0 transition-all 
                    duration-500  ring-2 ring-maincolor hover:ring-maincolor hover:bg-maincolor hover:text-bgcolor hover:shadow-[0_0_2rem] hover:shadow-maincolor"><i className="bx vercel"><IoLogoVercel /></i></a>
                </div>
            </div>
        </div>

        {/* Home Image */}

        <div className="home-img">
            <div className="img-box relative w-[32vw] h-[32vw] rounded-full p-[0.5rem] flex justify-center items-center overflow-hidden max-768:w-[35rem] max-768:h-[35rem] max-600:w-[30rem] max-600:h-[30rem]">
                <div className="img-item relative w-full h-full bg-bgcolor rounded-full border-[0.01rem] border-bgcolor flex justify-center z-[1] overflow-hidden">
                    <Image src="/images/home.png" alt="no-image" className="absolute top-[3rem] block w-[85%] object-cover mix-blend-lighten" width={1200} height={1200} />
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}
