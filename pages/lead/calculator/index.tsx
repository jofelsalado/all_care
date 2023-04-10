import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Financial Calculator" />
      <div className="w-full flex flex-col ">
        <div className="bg-slate-200 w-full  py-10 rounded-lg flex flex-row justify-around items-center ">
          <div className="flex flex-wrap h-full justify-around items-start gap-10 w-full">
            <div className="flex flex-col gap-10 w-[12.9rem]">
              <FormRow py="py-1.0" label="Date" />
              <FormRow py="py-1.0" label="Name" />
              <FormRow py="py-1.0" label="Email" />
              <FormRow py="py-1.0" label="Monthly Income" />
            </div>
            <div className="flex flex-col gap-10 w-[12.9rem]">
              <FormRow py="py-1.0" label="Contact No." />
              <FormRow py="py-1.0" label="Current Age" />
              <FormRow py="py-1.0" label="Peak Age" />
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-10 w-full mt-10 px-10">
          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Operating Activities</div>
              <div className="flex flex-col w-min mt-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="Description" />
                  <FormRow py="py-1.0" label="Cost" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-green-500 font-khulaXbold">HEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10">
                {" "}
                <FormRow py="py-1.0" label="% of Monthly Income" />
                <FormRow py="py-1.0" label="Recommended Limit" />
                <FormRow py="py-1.0" label="Unused Allocation" />
                <FormRow py="py-1.0" label="Amount Exceeding Limit" />
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Operating Activities</div>
              <div className="flex flex-col w-min mt-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="Description" />
                  <FormRow py="py-1.0" label="Cost" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-green-500 font-khulaXbold">HEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10">
                {" "}
                <FormRow py="py-1.0" label="% of Monthly Income" />
                <FormRow py="py-1.0" label="Recommended Limit" />
                <FormRow py="py-1.0" label="Unused Allocation" />
                <FormRow py="py-1.0" label="Cost" />
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Operating Activities</div>
              <div className="flex flex-col w-min mt-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="Description" />
                  <FormRow py="py-1.0" label="Cost" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-red-500 font-khulaXbold">UNHEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10">
                {" "}
                <FormRow py="py-1.0" label="% of Monthly Income" />
                <FormRow py="py-1.0" label="Recommended Limit" />
                <FormRow py="py-1.0" label="Description" />
                <FormRow py="py-1.0" label="Cost" />
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Calculate Now!
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
