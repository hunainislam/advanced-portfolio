"use client";

import React, { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { TbX } from "react-icons/tb";

export default function HomePage() {
  const [isMenuActive, setIsMenuActive] = useState(false); // State for menu toggle
  const [isPageActive, setIsPageActive] = useState(true); // State for page animations

  const handleMenuToggle = () => {
    setIsMenuActive((prev) => !prev);
  };

  const activatePage = () => {
    setIsPageActive(false);
    setTimeout(() => {
      setIsPageActive(true);
    }, 1100);
    setIsMenuActive(false);
  };

  useEffect(() => {
    activatePage();
  }, []);

  return (
    <div>
      {/* Header */}
      <header
        className={`w-full fixed top-0 left-0 py-10 px-[9%] bg-bgcolor flex justify-between items-center z-[100] max-992:py-8 max-992:px-[4%] ${
          isPageActive ? "active" : ""
        }`}
      >
        <a
          href="/"
          className="logo scroll-m-20 text-5xl font-bold tracking-tight text-whitecolor"
        >
          PORTFOLIO.
        </a>

        {/* Menu Icon */}
        <div
          className="text-5xl hidden text-whitecolor max-768:block cursor-pointer"
          id="menu-icon"
          onClick={handleMenuToggle}
        >
          {isMenuActive ? <TbX /> : <IoMenu />}
        </div>

        {/* Navigation */}
        <nav
          className={`max-768:absolute max-768:top-full max-768:left-0 max-768:w-full max-768:p-4 max-768:bg-bgcolor max-768:border-t max-768:border-[rgba(0,0,0,0.2)] max-768:shadow-[0_0.5rem_1rem_rgba(0,0,0,0.2)] max-768:text-center ${
            isMenuActive ? "block" : "block max-768:hidden"
          }`}
        >
          <a
            href="/"
            className="active max-768:block scroll-m-20 text-4xl font-medium tracking-tight text-whitecolor ml-14 transition duration-500 hover:text-maincolor"
          >
            Home
          </a>
          <a
            href="/services"
            className="max-768:block max-768:my-16 scroll-m-20 text-4xl font-medium tracking-tight text-whitecolor ml-14 transition duration-500 hover:text-maincolor"
          >
            Services
          </a>
          <a
            href="/resume"
            className="max-768:block max-768:my-16 scroll-m-20 text-4xl font-medium tracking-tight text-whitecolor ml-14 transition duration-500 hover:text-maincolor"
          >
            Resume
          </a>
          <a
            href="/project"
            className="max-768:block max-768:my-16 scroll-m-20 text-4xl font-medium tracking-tight text-whitecolor ml-14 transition duration-500 hover:text-maincolor"
          >
            Projects
          </a>
          <a
            href="/contact"
            className="max-768:block max-768:my-16 scroll-m-20 text-4xl font-medium tracking-tight text-whitecolor ml-14 transition duration-500 hover:text-maincolor"
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Front Page Background */}

      <div className="bars-box active absolute w-full h-full flex animate-show-bars animation-delay">
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 6 } as React.CSSProperties}
        ></div>
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 5 } as React.CSSProperties}
        ></div>
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 4 } as React.CSSProperties}
        ></div>
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 3 } as React.CSSProperties}
        ></div>
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 2 } as React.CSSProperties}
        ></div>
        <div
          className="bar w-full h-full bg-bgcolor animate-hide-bars animation-delay"
          style={{ "--i": 1 } as React.CSSProperties}
        ></div>
      </div>
    </div>
  );
}
