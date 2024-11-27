import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      {/* Contact Section */}

      <section className="contact absolute w-full h-full p-40 px-[9%] pb-8 overflow-hidden bg-bgcolor animate-show-content animation-section flex items-center gap-20 invisible opacity-0 justify-center 2xl:pt-[60rem] 2xl:px-[4%] 2xl:pb-8">
        {/* Contact Container */}

        <div className="contact-container grid grid-cols-[1fr_1.3fr] gap-12 max-768:grid-cols-1 max-450:grid-cols-1">
          {/* Contact Box */}

          <div className="contact-box">
            {/* Main Heading*/}

            <h2 className="self-center font-extrabold tracking-tight text-[3.5rem] text-whitecolor text-left">
              Let's Work Together
            </h2>
            <p className="desc text-3xl font-medium mt-12 mb-10 my-6 text-whitecolor line-clamp-6">
              Let's work together to turn your ideas into reality! Whether
              you're looking to build a website, create a brand, or develop a
              unique solution, I am excited to collaborate with you and bring
              your vision to life. With a combination of creativity, technical
              expertise, and dedication, I am committed to delivering results
              that exceed expectations. Let’s join forces to create something
              amazing and achieve success together. Reach out today, and let's
              start building the future!
            </p>

            {/* Contact Detail 1*/}

            <div className="contact-detail flex items-center my-8">
              <i className="bx phone inline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6">
                <FaPhone />
              </i>
              <div className="detail">
                <p className="text-maincolor text-3xl">Phone Number</p>
                <p className="text-whitecolor text-2xl">0318-2347330</p>
              </div>
            </div>

            {/* Contact Detail 2*/}

            <div className="contact-detail flex items-center my-8">
              <i className="bx email inline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6">
                <MdEmail />
              </i>
              <div className="detail">
                <p className="text-maincolor text-3xl">Email</p>
                <p className="text-whitecolor text-2xl">
                  hunainislam09@gmail.com
                </p>
              </div>
            </div>

            {/* Contact Detail 3*/}

            <div className="contact-detail flex items-center my-8">
              <i className="bx map inline-flex bg-secondbgcolor text-maincolor text-5xl p-[1.5rem] rounded-[0.6rem] mr-6">
                <FaMapMarkerAlt />
              </i>
              <div className="detail">
                <p className="text-maincolor text-3xl">Address</p>
                <p className="text-whitecolor text-2xl">
                  Al-Fatah Colony Orangi Town 10 Number
                </p>
              </div>
            </div>
          </div>

          {/* Contact Box */}

          <div className="contact-box">
            {/* Form Section */}

            <form
              className="action bg-secondbgcolor p-10 px-14 rounded-[1rem] text-center max-400:pt-10 max-400:px-12 max-400:pb-14"
              target="_blank"
              action="https://formspree.io/f/xkgwdyrq"
              method="POST"
            >
              {/* Sub Heading */}

              <h2 className="heading scroll-m-20 text-4xl font-extrabold tracking-tight text-[4rem] text-center mb-12 text-whitecolor max-400:text-[3.5rem]">
                Contact <span className="text-maincolor">Me!</span>
              </h2>

              {/* Field Box */}

              <div className="field-box grid grid-cols-2 gap-8 max-810:grid-cols-1 max-768:grid-cols-2 max-600:grid-cols-1">
                <input
                  type="text"
                  className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor"
                  placeholder="Full Name"
                  name="full name"
                  required
                />
                <input
                  type="email"
                  className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor"
                  placeholder="Email Address"
                  name="email"
                  required
                />
                <input
                  type="text"
                  className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor"
                  placeholder="Phone Number"
                  name="phone number"
                  required
                />
                <input
                  type="text"
                  className="p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor"
                  placeholder="Email Subject"
                  name="email subject"
                  required
                />
                <textarea
                  id="message"
                  className="col-span-full h-[26rem] resize-none p-6 bg-bgcolor border-[1.5px] border-bgcolor rounded-lg text-[1.6rem] text-maincolor focus:border-maincolor"
                  placeholder="Your Message"
                  name={"your message"}
                  required
                ></textarea>
              </div>

              {/* Buttons */}

              <button
                type="submit"
                className="btn inline-block px-12 py-4 bg-maincolor border-[0.2rem] border-maincolor rounded-full shadow-[0_0_2em] text-[1.6rem] text-bgcolor font-medium transition-all duration-500 hover:bg-transparent hover:text-maincolor hover:ring-2 hover:ring-maincolor mt-8"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
