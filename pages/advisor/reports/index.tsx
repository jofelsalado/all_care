import { UserLayout } from "../../layout/user_layout";
import { LeadLayout } from "../../lead/layout/lead_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Report" />
      <div className="flex justify-evenly items-start flex-col h-full border-solid py-10"></div>
      {/* <h2>Please complete the form below for your complaints</h2> */}
      <div className="w-full h-[30rem] flex justify-center items-center">
        <div className="bg-slate-200 w-[40rem] py-20  rounded-lg flex flex-col justify-center items-center ">
          <h1 className=" font-khulaXbold ">We are here to assist you!</h1>
          <div className="mb-10">
            Please complete the form below for your complaints
          </div>
          <div className="flex justify-evenly items-start flex-col h-full gap-y-10">
            <FormRow py="py-1.5" label="Subject:" />
            <FormRow label="Type:" py="py-1.5" />
            <FormRow label="Message:" py="py-10" />
          </div>
          <button className="px-4 py-2.5 bg-blue-500 mb-5 rounded-lg mt-10">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
