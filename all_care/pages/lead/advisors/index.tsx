import Link from "next/link";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";
import { Card } from "./components/card";

export default function ViewAdvisorsPage({ label, desc, py }: any) {
  return (
    <div className="">
      <AccountHeader header="View Advisers" />
      <div className=" w-full flex  justify-center items-center gap-4 p-10 md:flex-wrap border-t-2  ">
        <div className="w-full h-[3rem] flex flex-row justify-between items-center px-10 border-b-2 pb-10">
          <div className="font-khularegular text-slate-700">
            Book a Consultation
          </div>
          <button className="py-2.5 px-4 bg-blue-500 rounded-xl text-white font-khularegular text-sm">
            Get Match
          </button>
        </div>
        <div className=" flex-1 flex-wrap flex w-min justify-evenly items-evenly">
          <Card
            name="Mae Mabilog"
            address="Cordova, Cebu"
            type="Financial Services"
            price="Flat Fee"
            client_types1="Business Owner"
            client_types2="Divorce"
            client_types3="Widows "
          />
          <Card
            name="Mae Mabilog"
            address="Cordova, Cebu"
            type="Financial Services"
            price="Flat Fee"
            client_types1="Business Owner"
            client_types2="Divorce"
            client_types3="Widows "
          />
          <Card
            name="Mae Mabilog"
            address="Cordova, Cebu"
            type="Financial Services"
            price="Flat Fee"
            client_types1="Business Owner"
            client_types2="Divorce"
            client_types3="Widows "
          />
          <Card
            name="Mae Mabilog"
            address="Cordova, Cebu"
            type="Financial Services"
            price="Flat Fee"
            client_types1="Business Owner"
            client_types2="Divorce"
            client_types3="Widows "
          />
        </div>
      </div>
    </div>
  );
}

ViewAdvisorsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
