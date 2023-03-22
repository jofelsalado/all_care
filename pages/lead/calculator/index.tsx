import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Financial Calculator" />
      <div className="w-full h-[30rem] flex justify-center items-center">
        <div className="bg-slate-200 w-[60rem] h-[30rem] rounded-lg flex flex-row justify-around items-center ">
          <div className="flex justify-evenly items-center flex-col h-full">
            <FormRow
              py="py-1.5"
              label="Present Value:"
            />
            <FormRow
              label="Interest Per Year:"
              desc="%"
              py="py-1.5"
            />
            <FormRow
              label="Yearly Payment:"
              py="py-1.5"
            />
            <FormRow
              label="Total Interest:"
              desc="$"
              py="py-1.5"
            />
            <FormRow
              label="Future Value:"
              desc="$"
              py="py-1.5"
            />
            <button className="px-4 py-2.5 bg-blue-500 rounded-lg text-white">
              Compute
            </button>
          </div>
          <div className="border-2 border-slate-300 rounded-lg w-[15rem] h-[15rem] px-5 flex flex-col justify-evenly items-center">
            <div className="">Present Value * Interest/Year = Interest</div>
            <div className="">
              Future Value = Present Value - Yearly Payment + Interest
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
