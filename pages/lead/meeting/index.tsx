import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";

import { Description } from "./components/desc";
import { Suspense } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import React from "react";
import { format } from "date-fns";
import { LeadLayout } from "../layout/lead_layout";

export default function MeetingPage() {
  const [selected, setSelected] = React.useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }
  return (
    <Suspense>
      <div>
        <AccountHeader header="Transaction History" />
        <div className="flex justify-center items-center">
          <table className="w-[60rem]">
            <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
              <tr className="pt-10">
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  LEAD ID
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  ADVISOR
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  COMPANY
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  TYPE OF MEETING
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  PRODUCT ID
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  PRODUCT
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  TYPE OF CONSULTATION
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  CONSULTATION FEE
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  DATE
                </th>
              </tr>
            </thead>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">1</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">1</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Mae Mabilog
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              SunLife
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Virtual
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">1</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Medicare
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">Zoom</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">--</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              04/11/23
            </td>
          </table>
        </div>
        {/* <div className="w-full h-[30rem]  flex flex-row px-10">
          <div className="h-full w-[25rem] bg-slate-200 rounded-l-lg flex flex-col justify-evenly items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="bg-red-500 w-[9rem] h-[9rem] rounded-full"></div>
              <div>Mae Mabilog</div>
              <div>Financial Advisor</div>
            </div>
            <div className=" h-[10rem] w-[20rem] flex flex-col justify-evenly items-evenly px-5 rounded-lg">
              <Description title="Schedule:" desc="MWF 9AM-1PM" />
              <Description title="Duration:" desc="1 Hour" />
              <Description title="Type:" desc="Zoom/Meeting" />
            </div>
          </div>
          <div className="w-full h-full flex justify-evenly items-center flex-row">
            <DayPicker
              className="p-10 rounded-lg w-min bg-slate-200"
              mode="single"
              selected={selected}
              onSelect={setSelected}
              footer={footer}
            />
            <div className="h-[20rem] flex flex-col justify-evenly items-center">
              <select
                id="countries"
                className="bg-gray-50 h-[3rem] border border-gray-300 text-gray-900 text-sm rounded-lg "
              >
                <option selected>
                  How do you prefer to have this meeting?
                </option>
                <option value="US">Phone Call</option>
                <option value="CA">Video Call</option>
              </select>
              <button className="bg-blue-500 w-[5rem] h-[2rem] text-center rounded-lg text-white">
                Save
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Suspense>
  );
}

MeetingPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
