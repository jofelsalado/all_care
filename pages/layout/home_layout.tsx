import Link from "next/link";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import { AcLogo } from "./components/ac_logo";

var setScale = "";
var setHeight = "";
var setVisible = "";
export function HomeLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [burgeropen, setBurgerOpen] = useState(false);
  if (open == true) {
    setScale = "scale-100";
  } else {
    setScale = "scale-0";
  }

  if (burgeropen == true) {
    setHeight = "h-[25rem] lg:h-[6rem]";
  } else {
    setHeight = "h-[6rem]";
  }

  if (burgeropen == true) {
    setVisible = " scale-100 lg:scale-0";
  } else {
    setVisible = "scale-0 ";
  }
  return (
    <div>
      <div className="w-full bg-gray-100 h-screen">
        <div
          className={`flex flex-row  sticky z-50 top-0 duration-300 ${setHeight} relative bg-white`}
        >
          <div className="h-[6rem]  w-full top-0 absolute flex items-center">
            <div className="absolute top-0">
              <AcLogo />
            </div>
            <div className="right-0 hidden lg:visible lg:flex flex-row gap-x-10 pr-20 font-khulareg text-gray-600 absolute">
              <Link href={"/"}>
                <h1 className="hover:text-[#38b6ff] ">Home</h1>
              </Link>
              <Link href={"/"}>
                <h1 className="hover:text-[#38b6ff] ">Services</h1>
              </Link>
              <Link href={"/"}>
                <h1 className="hover:text-[#38b6ff] ">About Us</h1>
              </Link>
              <Link href={"/"}>
                <h1 className="hover:text-[#38b6ff] ">Contact Us</h1>
              </Link>
              <button onClick={() => setOpen(!open)}>
                <div className="flex flex-col relative">
                  <div className="flex flex-row justify-center items-center gap-x-1 hover:text-[#38b6ff]">
                    <h1 className=" ">Login</h1>
                    <IoMdArrowDropdown
                      size={20}
                      className=""
                    />
                  </div>
                  <div
                    className={`bg-gray-100 h-auto w-[12rem] absolute z-50 -bottom-[8rem] right-2 duration-300 ${setScale} rounded-xl`}
                  >
                    <div className="flex flex-col justify-center items-start gap-y-3 p-3">
                      <Link
                        href={"/lead/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>Lead's Portals</div>
                      </Link>

                      <Link
                        href={"/advisor/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>
                          <h1>Advisor's Portal</h1>
                        </div>
                      </Link>
                      <Link
                        href={"/admin/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>
                          <h1>Admin's Portal</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <div className="right-0 absolute pr-6 lg:hidden flex flex-row gap-x-5">
              <button onClick={() => setOpen(!open)}>
                <div className="flex flex-col relative">
                  <div className="flex flex-row justify-center items-center gap-x-1 hover:text-[#38b6ff]">
                    <h1 className=" ">Login</h1>
                    <IoMdArrowDropdown
                      size={20}
                      className=""
                    />
                  </div>
                  <div
                    className={`bg-gray-100 h-auto w-[12rem] absolute z-50 -bottom-[8rem] right-2 duration-300 ${setScale} rounded-xl`}
                  >
                    <div className="flex flex-col justify-center items-start gap-y-3 p-3">
                      <Link
                        href={"/lead/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>
                          <h1>Lead's Portal</h1>
                        </div>
                      </Link>

                      <Link
                        href={"/advisor/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>
                          <h1>Advisor's Portal</h1>
                        </div>
                      </Link>
                      <Link
                        href={"/admin/login"}
                        className="hover:text-[#38b6ff]"
                      >
                        <div>
                          <h1>Admin's Portal</h1>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </button>
              <button onClick={() => setBurgerOpen(!burgeropen)}>
                <div className=" hover:text-[#38b6ff] text-gray-800">
                  <FaHamburger size={35} />
                </div>
              </button>
            </div>
          </div>
          <div
            className={`mt-[6rem] flex items-center ${setVisible} -z-50 font-khulareg text-gray-600 w-full border-t-[1px] border-gray-200`}
          >
            <div className="flex flex-col gap-y-10 pl-5 w-full">
              <Link
                href={""}
                className=" w-full hover:border-b-1 hover:border-b-[#38b6ff]"
              >
                <h1 className="hover:text-[#38b6ff] ">Home</h1>
              </Link>
              <Link href={""}>
                <h1 className="hover:text-[#38b6ff] ">Services</h1>
              </Link>
              <Link href={""}>
                <h1 className="hover:text-[#38b6ff] ">About Us</h1>
              </Link>
              <Link href={""}>
                <h1 className="hover:text-[#38b6ff] ">Contact Us</h1>
              </Link>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
