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
        <AccountHeader header="Book a Meeting" />
        <div className="w-full h-[30rem]  flex flex-row px-10">
          <div className="h-full w-[25rem] bg-slate-200 rounded-l-lg flex flex-col justify-evenly items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="bg-red-500 w-[9rem] h-[9rem] rounded-full"></div>
              <div>Mae Mabilog</div>
              <div>Financial Advisor</div>
            </div>
            <div className=" h-[10rem] w-[20rem] flex flex-col justify-evenly items-evenly px-5 rounded-lg">
              <Description
                title="Schedule:"
                desc="MWF 9AM-1PM"
              />
              <Description
                title="Duration:"
                desc="1 Hour"
              />
              <Description
                title="Type:"
                desc="Zoom/Meeting"
              />
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
        </div>
      </div>
    </Suspense>
  );
}

MeetingPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
