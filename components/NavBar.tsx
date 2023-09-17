"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import React, { useState } from "react";
import logo from "../public/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiSplitCross } from "react-icons/gi";
const NavBar = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const menuItems = [
    { id: 1, text: "home", href: "home" },
    { id: 3, text: "Know us", href: "whoWeAre" },
    { id: 4, text: "service", href: "service" },
    { id: 5, text: "contact Us", href: "contactUs" },
    { id: 6, text: "about Us", href: "aboutUs" },
  ];

  return (
    <header className="absolute z-[1] flex items-center justify-around w-full  bg-transparent ">
      <div className="m-5 logo">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          priority
          className="w-auto h-auto -top-20"
        />
      </div>
      <div className="grid w-full m-5 text-2xl text-white place-items-end md:hidden">
        <span onClick={() => setOpenNav(!openNav)}>
          <RxHamburgerMenu />
        </span>
      </div>
      <div
        id="hamburger"
        className={`absolute w-full h-full top-0 ${
          openNav ? "block" : "hidden"
        }`}
      >
        <div className="w-full bg-white mobile-list ">
          <ul className="relative flex flex-col items-center justify-center gap-7 p-14">
            <span
              className="absolute text-2xl right-10 top-4"
              onClick={() => setOpenNav(!openNav)}
            >
              <GiSplitCross />
            </span>
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.href}
                  className="font-semibold text-black"
                  activeClass="active"
                  smooth
                  spy
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="navlist">
        <ul className="items-center justify-around hidden gap-5 md:flex">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                activeClass="active"
                smooth
                spy
                className="text-white cursor-pointer"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
