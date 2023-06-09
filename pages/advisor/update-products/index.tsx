import axios from "axios";
import Router, {  useRouter } from "next/router";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";


interface FormData {
  typeInsurance: string;
  websiteLink: string;
  insuranceName: string;
  insuranceDescription: string;
}

export default function UpdateProducts() {
  
  const router = useRouter();
  const {
    id,
    type,
    url,
    name,
    description,
    sku,
    quotation,
    status,
    meetingType,
  } = router.query;

  const [form, setForm] = useState<FormData>({
    typeInsurance: String(type),
    websiteLink: String(url),
    insuranceName: String(name),
    insuranceDescription: String(description),
  });

  const apiEndPoint = "http://localhost:5555/api/v1/products";

  const postUpdate = {
    type: form.typeInsurance,
    url: form.websiteLink,
    name: form.insuranceName,
    description: form.insuranceDescription,
    sku: sku,
    quotation: quotation,
    status: status,
    meetingType: meetingType,
  };

  const handeUpdate = async (id : any) => {
    await axios
      .patch(apiEndPoint + "/" + id, postUpdate)
      .then((response) => {
        toast.success("Updated Successfully");
        Router.push("./products");
      })
      .catch((error) => {
        toast.error("Update Failed");
      });
    console.log(type);
  };
  return (
    <div className="">
      <Toaster />
      <AccountHeader header="Update Products" name="James Villarojo" />
      <div className="flex flex-col gap-10 px-10 pb-10">
        <div className="flex flex-col justify-center items-center gap-y-12">
          <div className="flex flex-col gap-12 w-full  justify-center items-start">
            <div className="flex flex-col xl:w-[20rem] grow xl:grow-0">
              <label className="block mb-2 text-sm font-medium text-gray-900  font-khulabold">
                Type of Insurance
              </label>
              <select
              value={form.typeInsurance}
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
                  value={form.websiteLink}
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
                value={form.insuranceName}
                onChange={(e) => {
                  setForm({ ...form, insuranceName: e.target.value });
                }}
              >
                <option selected>Insurance Name</option>
                <option value="Medicare">Medicare</option>
                <option value="PhilHealth">PhilHealth</option>
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
                value={form.insuranceDescription}
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
              onClick={() => handeUpdate(id)}
              type="submit"
              className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none  w-full"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

UpdateProducts.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
