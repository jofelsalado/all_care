import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Report" />
      <div className="flex justify-evenly items-start flex-col h-full border-solid">
        //
        <h1>We are here to assist you !</h1>
      </div>
      <h2>Please complete the form below for your complaints</h2>
      <div className="w-full h-[30rem] flex justify-center items-center">
        <div className="bg-slate-200 w-[40rem] h-[25rem] rounded-lg flex flex-col justify-center items-center ">
          <div className="flex justify-evenly items-start flex-col h-full">
            <FormRow py="py-1.5" label="Subject:" />
            <FormRow label="Type:" py="py-1.5" />
            <FormRow label="Message:" py="py-10" />
          </div>
          <button className="px-4 py-2.5 bg-blue-500 mb-5 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
