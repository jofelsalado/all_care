import Link from "next/link";

import React from "react";
import ReactStars from "react-stars";
import { AiOutlineCreditCard } from "react-icons/ai";

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
  return (
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
        <div className=" font-khulabold text-lg text-slate-700  pt-0">Rate</div>
        <ReactStars
          count={5}
          size={24}
          color2={"#ffd700"}
        />
      </div>
    </div>
  );
}
