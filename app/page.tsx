"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Home() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      if (window !== undefined) {
        setScreenWidth(window.innerWidth);
      }
    };
    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <main className="w-full max-w-[1380px] mt-2 px-5 md:px-10 mx-auto ">
      {/* <Navbar /> */}
      <nav className="flex align-middle z-20 text-text font-semibold items-center justify-between">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        {(toggleMenu || screenWidth > 1100) && (
          <div className="navbar">
            <Link href="/" className="">
              About
            </Link>
            <Link href="/" className="hover:text-pink-300">
              Features
            </Link>
            <Link href="/" className="hover:text-pink-300">
              Pricing
            </Link>
            <Link href="/" className="text-pink-400">
              FAQ
            </Link>
            <Link href="/" className="hover:text-pink-300">
              Team
            </Link>
            <Link href="/" className="hover:text-pink-300">
              Contact
            </Link>
          </div>
        )}

        <div>
          <button className="md:p-4 hidden md:block md:bg-buttonBackground md:opacity-80 md:px-9 md:rounded-md md:border-2 md:border-background hover:bg-whiteHover duration-300 drop-shadow-2xl">
            Buy now
          </button>
        </div>
        <div className="absolute -z-20 h-full bottom-0 lg:right-56 right-[-300px] max-w-2xl max-h-2xl lg:max-w-full lg:max-h-full	">
          <Image
            src="/item.png"
            alt="item"
            height={800}
            width={800}
            className=""
          />
        </div>
        <div className="menu-icon flex navbar:hidden">
          <AiOutlineMenu
            onClick={toggleNav}
            className=" text-6xl border rounded-md p-3 bg-buttonBackground border-background shadow-2xl"
          />
        </div>
      </nav>

      <div className=" mt-28">
        <h1 className="md:text-7xl text-5xl text-balance font-bold tracking-wider leading-tight">
          Accessible way to start your business
        </h1>
        <h2 className="md:text-3xl text-2xl mt-11 font-bold text-text">
          Simple. Customizable. Stylish.
        </h2>
        <button className="p-4 bg-button px-9 rounded-md text-footerText mt-16 font-bold hover:bg-hovering duration-500">
          Get demo for free
        </button>
        <h3 className="md:text-xl text-lg md:mt-40 mt-20 font-bold">
          &#128308; WATCH FULL VIDEO
        </h3>
      </div>
    </main>
  );
}
