import { useState } from "react";
import Image from "next/image";
import Router from "next/router";

import { MdOutlineManageAccounts, MdOutlinePrivacyTip } from "react-icons/md";

import { RxDashboard } from "react-icons/rx";
import { BsBuilding, BsFillPersonLinesFill } from "react-icons/bs";
import { GiBlackHandShield, GiHamburgerMenu } from "react-icons/gi";
import { AgentIcon } from "./components/user_icon";
import { CiLogout } from "react-icons/ci";
import james from "../../public/images/james-modified.png";
import Link from "next/link";
import { IoMdNotifications } from "react-icons/io";

export function UserLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Home");
  return (
    <div className="">
      <div className="flex-none md:flex duration-500">
        <div
          className={`
                ${open ? "h-auto" : "h-20"} 
                w-screen
                ${
                  open
                    ? "md:w-72 md:overflow-y-auto md:overflow-x-hidden"
                    : "md:w-20"
                } 
                md:h-screen
                duration-300
                ${open ? "md:p-10" : "md:p-5"} 
                pt-7 
                bg-white
                top-0 
                fixed 
                z-10
                `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className={`absolute cursor-pointer -right-3 top-9 w-7 rounded-full border-2 border-white-700 rotate-rr bg-white 
            ${open ? "rotate-[270deg] -right-0" : "rotate-[90deg] "} 
            duration-700 scale-0 md:scale-100 `}
            onClick={() => setOpen(!open)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div
            className={`flex flex-row gap-x-4 items-center justify-center md:justify-start  border-b-2 pb-3 `}
          >
            <div className="">
              <GiBlackHandShield
                size="2rem"
                color="#588cfc"
                className="ml-1 mb-2  flex items-center justify-center object-cover cursor-pointer duration-500"
              />
            </div>

            <div className="flex-shrink-0 ">
              <h1
                className={`text-[#588cfc]  w-36 origin-left font-khulasemi tracking-[0.1rem] text-lg duration-300 md:${
                  !open && "scale-0"
                }`}
              >
                All Care
              </h1>
            </div>
            <div className={`scale-100 md:scale-0`}>
              <GiHamburgerMenu
                size="2rem"
                color="#588cfc"
                className={`origin-right ml-1 mb-2 object-cover cursor-pointer ${
                  open ? "scale-110" : "scale-100"
                } duration-500`}
                onClick={() => setOpen(!open)}
              />
            </div>
          </div>

          <div className="flex flex-col pt-3 gap-3 md:pt-8 md:gap-3 pl-5 md:pl-0">
            <div className="text-center mb-2 md:w-auto md:h-auto w-0 h-0 overflow-hidden">
              <Image
                src={james}
                className="rounded-full w-32 mb-4 mx-auto"
                alt="Avatar"
              />
              <h5
                className={`text-xl font-medium leading-tight mb-2 duration-300 ${
                  open ? "visible" : "hidden"
                }`}
              >
                NAME
              </h5>
              <p
                className={`text-gray-500 duration-300 ${
                  open ? "visible" : "hidden"
                }`}
              >
                Admin
              </p>
            </div>
            {/* <Link href={{
                            pathname: '/admin/account',
                        }}>
                            <button onClick={() => setName("Home")} className={`w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-gradient-to-r from-[#588cfc] to-pink-400 rounded-lg duration-200  ${open ? "hover:px-5" : "hover:px-0"} ${open ? "md:scale-100" : "md:scale-100"} ${open ? "scale-100" : "scale-0"}`}>
                                <AgentIcon title="Dashboard" icon=<RxDashboard size='1.6rem' /> open={open} /></button>
                        </Link> */}

            <Link
              href={{
                pathname: "/admin/notification",
              }}
            >
              <button
                onClick={() => setName("Home")}
                className={`w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-gradient-to-r from-[#588cfc] to-pink-400 rounded-lg duration-200  ${
                  open ? "hover:px-5" : "hover:px-0"
                } ${open ? "md:scale-100" : "md:scale-100"} ${
                  open ? "scale-100" : "scale-0"
                }`}
              >
                <AgentIcon
                  title="Notification"
                  icon=<IoMdNotifications size="1.6rem" />
                  open={open}
                />
              </button>
            </Link>

            <Link
              href={{
                pathname: "/admin/account",
              }}
            >
              <button
                onClick={() => setName("Products")}
                className={`w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-gradient-to-r from-[#588cfc] to-pink-400 rounded-lg duration-200  ${
                  open ? "hover:px-5" : "hover:px-0"
                } ${open ? "md:scale-100" : "md:scale-100"} ${
                  open ? "scale-100" : "scale-0"
                }`}
              >
                <AgentIcon
                  title="Account"
                  icon=<MdOutlineManageAccounts size="1.6rem" />
                  open={open}
                />
              </button>
            </Link>

            <Link
              href={{
                pathname: "/admin/account",
              }}
            >
              <button
                onClick={() => setName("Orders")}
                className={` w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-gradient-to-r from-[#588cfc] to-pink-400 rounded-lg duration-200  ${
                  open ? "hover:px-5" : "hover:px-0"
                } ${open ? "md:scale-100" : "md:scale-100"} ${
                  open ? "scale-100" : "scale-0"
                }`}
              >
                <AgentIcon
                  title="Productasds"
                  icon=<BsBuilding size="1.6rem" />
                  open={open}
                />
                {open}
              </button>
            </Link>
            <Link
              href={{
                pathname: "/",
              }}
            >
              <button
                onClick={() => Router.push("http://localhost:3000")}
                className={` w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-red-500 rounded-lg duration-200  ${
                  open ? "hover:px-5" : "hover:px-0"
                } ${open ? "md:scale-100" : "md:scale-100"} ${
                  open ? "scale-100" : "scale-0"
                }`}
              >
                <AgentIcon
                  title="Log Out"
                  icon=<CiLogout size="1.6rem" />
                  open={open}
                />
                {open}
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full bg-gray-100 pl-0 md:pl-20 md:mt-0 mt-20">
          {children}
        </div>
      </div>
    </div>
  );
}
