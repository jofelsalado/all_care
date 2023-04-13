import { useEffect, useState } from "react";
import Image from "next/image";
import Router from "next/router";
import { CiLogout } from "react-icons/ci";
import { GiHamburgerMenu, GiBlackHandShield } from "react-icons/gi";
import { FaHistory, FaRegHandshake } from "react-icons/fa";
import { BsFillCalculatorFill, BsPersonSquare } from "react-icons/bs";
import { AiOutlineBell, AiOutlineStar } from "react-icons/ai";
import { AgentIcon } from "./components/user_icon";
import pic3 from "../../../public/images/pic3.jpg";
import Link from "next/link";
import { RxActivityLog } from "react-icons/rx";
import { MdOutlineNaturePeople, MdReportGmailerrorred } from "react-icons/md";

export function LeadLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("Home");
  const [opensub, setOpensub] = useState(false);
  var sub;
  var drawer;

  if (opensub == true) {
    sub = "h-[7rem]";
  } else {
    sub = "h-[0rem]";
  }

  if (open == true) {
    drawer =
      "h-[25rem] overflow-hidden md:w-72 md:overflow-y-auto overflow-y-auto md:p-10 pb-5";
  } else {
    drawer = "md:p-5 md:w-20 h-20 overflow-hidden";
  }

  return (
    <div className="flex-none md:flex duration-500 bg-gray-100 min-h-screen">
      <div
        className={`
           ${drawer} 
                w-screen
                md:h-screen
                duration-300
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
          className={`absolute cursor-pointer -right-1 top-9 w-7 rounded-full border-2 border-white-700 rotate-rr bg-white 
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
              src={pic3}
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
              Lead
            </p>
          </div>

          <Link
            href={{
              pathname: "/lead/profile",
            }}
          >
            <button
              onClick={() => setOpensub(!opensub)}
              className={`w-custTitle md:w-full focus:outline-none focus:ring focus:ring-[#588cfc] hover:bg-gradient-to-r from-[#588cfc] to-pink-400 rounded-lg duration-200  ${
                open ? "hover:px-5" : "hover:px-0"
              } ${open ? "md:scale-100" : "md:scale-100"} ${
                open ? "scale-100" : "scale-0"
              }`}
            >
              <AgentIcon
                title={"Manage Profile"}
                icon=<BsPersonSquare size="1.6rem" />
                open={open}
              />
            </button>
            {/* <div
            className={`bg-slate-200 text-slate-500 w-full ${sub} overflow-hidden duration-150 flex flex-col justify-center items-center gap-3 rounded-md`}
          >
            <button>- Sample 1</button>
            <button>- Sample 2</button>
            <button>- Sample 3</button>
          </div> */}
          </Link>

          <Link
            href={{
              pathname: "/lead/notification",
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
                title={"Notifications"}
                icon=<AiOutlineBell size="1.6rem" />
                open={open}
              />
            </button>
          </Link>

          <Link
            href={{
              pathname: "/lead/calculator",
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
                title="Calculator"
                icon=<BsFillCalculatorFill size="1.6rem" />
                open={open}
              />
              {open}
            </button>
          </Link>

          <Link
            href={{
              pathname: "/lead/advisors",
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
                title="Advisors"
                icon=<MdOutlineNaturePeople size="1.6rem" />
                open={open}
              />
              {open}
            </button>
          </Link>

          <Link
            href={{
              pathname: "/lead/meeting",
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
                title="History"
                icon=<FaRegHandshake size="1.6rem" />
                open={open}
              />
              {open}
            </button>
          </Link>
          <Link
            href={{
              pathname: "/lead/rating",
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
                title="Rating"
                icon=<AiOutlineStar size="1.6rem" />
                open={open}
              />
              {open}
            </button>
          </Link>
          <Link
            href={{
              pathname: "/lead/reports",
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
                title="Reports"
                icon=<MdReportGmailerrorred size="1.6rem" />
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
              }
                ${open ? "md:visible " : "md:hidden"} 
              
                `}
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
      <div className="w-full  pl-0 md:pl-20 md:mt-0 mt-20">{children}</div>
    </div>
  );
}
