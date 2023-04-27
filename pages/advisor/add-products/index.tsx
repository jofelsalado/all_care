import axios from "axios";
import Router, { useRouter } from "next/router";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";
import { EmailClass } from "../router-data/data";

interface FormData {
  typeInsurance: string;
  websiteLink: string;
  insuranceName: string;
  insuranceDescription: string;
}

export default function NotifactionPage() {
  const [form, setForm] = useState<FormData>({
    typeInsurance: "",
    websiteLink: "",
    insuranceName: "",
    insuranceDescription: "",
  });

  const apiEndPoint = "http://localhost:5555/api/v1/products";

  const addPost = async () => {
    const post = {
      type: form.typeInsurance,
      url: form.websiteLink,
      name: form.insuranceName,
      description: form.insuranceDescription,
      sku: "adgagasdga",
      adviserId: items.id,

      quotation: "N/A",
      status: "N/A",
      meetingType: "N/A",
    };
    await axios
      .post(apiEndPoint, post)
      .then((response) => {
        toast.success("Added Successfully");
        Router.push("./products");
      })
      .catch((error) => {
        toast.error("Add Failed");
      });
  };
  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "{}");
    if (items) {
      setItems(items);
    }
  }, []);

  console.log("ADD PRODUCT ID: " + items.id);
  return (
    <div className="">
      <Toaster />
      <AccountHeader header="Add Products" name="James Villarojo" />
      <div className="flex flex-col gap-10 px-10 pb-10">
        <div className="flex flex-col justify-center items-center gap-y-12">
          <div className="flex flex-col gap-12 w-full  justify-center items-start">
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Type of Insurance
              </label>
              <select
                onChange={(e) => {
                  setForm({ ...form, typeInsurance: e.target.value });
                }}
                className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
              >
                <option selected>Type of Insurance</option>
                <option value="Health Insurance">Health Insurance</option>
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
                  onChange={(e) => {
                    setForm({ ...form, websiteLink: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Insurance Product Name
              </label>
              <select
                id="countries"
                className="bg-gray-50 borderw-[20rem] grow xl:grow-0 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                onChange={(e) => {
                  setForm({ ...form, insuranceName: e.target.value });
                }}
              >
                <option selected>Insurance Name</option>
                <option value="Sun Fit and Well">Sun Fit and Well</option>
                <option value="Sun Senior Care">Sun Senior Care</option>
                <option value="Sun Cancer Care">Sun Cancer Care</option>
                <option value="Sun Life Assure">Sun Life Assure</option>
                <option value="Sun Healthier Life">Sun Healthier Life</option>
                <option value="Sun First Aid">Sun First Aid</option>
                <option value="Sun Maiden and Maiden Plus">
                  Sun Maiden and Maiden Plus
                </option>
                <option value="Sun ICU Protect">Sun ICU Protect</option>
                <option value="Health Care Access">Health Care Access</option>
                <option value="Global Health Access">
                  Global Health Access
                </option>
                <option value="Health Start Lite">Health Start Lite</option>
                <option value="Health Start">Health Start</option>
                <option value="Health Max">Health Max</option>
                <option value="Maternity Care">Maternity Care</option>
                <option value="MedConsult Adults">MedConsult Adults</option>
                <option value="MedConsult Kids">MedConsult Kids</option>
                <option value="MedConsult Seniors">MedConsult Seniors</option>
                <option value="MedConsult Lite">MedConsult Lite</option>
                <option value="Total ProtectER">Total ProtectER</option>
              </select>
            </div>
            <div className="flex flex-col xl:w-[40rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Insurance Product Description
              </label>
              <input
                className={`h-[10rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                type="text"
                placeholder=""
                onChange={(e) => {
                  setForm({ ...form, insuranceDescription: e.target.value });
                }}
              />
            </div>
            <div className=" grow xl:grow "></div>
          </div>
        </div>
      </div>
      <div className=" w-full flex justify-start items-start px-10 pb-10">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[10rem] mt-10">
            <button
              onClick={addPost}
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
