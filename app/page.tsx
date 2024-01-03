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
      setScreenWidth(window.innerWidth);
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
        <div className="menu-icon flex navbar:hidden">
          <AiOutlineMenu
            onClick={toggleNav}
            className=" text-6xl border rounded-md p-3 bg-buttonBackground border-background shadow-2xl"
          />
        </div>
        <div>
          <button className="md:p-4 hidden md:block md:bg-buttonBackground md:opacity-80 md:px-9 md:rounded-md md:border-2 md:border-background">
            Buy now
          </button>
        </div>
        <div className="absolute -z-20 h-full bottom-0 lg:right-40 right-[-300px] max-w-2xl max-h-2xl lg:max-w-full lg:max-h-full	">
          <Image
            src="/item.png"
            alt="item"
            height={800}
            width={800}
            className=""
          />
        </div>
      </nav>
      <div>
        <h1>Accessible way to start your business</h1>
        <h2>Simple. Customizable. Stylish.</h2>
        <button>Get demo for free</button>
        <h3>WATCH FULL VIDEO</h3>
      </div>
    </main>
  );
}
