import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full max-w-[1380px] px-5 md:px-10 mx-auto">
      <nav className="mt-10 flex align-middle items-center justify-between">
        <div>
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </div>
        <div className="">
          <Link href="/">About</Link>
          <Link href="/">Features</Link>
          <Link href="/">Pricing</Link>
          <Link href="/">FAQ</Link>
          <Link href="/">Team</Link>
          <Link href="/">Contact</Link>
        </div>
        <div>
          <button>Buy now</button>
        </div>
      </nav>
    </main>
  );
}
