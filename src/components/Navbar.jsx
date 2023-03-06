import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 z-20 top-0 bg-primary`}
    >
      <div className="flex w-full items-center justify-between max-w-7xl mx-auto">
        <Link
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain cursor-pointer"
          />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Osama &nbsp;
            <span className="sm:block hidden">| Ibrahim</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            >
              <NavLink to={`#${link.id}`}>{link.title}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex sm:hidden flex-1 justify-end items-center transition-all">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer "
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right mx-4 my-2 min-w-[140px] z-10 rounded-xl transition-all `}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4 ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="text-secondary font-poppins -white text-[16px] font-medium cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                >
                  <NavLink to={`#${link.id}`}>{link.title}</NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
