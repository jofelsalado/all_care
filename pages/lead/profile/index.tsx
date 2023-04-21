import { useState } from "react";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";

import { InputField } from "./components/input_field";

export default function ProfilePage() {
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  return (
    <div className="w-full">
      <AccountHeader header="Edit Profile" name="James Villarojo" />
      <div className="flex flex-col justify-center items-center gap-12 w-full">
        <div className="flex flex-col justify-center items-center bg-white rounded-xl w-[70rem] py-20 gap-12">
          <div className="flex flex-wrap  justify-evenly items-start gap-12 ">
            <div className="flex flex-col  justify-center gap-12 items-center">
              <InputField name="First Name" placeholder="e.g Juan" />
              <InputField name="Middle Name" placeholder="e.g Santa" />
              <InputField name="Contact Number" placeholder="+639*********" />
              <InputField name="Email" placeholder="e.g juan@gmail.com" />
            </div>
            <div className="flex flex-col   justify-center gap-12 items-center">
              <InputField name="Last Name" placeholder="e.g Dela Cruz" />
              <InputField
                name="Address"
                placeholder="e.g Street Name, Building, House No."
              />
              <InputField name="Date of Birth" placeholder="MM/DD/YY" />
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
  return <LeadLayout>{page}</LeadLayout>;
};
