import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

import { InputField } from "./components/input_field";

export default function ProfilePage() {
  return (
    <div className="w-full">
      <AccountHeader header="Edit Profile" />
      <div className="flex flex-col justify-center items-center gap-12 w-full">
        <div className="flex flex-col justify-center items-center bg-white rounded-xl w-[70rem] py-20 gap-12">
          <div className="flex flex-wrap  justify-evenly items-start gap-12 ">
            <div className="flex flex-col  justify-center gap-12 items-center">
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  First Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Phone Number
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Email
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="flex flex-col w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Expertise
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                >
                  <option selected>Expertise</option>
                  <option value="US">Single</option>
                  <option value="CA">Married</option>
                  <option value="LA">Divorced</option>
                  <option value="OS">Widowed</option>
                  <option value="LE">Business Owner</option>
                </select>
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  About me
                </label>
                <input
                  className={`h-[10rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Personal Hobbies
                </label>
                <input
                  className={`h-[10rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col   justify-center gap-12 items-center">
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Last Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Location
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Location"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Age
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Age"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Credential Link
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Website Link address e.g credly"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Education
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Education"
                />
              </div>
              <div className="flex flex-col w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Type of Meeting
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                >
                  <option selected>Type of Meeting</option>
                  <option value="US">Face to Face</option>
                  <option value="CA">Virtual - Gmeet</option>
                  <option value="LE">Virtual - Zoom</option>
                </select>
              </div>
              <div className="flex flex-col w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Company
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                >
                  <option selected>Company</option>
                  <option value="US">SunLife</option>
                  <option value="CA">Insular</option>
                  <option value="LE">Manulife</option>
                </select>
              </div>
              <div className="flex flex-col w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Status
                </label>
                <select
                  id="countries"
                  className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                >
                  <option selected>Status</option>
                  <option value="US">Online</option>
                  <option value="CA">Offline</option>
                  <option value="LA">Unavailable</option>
                </select>
              </div>
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
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
