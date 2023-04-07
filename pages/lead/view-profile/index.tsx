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
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Confirm Schedule
            </button>
            <div
              data-te-modal-init
              className="fixed top-0 left-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
              id="exampleModal"
              tabIndex={-1}
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                data-te-modal-dialog-ref
                className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
              >
                <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                  <div className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <h5
                      className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                      id="exampleModalLabel"
                    >
                      Modal title
                    </h5>
                    <button
                      type="button"
                      className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                      data-te-modal-dismiss
                      aria-label="Close"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="relative flex-auto p-4"
                    data-te-modal-body-ref
                  >
                    Modal body text goes here.
                  </div>
                  <div className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button
                      type="button"
                      className="inline-block rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                      data-te-modal-dismiss
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Save changes
                    </button>
                  </div>
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
  return <LeadLayout>{page}</LeadLayout>;
};
