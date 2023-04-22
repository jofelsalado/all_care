import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { InputField } from "./components/input_field";
import { useState } from "react";

export default function ProfilePage() {
  const [uploading, setUploading] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <div className="w-full">
      <AccountHeader header="Edit Profile" name="James Villarojo" />
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
                  placeholder="e.g Juan"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Contact Number
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="+639*********"
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
                  placeholder="e.g juan@gmai.com"
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
                  <option value="US">Traditional Insurance</option>
                  <option value="CA">Variable unit insurance</option>
                </select>
              </div>

              <div className={`w-[20rem] grow xl:grow-0 `}>
                <div className="flex ">
                  <AiFillFacebook />
                  <label
                    htmlFor="birth"
                    className="block mb-2 text-sm font-medium text-black pl-2"
                  >
                    Facebook Link
                  </label>
                </div>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Facebook Link"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <div className="flex ">
                  <AiFillInstagram />
                  <label
                    htmlFor="birth"
                    className="block mb-2 text-sm font-medium text-black pl-2"
                  >
                    Instagram Link
                  </label>
                </div>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Instagram Link"
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <div className="flex ">
                  <AiFillLinkedin />
                  <label
                    htmlFor="birth"
                    className="block mb-2 text-sm font-medium text-black pl-2"
                  >
                    LinkedIn Link
                  </label>
                </div>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="LinkedIn Link"
                />
              </div>
            </div>
            <div className="flex flex-col   justify-center gap-12 items-center">
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Middle Name
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="e.g Santa"
                />
              </div>
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
                  Address
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="text"
                  placeholder="Street Name, Building, House No."
                />
              </div>
              <div className={`w-[20rem] grow xl:grow-0 `}>
                <label
                  htmlFor="birth"
                  className="block mb-2 text-sm font-medium text-black pl-2"
                >
                  Birthdate
                </label>
                <input
                  className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                  type="date"
                  placeholder="MM/DD/YY"
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
              <div className="w-[20rem] grow xl:grow-0">
                <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                  Upload Picture
                </label>

                <label>
                  <input
                    type="file"
                    hidden
                    onChange={({ target }) => {
                      if (target.files) {
                        const file = target.files[0];
                        setSelectedImage(URL.createObjectURL(file));
                        setSelectedFile(file);
                      }
                    }}
                  />
                  {/* <div className="w-full h-[10rem]  flex items-center justify-center cursor-pointer"> */}
                  <div
                    className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer`}
                  >
                    {selectedImage ? (
                      <img src={selectedImage} alt="" />
                    ) : (
                      <span>Select Image</span>
                    )}
                  </div>
                </label>
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
