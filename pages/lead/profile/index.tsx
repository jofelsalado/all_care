import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { InputField } from "./components/input_field";

export default function ProfilePage() {
  return (
    <div className="w-full">
      <AccountHeader header="Edit Profile" />
      <div className="flex flex-col justify-center items-center gap-12 w-full">
        <div className="flex flex-col justify-center items-center bg-white rounded-xl w-[70rem] h-[30rem] gap-12">
          <div className="flex flex-wrap  justify-evenly items-evenly gap-12 ">
            <div className="flex flex-col  justify-center gap-12 items-center">
              <InputField name="First Name" />
              <InputField name="Phone Number" />
              <InputField name="Email" />
            </div>
            <div className="flex flex-col   justify-center gap-12 items-center">
              <InputField name="Last Name" />
              <InputField name="Location" />
              <InputField name="Age" />
            </div>
          </div>
          <button className="bg-blue-500 py-2.5 px-4 rounded-xl text-white">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
ProfilePage.getLayout = function ProfilePage(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
