import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { FormRow } from "./components/form";
import toast, { Toaster } from "react-hot-toast";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Report" />
      <div className="flex justify-evenly items-start flex-col h-full border-solid py-10"></div>

      <div className="w-full h-[30rem] flex justify-center items-center px-10">
        <div className="bg-slate-200 w-full py-20 gap-5 rounded-lg flex flex-col justify-center items-center ">
          <h1 className=" font-khulabold">We are here to assist you!</h1>
          <h2>Please complete the form below for your complaints</h2>
          <div className="flex justify-evenly items-start flex-col h-full gap-10">
            <FormRow py="py-1.5" label="Subject:" />
            <FormRow label="Type:" py="py-1.5" />
            <FormRow label="Message:" py="py-10" />
          </div>
          <button
            className="px-4 py-2.5 bg-blue-500 mb-5 rounded-lg"
            onClick={() => {
              toast.success(
                "We apologize for the incovenience and will address it as soon as possible"
              );
            }}
          >
            Send
          </button>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
