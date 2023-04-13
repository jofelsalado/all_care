import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaHamburger } from "react-icons/fa";
import { AcLogo } from "./components/ac_logo";
import React from "react";
import Image from "next/image";
import pic2 from "../../public/images/Picture3.png";
import pic3 from "../../public/images/Picture4.png";
import {
  HydrationContext,
  HydrationProvider,
  useHydrated,
  Server,
  Client,
  createHydration,
  useComponentHydrated,
} from "react-hydration-provider";

var setScale = "";
var setScale2 = "";
var setHeight = "";
var setVisible = "";
export function HomeLayout({ children }: any) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [burgeropen, setBurgerOpen] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  useEffect(() => {}, []);
  if (open == true) {
    setScale = "scale-100";
  } else {
    setScale = "scale-0";
  }

  if (open2 == true) {
    setScale2 = "scale-100";
  } else {
    setScale2 = "scale-0";
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
    <HydrationProvider>
      <main>
        <Client>
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
                    <button onClick={() => setOpen2(!open2)}>
                      <div className="flex flex-col relative">
                        <div className="flex flex-row justify-center items-center gap-x-1 hover:text-[#38b6ff]">
                          <h1 className=" ">Support</h1>
                          <IoMdArrowDropdown size={20} className="" />
                        </div>
                        <div
                          className={`bg-gray-100 h-auto w-[12rem] absolute z-50 -bottom-[8rem] right-2 duration-300 ${setScale2} rounded-xl`}
                        >
                          <div className="flex flex-col justify-center items-start gap-y-3 p-3">
                            <button
                              data-te-toggle="modal"
                              data-te-target="#exampleModal"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              onClick={() => setShowModal(true)}
                              type="button"
                              className="hover:text-[#38b6ff]"
                            >
                              Privacy and Policy
                            </button>

                            <button
                              data-te-toggle="modal"
                              data-te-target="#exampleModal"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                              onClick={() => setShowModal2(true)}
                              type="button"
                              className="hover:text-[#38b6ff]"
                            >
                              Contact Us
                            </button>
                          </div>
                        </div>
                      </div>
                    </button>
                    <button onClick={() => setOpen(!open)}>
                      <div className="flex flex-col relative">
                        <div className="flex flex-row justify-center items-center gap-x-1 hover:text-[#38b6ff]">
                          <h1 className=" ">Login</h1>
                          <IoMdArrowDropdown size={20} className="" />
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
                          <IoMdArrowDropdown size={20} className="" />
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
              <>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Confirm?</h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            {/* <div className="carousel-item relative float-left w-full">
                        <Image
                          src={pic2}
                          className="block object-cover  h-[50rem] w-full"
                          alt="..."
                        />
                   
                      </div> */}
                            <Image
                              src={pic2}
                              className="block object-cover w-full h-full"
                              alt="..."
                            />
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>

              <>
                {showModal2 ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Contact Us
                            </h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setShowModal2(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6 flex-auto">
                            <div className="flex justify-around items-center">
                              <Image
                                src={pic3}
                                className="block object-cover w-[30rem] h-auto"
                                alt="..."
                              />
                              <div className="flex flex-col gap-10">
                                <div className="flex gap-10">
                                  <div className="flex flex-col gap-5 justify-center items-start w-auto">
                                    <input
                                      type="text"
                                      className={`
        form-control
        block
      
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                                      id="exampleFormControlInput1"
                                      placeholder={"Your Name"}
                                    />
                                    <input
                                      type="text"
                                      className={`
        form-control
        block
      
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                                      id="exampleFormControlInput1"
                                      placeholder={"Phone Number"}
                                    />
                                  </div>
                                  <div className="flex flex-col gap-5 justify-center items-start w-auto">
                                    <input
                                      type="text"
                                      className={`
        form-control
        block
      
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                                      id="exampleFormControlInput1"
                                      placeholder={"Email Address"}
                                    />
                                    <input
                                      type="text"
                                      className={`
        form-control
        block
      
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                                      id="exampleFormControlInput1"
                                      placeholder={"Subject"}
                                    />
                                  </div>
                                </div>
                                <div>
                                  {" "}
                                  <input
                                    type="text"
                                    className={`
        form-control
        block
        w-[28.3rem]
        px-3
        py-16
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                                    id="exampleFormControlInput1"
                                    placeholder={"Messsages"}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal2(false)}
                            >
                              Close
                            </button>
                            <button
                              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal2(false)}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
              <div>{children}</div>
            </div>
          </div>
        </Client>
      </main>
    </HydrationProvider>
  );
}
