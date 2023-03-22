import { UserLayout } from "../../layout/user_layout";
import { LeadLayout } from "../layout/lead_layout";

import { PageBody } from "./sections/page_body";
import { PageHeader } from "./sections/page_header";

export default function NotifactionPage() {
  return (
    <div>
      <PageHeader />
      <div className="p-10">
        <PageBody />
      </div>
    </div>
  );
}

NotifactionPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
