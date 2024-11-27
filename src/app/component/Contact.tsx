import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
        {/* Contact Section */}

          <section className="contact absolute w-full h-full p-40 mt-20 px-[9%] pb-8 overflow-hidden bg-bgcolor animate-show-content animation-section flex items-center gap-20 invisible opacity-0 max-992:pt-[40rem] max-992:pb-8 max-992:px-[4%] justify-center">

            {/* Contact Container */}

            <div className="contact-container grid grid-cols-[1fr_1.3fr] gap-12 max-768:grid-cols-1 max-450:grid-cols-1 max-400:mt-96 max-400:mb-12">

                {/* Contact Box */}

                <div className="contact-box mt-40">

                    {/* Main Heading*/}

                    <h2 className="self-center scroll-m-20 text-4xl font-extrabold tracking-tight text-[5rem] text-whitecolor text-left">Let's Work</h2>
                    <p className="desc text-3xl font-medium tracking-tight mt-12 mb-10 text-whitecolor">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

                    {/* Contact Detail 1*/}

                    <div className="contact-detail flex items-center my-8">
                        <i className='bx phone nline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6'><FaPhone /></i>
                        <div className="detail">
                            <p className="text-maincolor text-3xl">Phone Number</p>
                            <p className="text-whitecolor text-2xl">0318-2347330</p>
                        </div>
                    </div>

                    {/* Contact Detail 2*/}

                    <div className="contact-detail flex items-center my-8">
                        <i className='bx email inline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6'><MdEmail /></i>
                        <div className="detail">
                            <p className="text-maincolor text-3xl">Email</p>
                            <p className="text-whitecolor text-2xl">hunainislam09@gmail.com</p>
                        </div>
                    </div>

                    {/* Contact Detail 3*/}

                    <div className="contact-detail flex items-center my-8">
                        <i className='bx map inline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6'><FaMapMarkerAlt /></i>
                        <div className="detail">
                            <p className="text-maincolor text-3xl">Address</p>
                            <p className="text-whitecolor text-2xl">Al-Fatah Colony Orangi Town 10 Number</p>
                        </div>
                    </div>
                    
                </div>

                {/* Contact Box */}

                <div className="contact-box">

                    {/* Form Section */}

                    <form action="" className="action bg-secondbgcolor p-12 pt-12 rounded-[3rem] text-center max-400:pt-[2.5rem] max-400:pb-[3.5rem] max-400:px-12">

                        {/* Sub Heading */}

                        <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-[4rem] text-center mb-12 text-whitecolor max-400:text-[3.5rem]">Contact <span className="text-maincolor">Me!</span></h2>

                        {/* Field Box */}

                        <div className="field-box grid grid-cols-2 gap-8 max-810:grid-cols-1 max-768:grid-cols-2 max-600:grid-cols-1">
                            <input type="text" className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor" placeholder="Full Name" required />
                            <input type="email" className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor" placeholder="Email Address" required />
                            <input type="text" className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor" placeholder="Phone Number" required />
                            <input type="text" className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor" placeholder="Email Subject" required />
                            <textarea name="" id="" className="col-span-full h-[26rem] resize-none p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor" placeholder="Your Message" required></textarea>
                        </div>

                        {/* Buttons */}

                        <button type="submit" className="btn inline-block px-12 py-4 bg-maincolor border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[1.6rem] text-bgcolor font-medium transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor mt-8">Send Message</button>
                    </form>
                </div>
            </div>
          </section>
    </div>
  )
}