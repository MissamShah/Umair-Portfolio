import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`${
    styles.paddingX
  } w-full flex items-center py-5 fixed top-0 z-20 ${
    scrolled ? "bg-[#212428]  shadow-card" : "bg-transparent"
  }`}
>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain rounded-full' />
          <p className='text-[#fff] text-[20px] font-bold cursor-pointer flex '>
            {/* Moosa Raza &nbsp; */}
            <span className='block'> Digital Marketing Expert </span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-[#fff]"
              } hover:text-white text-[20px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
           <button>
              <a href={"https://calendly.com/umairhassan/30min"} className="text-white shadow-card bg-[#1b8497] w-[260px] text-[16px] rounded-md px-6 py-2">
                Book a meeting
              </a>
            </button>
        </ul>
  
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-[#30475E] absolute top-20 right-[-16px] mx-4 my-2 w-full min-w-[140px] h-[70vh] justify-between items-start z-10`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col '>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] py-[30px] border-x-0 px-[20px] border border-[#fff] w-full ${
                    active === nav.title ? "text-white" : "text-[#fff]"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li>
              <button className="bg-[#fff] text-[#30475E] fixed top-[60%] right-2  w-[100vw] py-[30px] text-left px-[20px] font-semibold">
              <a href={"https://calendly.com/umairhassan/30min"}>
                Book a meeting
              </a>
            </button>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
