import Link from "next/link";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { RateCard } from "./components/rate_card";

export default function RatingPage({ label, desc, py }: any) {
  return (
    <div className="">
      <AccountHeader header="Ratings & Feedback" />
      <div className=" w-full flex  justify-center items-center gap-4 p-10 md:flex-wrap border-t-2  ">
        <div className=" flex-1 flex-wrap flex w-min justify-evenly items-evenly">
          <RateCard
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

RatingPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
