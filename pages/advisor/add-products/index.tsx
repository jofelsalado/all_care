import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

export default function NotifactionPage() {
  return (
    <div className="px-10 pb-10">
      <AccountHeader header="Add Products" />
      <div className="flex flex-col gap-10">
        <div className="flex flex-col xl:flex-row justify-around items-start gap-y-12">
          <div className="flex flex-col grow xl:grow-0 gap-12 w-full xl:w-max">
            <div className="flex flex-col h-[4.3rem]">
              <label className="block mb-2 text-xl font-medium text-gray-900  font-khulabold">
                Advisor Name
              </label>
              <div className="">MAE M. MABILOG</div>
            </div>
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Type of Insurance
              </label>
              <select
                id="countries"
                className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              >
                <option selected>Type of Insurance</option>
                <option value="US">Health Insurance</option>
              </select>
            </div>

            <div className=" grow xl:grow ">
              <div className="xl:w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Insurance Product Link
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Website Link Address"
                />
              </div>
            </div>
            <div className=" grow xl:grow "></div>
          </div>
          <div className="flex flex-col  gap-12 w-full xl:w-max">
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Insurance Name
              </label>
              <select
                id="countries"
                className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              >
                <option selected>Insurance Name</option>
                <option value="US">Medicare</option>
                <option value="CA">PhilHealth</option>
              </select>
            </div>
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Insurance Product Description
              </label>
              <input
                className={`h-[10rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder=""
              />
            </div>
            <div className=" grow xl:grow hidden xl:invisible">
              <div className="xl:w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Type of Insurance
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Type of Insurance"
                />
              </div>
            </div>
            <div className=" grow xl:grow hidden xl:invisible">
              <div className="xl:w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Type of Insurance
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Type of Insurance"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[10rem] mt-10">
            <button
              type="submit"
              className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none  w-full"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

NotifactionPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
