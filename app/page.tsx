import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="w-full max-w-[1380px] mt-2 px-5 md:px-10 mx-auto">
      {/* <Navbar /> */}
      <nav className="flex align-middle z-20 text-text font-semibold items-center justify-between">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div>
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
        <div>
          <button className="p-4 bg-buttonBackground opacity-80 px-9 rounded-md border-2 border-background">
            Buy noww
          </button>
        </div>
        <div className="absolute -z-20 justify-center h-full align-middle bottom-0 right-60">
          <Image src="/item.png" alt="item" height={800} width={800} />
        </div>
      </nav>
    </main>
  );
}
