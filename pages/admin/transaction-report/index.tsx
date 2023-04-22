import { Suspense, useState } from "react";
import { HydrationProvider, Client } from "react-hydration-provider";
import {
  AiFillCheckCircle,
  AiOutlineCheck,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import { FaSort } from "react-icons/fa";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdminLayout } from "../layout/admin_layout";

export default function ReportPage() {
  var color = "";
  const [click, setClick] = useState(false);
  if (click == true) {
    color = "green";
  } else {
    color = "black";
  }
  return (
    <HydrationProvider>
      <main>
        <Client>
          <AccountHeader header="Transaction Report" />
          <div className="w-full h-[3rem] flex flex-row justify-evenly items-center px-10 border-b-2 pb-10">
            <form className="w-[15rem]">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only "
              >
                Search
              </label>
              {/* <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
                >
                  Search
                </button>
              </div> */}
            </form>
            <select
              id="countries"
              className="bg-gray-50 border w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected>All Complaints</option>
              <option value="US">All Appointments</option>
              <option value="CA">All Deactivate Accounts</option>
            </select>

            <select
              id="countries"
              className="bg-gray-50 border w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            >
              <option selected>Type of Meeting</option>
              <option value="US">Face to Face</option>
              <option value="CA">Zoom</option>
              <option value="CA">Google Meet</option>
            </select>

            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Print Report
            </button>
          </div>
          <div className="flex justify-center items-center pl-[2.5rem] pr-[6rem]">
            <table className="w-full">
              <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
                <tr className="pt-10">
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left flex items-center gap-5">
                    <div> Date Issued</div>
                    <button>
                      {" "}
                      <FaSort size={13} />
                    </button>
                  </th>
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                    Complaint ID
                  </th>
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                    Lead's Name
                  </th>
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                    Insurance
                  </th>
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                    Type of Meeting
                  </th>
                </tr>
              </thead>
              <tr className="bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300">
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap ">
                  1
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  1
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Alondra Buhawi
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Widowed
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Virtual
                </td>
              </tr>
            </table>
          </div>
        </Client>
      </main>
    </HydrationProvider>
  );
}

ReportPage.getLayout = function getLayout(page: any) {
  return <AdminLayout>{page}</AdminLayout>;
};
