import { LeadLayout } from "../layout/lead_layout";
import "tw-elements";
import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import pic3 from "../../../public/images/pic3.jpg";
import Image from "next/image";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { useRouter } from "next/router";
declare module "react" {
  interface HTMLProps<T> {
    size?: string;
  }
}
export default function ViewProfile() {
  const router = useRouter();
  const {
    id,
    advisorName,
    company,
    expertise,
    typeMeeting,
    age,
    contact,
    email,
    address,
    typeInsurance,
    insuranceProducts,
    insuranceProductLink,
    insuranceDescription,
  } = router.query;
  const [prodId, setProdId] = useState<any>([]);
  // const [prodId, setProdId] = useState<any>([]);
  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("prodId") || "{}");
  //   if (items) {
  //     setProdId(items);
  //   }
  // }, []);
  const [startDate, setStartDate] = useState(new Date());
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const [form, setForm] = React.useState({
    id: id,
    name: advisorName,
    company: company,
    expertise: expertise,
    type_meeting: typeMeeting,
    age: age,
    contact: contact,
    email: email,
    address: address,
    type_insurance: typeInsurance,
    insurance_product: insuranceProducts,
    insurance_description: insuranceDescription,
    insurance_product_link: '"' + insuranceProductLink + '"',
    facebook_link: "https://www.facebook.com/mae.mabilog.1?mibextid=LQQJ4d",
    instagram_link: "https://instagram.com/maeye_ng?igshid=ZWIzMWE5ZmU3Zg==",
    linked_in: "https://www.linkedin.com/in/mae-mabilog-b45185248",
    booking: startDate,
  });

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem("prodId") || "{}");
  //   if (items) {
  //     setProdId(items);
  //   }
  //   console.log(prodId);
  //   setForm({
  //     ...form,
  //     id: prodId?.id,
  //     name:
  //       prodId.adviserData?.user.firstName +
  //       " " +
  //       prodId.adviserData?.user.lastName,
  //   });
  // setForm({
  //   ...form,
  //   name:
  //     prodId?.adviserData?.user?.firstName +
  //     " " +
  //     prodId?.adviserData?.user?.lastName,
  // });
  // setForm({
  //   ...form,
  //   company: prodId?.adviser?.company,
  // });

  // setForm({
  //   ...form,
  //   expertise: prodId?.adviser?.expertise,
  // });
  // setForm({
  //   ...form,
  //   type_meeting: prodId?.meetingType,
  // });
  // setForm({
  //   ...form,
  //   age: prodId?.adviserData?.user?.birthdate,
  // });
  // setForm({
  //   ...form,
  //   contact: prodId?.adviserData?.user?.contactNo,
  // });
  // setForm({
  //   ...form,
  //   email: prodId?.adviserData?.user?.email,
  // });
  // setForm({
  //   ...form,
  //   address: prodId?.adviserData?.user?.address,
  // });
  // setForm({
  //   ...form,
  //   type_insurance: prodId?.type,
  // });
  // setForm({
  //   ...form,
  //   name: prodId?.name,
  // });
  // setForm({
  //   ...form,
  //   insurance_product: prodId?.name,
  // });
  // setForm({
  //   ...form,
  //   insurance_product_link: prodId?.url,
  // });
  // setForm({
  //   ...form,
  //   insurance_description: prodId?.description,
  // });
  // }, []);

  // ENTER HERE

  // console.log(prodId);
  const handlePost = () => {
    // setShowModal(false);
    // console.log(adviserId);
    // console.log(advisorName);
    // console.log(leadsId);
    // console.log(leadsName);
    // console.log(company);
    // console.log(expertise);
    // console.log(typeMeeting);
    // console.log(age);
    // console.log(contact);
    // console.log(address);
    // console.log(typeInsurance);
    // console.log(insuranceProducts);
    // console.log(insuranceProductLink);
    // console.log(insuranceDescription);
    // console.log(remarks);
  };
  return (
    <div className="flex">
      <div className=" h-auto w-[20rem] flex flex-col items-center px-12 py-10 bg-slate-200">
        <div className="flex flex-col bg-red-500 rounded-full w-[10rem] h-[10rem] mb-10 overflow-hidden">
          <Image
            src={pic3}
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full">
          <div className=" font-khulabold text-2xl">{form.name}</div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Company</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>{form.company}</div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Expertise</div>
          <div className="text-start font-khulareg mt-3 flex flex-col">
            <div>{form.expertise}</div>
          </div>
        </div>

        <div className=" w-full">
          <div className=" font-khulabold text-2xl mt-10">Type of Meeting</div>
          <div>{form.type_meeting}</div>
        </div>
      </div>
      <div className=" h-auto w-full px-12 py-10 flex flex-col gap-10">
        <div className="flex flex-row justify-start gap-20 ">
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Age</div>
            <div className="font-khulareg text-lg">{form.age}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Contact Number</div>
            <div className="font-khulareg text-lg">{form.contact}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl">Email</div>
            <div className="font-khulareg text-lg">{form.email}</div>
          </div>
          <div className="flex flex-col">
            <div className="font-khulabold text-xl"> Address</div>
            <div className="font-khulareg text-lg">{form.address}</div>
          </div>
        </div>
        <div className="">
          <div className="font-khulabold text-xl">Social Links</div>
          <div className="font-khulareg text-lg mt-2 flex flex-row gap-10 justify-start items-center">
            <Link
              href={
                form.facebook_link
                // "https://www.facebook.com/mae.mabilog.1?mibextid=LQQJ4d"
              }
              target="_blank"
            >
              <AiFillFacebook size={35} />
            </Link>
            <Link
              href={
                form.instagram_link
                // "https://instagram.com/maeye_ng?igshid=ZWIzMWE5ZmU3Zg=="
              }
              target="_blank"
            >
              <AiFillInstagram size={35} />
            </Link>
            <Link
              href={
                form.linked_in
                // "https://www.linkedin.com/in/mae-mabilog-b45185248"
              }
              target="_blank"
            >
              <AiFillLinkedin size={35} />
            </Link>
          </div>
        </div>

        <div className="">
          <div className="font-khulabold text-xl">Type of Insurance</div>
          <div className="font-khulareg text-lg mt-2">
            {form.type_insurance}
          </div>
        </div>

        <div className="">
          <div className="font-khulabold text-xl">Insurance Products</div>
          <div className="font-khulareg text-lg mt-2">
            {form.insurance_product}
          </div>
        </div>

        <div className="">
          <div className="font-khulabold text-xl">Insurance Product Link</div>
          <div className="font-khulareg text-lg mt-2">
            <div className="text-start font-khulareg mt-3 flex flex-col">
              <Link
                className="hover:text-blue-500 hover:underline"
                target={"_blank"}
                href={
                  form.insurance_product_link
                  // "https://www.sunlife.com.ph/en/insurance/health-protection/sun-cancer-care/"
                }
              >
                Sun Life
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-khulabold text-xl">Insurance Product Name</div>
          <div className="font-khulareg text-lg mt-2">
            {form.insurance_description}
          </div>
        </div>

        <div className=" flex flex-col gap-5">
          <div className="font-khulabold text-xl text-center">
            Book a Meeting
          </div>
          <div
            className="font-khulareg text-lg mt-2 flex flex-row justify-center gap-10
          "
          >
            <div>
              <DatePicker
                selected={startDate}
                onChange={(date: any) => setStartDate(date)}
                // onChange={(date: any) => {
                //   setForm({ ...form, booking: date });
                // }}
              />
            </div>

            <button
              data-te-toggle="modal"
              data-te-target="#exampleModal"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={() => setShowModal(true)}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Confirm Schedule
            </button>
            <>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold">Confirm?</h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                              ×
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Would you like to book a meeting now?
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handlePost}
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </>
          </div>
        </div>
      </div>
    </div>
  );
}

ViewProfile.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
