import { LeadLayout } from "../layout/lead_layout";
import "tw-elements";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
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
    <div className="flex">
      <div className=" h-auto w-[20rem] flex flex-col items-center px-12 py-10 bg-slate-200">
        <div className="w-full">
          <div className=" font-khulabold text-2xl">Mae Mabilog</div>
          <div className="text-center font-khulareg mt-3 ">
            Certified Financial Planner Works at Sunlife
          </div>
        </div>
        <div></div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Expertise</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>Business</div>
            <div>Owners</div>
            <div>Widows</div>
            <div>Single</div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Qoutation</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>100</div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">
            Type of Insurance
          </div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>Health Insurance</div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Insurance</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>Medicare</div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Credentials</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <Link
              className="hover:text-blue-500 hover:underline"
              target={"_blank"}
              href={
                "https://www.credly.com/badges/b995099d-7e26-42b3-b3a0-f40ff9d9f656/linked_in_profile"
              }
            >
              Certified Financial Planner
            </Link>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">References</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <Link
              className="hover:text-blue-500 hover:underline"
              target={"_blank"}
              href={
                "https://www.sunlife.com.ph/en/insurance/health-protection/sun-cancer-care/"
              }
            >
              Sun Life
            </Link>
          </div>
        </div>
      </div>
      <div className=" h-auto w-full px-12 py-10 flex flex-col gap-10">
        <div className="flex flex-row justify-start gap-20 ">
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Age</div>
            <div className="font-khulareg text-lg">25</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Phone Number</div>
            <div className="font-khulareg text-lg">0943148583</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Email</div>
            <div className="font-khulareg text-lg">maemabilog@gmail.com</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl"> Address</div>
            <div className="font-khulareg text-lg">
              Cogon, Cordova, Cebu City
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-khulabold text-xl">About Me</div>
          <div className="font-khulareg text-lg mt-2">
            Experienced and driven financial advisor with over five years of
            experience providing clients with optimal assistance with retirement
            planning, estate planning, investment advisce, tax strategies, and
            overall support managing their finances, Proven track record of
            competitive market share expansion and assisting corporation in
            reaching goals. Driven and detail-oriented with the ability to
            thrive in high pressure environments. Adept at developing key
            relationships and furthering business development.
          </div>
        </div>
        <div className=" flex flex-col gap-2">
          <div className="font-khulabold text-xl">Education</div>
          <div className="font-khulabold text-md">University of Cebu</div>
          <div className="font-khulareg text-md">2020 - 2023</div>
          <div className="font-khulareg text-md">
            Finance and Economics Bachelors
          </div>
        </div>
        <div className="">
          <div className="font-khulabold text-xl">Personal Hobbies</div>
          <div className="font-khulareg text-lg mt-2">
            Experienced and driven financial advisor with over five years of
            experience providing clients with optimal assistance with retirement
            planning, estate planning, investment advisce, tax strategies, and
            overall support managing their finances, Proven track record of
            competitive market share expansion and assisting corporation in
            reaching goals. Driven and detail-oriented with the ability to
            thrive in high pressure environments. Adept at developing key
            relationships and furthering business development.
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="font-khulabold text-xl text-center">
            Book a Meeting
          </div>
          <div
            className="font-khulareg text-lg mt-2 flex flex-row justify-center gap-10
          "
          >
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
              />
            </div>

            <button
              data-te-toggle="modal"
              data-te-target="#exampleModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => setShowModal(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Confirm Schedule
            </button>
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
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
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Would you like to book a meeting now?
                          </p>
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
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewProfile.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
