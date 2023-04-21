import { useState } from "react";
import { Client, HydrationProvider } from "react-hydration-provider";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaSort } from "react-icons/fa";
import { UserLayout } from "../../layout/user_layout";
import { LeadLayout } from "../../lead/layout/lead_layout";
import { AccountHeader } from "../components/account_header";
import { AdminLayout } from "../layout/admin_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
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
          <AccountHeader header="Complaint Report" />

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
                    Role
                  </th>
                  <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                    Action
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
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap flex items-start">
                  <button
                    onClick={() => {
                      setClick(!click);
                    }}
                  >
                    <AiFillCheckCircle size={25} color={color} />
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </Client>
      </main>
    </HydrationProvider>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <AdminLayout>{page}</AdminLayout>;
};
