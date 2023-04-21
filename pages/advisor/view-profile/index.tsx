import "tw-elements";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import pic3 from "../../../public/images/pic3.jpg";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { AdvisorLayout } from "../layout/advisor_layout";
import { AccountHeader } from "../components/account_header";
declare module "react" {
  interface HTMLProps<T> {
    size?: string;
  }
}
export default function ViewProfile() {
  const [startDate, setStartDate] = useState(new Date());
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="">
      <AccountHeader header="Profile" />
      <div className="flex flex-row justify-center items-center py-20">
        <div className=" w-[50rem] rounded-xl  shadow-2xl flex flex-col items-center px-12 py-10 bg-slate-200">
          <div className="flex flex-col bg-red-500 rounded-full w-[10rem] h-[10rem] mb-10 overflow-hidden">
            <Image
              src={pic3}
              alt="Picture of the author"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-row  w-full justify-evenly items-start">
            <div className="flex flex-col items-start">
              <div className="w-full">
                <div className=" font-khulabold text-2xl">Name</div>
                <div className="text-start font-khulareg mt-3 flex flex-col">
                  <div>Mae Meramonte Mabilog</div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" font-khulabold text-2xl mt-10">
                  Contact Number
                </div>
                <div className="text-start font-khulareg mt-3 flex flex-col">
                  <div>09694098497</div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" font-khulabold text-2xl mt-10">Address</div>
                <div className="text-start font-khulareg mt-3 flex flex-col">
                  <div>BF Homes Parañaque Northwest Cairo 13 cairo street</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className=" w-full">
                <div className=" font-khulabold text-2xl">Age</div>
                <div className="text-start font-khulareg mt-3 flex flex-col">
                  <div>23</div>
                </div>
              </div>
              <div className=" w-full">
                <div className=" font-khulabold text-2xl mt-10">Email</div>
                <div className="text-start font-khulareg mt-3 flex flex-col">
                  <div>maemabilog@gmail</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewProfile.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
