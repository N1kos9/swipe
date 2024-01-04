"use client";

import Image from "next/image";
import Link from "next/link";

import { FiInstagram } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";

import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(1);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      if (window !== undefined) {
        setScreenWidth(window.innerWidth);
      }
    };
    if (window !== undefined) {
      window.addEventListener("resize", changeWidth);
    }

    return () => {
      if (window !== undefined) {
        window.removeEventListener("resize", changeWidth);
      }
    };
  }, []);
  return (
    <main className=" w-full max-w-[1380px] mt-2 px-5 md:px-10 mx-auto overflow-hidden">
      {/* <Navbar /> */}
      <nav className="flex align-middle z-20 text-text font-semibold items-center justify-between ">
        <div className="overflow-x-hidden overflow-y-hidden">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        {(toggleMenu || screenWidth > 1100) && (
          <div className="navbar">
            <Link href="/" className="">
              About
            </Link>
            <Link href="/" className="hover:text-hovering duration-300">
              Features
            </Link>
            <Link href="/" className=" hover:text-hovering duration-300">
              Pricing
            </Link>
            <Link href="/" className=" hover:text-hovering duration-300">
              FAQ
            </Link>
            <Link href="/" className="hover:text-hovering duration-300">
              Team
            </Link>
            <Link href="/" className="hover:text-hovering duration-300">
              Contact
            </Link>
          </div>
        )}

        <div>
          <button className="md:p-4 hidden md:block md:bg-buttonBackground md:opacity-80 md:px-9 md:rounded-md md:border-2 md:border-background hover:bg-whiteHover duration-300 drop-shadow-2xl">
            Buy now
          </button>
        </div>

        <div className="menu-icon flex navbar:hidden">
          <AiOutlineMenu
            onClick={toggleNav}
            className=" text-6xl border rounded-md p-3 bg-buttonBackground border-background shadow-2xl overflow-x-hidden overflow-y-hidden"
          />
        </div>
      </nav>
      <div className="absolute -z-20 h-full bottom-0 lg:right-56 right-[-300px] max-w-2xl max-h-2xl lg:max-w-full lg:max-h-full">
        <Image
          src="/item.png"
          alt="item"
          height={800}
          width={800}
          className="overflow-x-hidden overflow-y-hidden overflow-hidden"
        />
      </div>
      <div className=" mt-28">
        <h1 className="md:text-7xl text-5xl text-balance font-bold md:tracking-wider md:leading-tight">
          Accessible way to start your busines
        </h1>
        <h2 className="md:text-3xl text-2xl mt-11 font-bold text-text">
          Simple. Customizable. Stylish.
        </h2>
        <button className="p-4 bg-button px-9 rounded-md text-footerText mt-16 font-bold hover:bg-hovering duration-500">
          Get demo for free
        </button>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-20">
          <h3 className="md:text-xl text-lg font-bold md:mt-24 mt-12 cursor-pointer">
            &#128308; WATCH FULL VIDEO
          </h3>
          <div className=" flex md:flex-col items-end mt-2">
            <FiFacebook className="p-3 text-5xl cursor-pointer hover:text-hovering duration-300" />
            <FiInstagram className="p-3 text-5xl cursor-pointer hover:text-hovering duration-300" />
            <FiTwitter className="p-3 text-5xl cursor-pointer hover:text-hovering duration-300" />
          </div>
        </div>
      </div>
    </main>
  );
}
