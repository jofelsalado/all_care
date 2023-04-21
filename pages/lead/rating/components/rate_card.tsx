import Link from "next/link";

import React from "react";
import ReactStars from "react-stars";
import { AiOutlineCreditCard } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";

export function RateCard({
  name,
  address,
  type,
  price,
  client_types1,
  client_types2,
  client_types3,
  status,
}: any) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <Toaster />
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Send us your Feedback!
                    </h3>
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
                    <div className="w-full ">
                      <input
                        className={`h-[20rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                        type="text"
                        placeholder="Description"
                      />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cancel
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => {
                        setShowModal(false);
                        toast.success("Thank you for your feedback!");
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <div
        className={`bg-white w-[50rem] shadow-2xl rounded-xl flex flex-col justify-center gap-4 items-center px-4 py-4 scale-95 ${status}`}
      >
        <div className="flex flex-row justify-center gap-5 items-center w-full">
          <div className="bg-pink-500 w-[6.5rem] h-[6.5rem] rounded-full"></div>
          <div className="flex flex-col">
            <div>{name}</div>
            <div>{address}</div>
          </div>
        </div>

        <div className="flex flex-row justify-around items-around w-full">
          <div className="bg-slate-200 w-[13rem] h-[10rem]  flex flex-col justify-start gap-3 items-center py-5 rounded-xl">
            <div className=" font-khulabold">Types:</div>
            <div className="flex flex-col  h-full justify-center items-start gap-1 font-khulalight ">
              {type}
            </div>
          </div>
          <div className="bg-slate-200 w-[13rem]  flex flex-col justify-start gap-3 items-center py-5 rounded-xl">
            <div className=" font-khulabold">Client Types:</div>
            <div className="flex flex-col  h-full justify-center items-start gap-1 font-khulalight ">
              <div>{client_types1}</div>
              <div>{client_types2}</div>
              <div>{client_types3}</div>
            </div>
          </div>
          <div className="bg-slate-200 w-[13rem] h-[10rem]  flex flex-col justify-start gap-3 items-center py-5 rounded-xl">
            <div className=" font-khulabold">Price:</div>
            <div className="text-sm text-center flex flex-row justify-center gap-1 items-center w-full  h-full font-khulalight">
              <div>
                <AiOutlineCreditCard size={30} />
              </div>
              <div>{price}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className=" font-khulabold text-lg text-slate-700  pt-0">
            Rate
          </div>
          <ReactStars count={5} size={24} color2={"#ffd700"} />
        </div>
        <div className="text-center lg:text-left">
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Rate Now
          </button>
        </div>
      </div>
    </div>
  );
}
