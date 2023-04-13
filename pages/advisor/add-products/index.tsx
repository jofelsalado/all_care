import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

export default function NotifactionPage() {
  return (
    <div className="px-10">
      <AccountHeader header="Add Products" />
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div>Advisor Name</div>
            <div>MAE M. MABILOG</div>
          </div>
          <div className="flex flex-row">
            <div className="mb-4 bg-red-500 w-[5rem]">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Status
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Status"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NotifactionPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
