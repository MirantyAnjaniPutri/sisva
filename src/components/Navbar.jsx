"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../assets/Sisva_Logo_-01.png";
// import MobileNavbar2 from "./MobileNavbar2";

const Navbar = () => {
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <div className=" text-gray-[#11003E] grid grid-cols-12 shadow-sm fixed top-0 left-0 right-0 bg-white h-[72px]">
      {/* mobile menu */}
      <div className=" col-span-12 bg-white md:hidden">
        {/* <MobileNavbar2 /> */}
      </div>
      {/* desktop menu */}
      <div className="hidden main-container md:flex items-center justify-between pl-40 col-span-11">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={91}
            height={48}
            className="cursor-pointer mr-auto"
          />
        </Link>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col md:flex-row font-semibold pr-24 md:p-0 mt-4 md:space-x-4 lg:space-x-8 md:mt-0">
            {/* <li>
              <Link
                href="/"
                className={`${
                  activePath === "/home" || activePath === "/"
                    ? "text-primary"
                    : ""
                }  p-1 font-inter lg:leading-[24px]`}
                aria-current="page"
              >
                Home
              </Link>
            </li> */}
            <li>
              <Link
                href="/about"
                className={`${activePath === "/about"}`}
                style={{
                  fontFamily: "Khumb sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className={`${activePath === "/about"}`}
                style={{
                  fontFamily: "Khumb sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`${activePath === "/about"}`}
                style={{
                  fontFamily: "Khumb sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                Contact
              </Link>
            </li>
            <li>
              <div className="opacity-25">|</div>
            </li>
            <li>
              <Link
                href={activePath === "/" ? "/hubungi-kami" : "/"}
                className={`${
                  activePath === "/"
                    ? "bg-transparent text-[#F96756] border-2 border-[#F96756]"
                    : "bg-transparent text-[#F96756] border-2 border-[#F96756]"
                } px-4 py-2 rounded-full transition duration-300 hover:bg-orange-500 hover:text-white`}
                style={{
                  fontFamily: "Khumb sans, sans-serif",
                  fontWeight: "400",
                  fontSize: "16px",
                }}
              >
                {activePath === "/" ? "Hubungi Kami" : "Explore"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
