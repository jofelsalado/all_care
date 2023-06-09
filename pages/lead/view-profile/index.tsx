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
import { Router, useRouter } from "next/router";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { addDays, format } from "date-fns";
declare module "react" {
  interface HTMLProps<T> {
    size?: string;
  }
}
export default function ViewProfile() {
  const router = useRouter();
  const {
    id,
    adviserId,
    advisorName,
    leadsId,
    leadsName,
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
  const [startDate, setStartDate] = useState(format(new Date(), "dd/mm/yyyy"));
  const [endDate, setEndDate] = useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [readDate, setReadDate] = React.useState<any>({});
  const [posts, setPosts] = useState<any>([]);
  const apiEndPointProd = "http://localhost:5555/api/v1/adviser-consultations";
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPointProd);
      setPosts(response.data.data.consultationDate);
      console.log(response.data);
      // console.log(startDate);
    };
    getPosts();
  }, []);

  const [form, setForm] = React.useState({
    id: Number(id),
    adviserId: Number(adviserId),
    name: advisorName,
    leadsId: leadsId,
    leadsName: leadsName,
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

  const apiEndPoint = "http://localhost:5555/api/v1/adviser-consultations";

  const addPost = async () => {
    const post = {
      company: form.company,
      meetingType: form.type_meeting,
      type: form.type_insurance,
      fee: "N/A",
      remarks: "N/A",
      consultationDate: form.booking,
      adviserId: Number(adviserId),
      productId: Number(form.id),
      leadId: Number(items.lead?.id),
    };
    await axios
      .post(apiEndPoint, post)
      .then((response) => {
        toast.success("Added Successfully");
        // setReadDate(response);
        handlePost();
        // Router.push("./products");
      })
      .catch((error) => {
        toast.error("Add Failed");
        handlePost();
      });
  };

  const [items, setItems] = useState<any>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("lead") || "{}");
    if (items) {
      setItems(items);
    }
  }, []);

  const handlePost = () => {
    // setShowModal(false);
    console.log(items.lead?.id);
    console.log("LEADS ID: " + items.id);
    console.log("Product ID: " + form.id);
    console.log("Advisor ID: " + adviserId);
    console.log("Advisor Name: " + advisorName);
    console.log("Lead ID: " + leadsId);
    console.log("Lead Name: " + leadsName);
    console.log("Company: " + company);
    console.log("Expertise: " + expertise);
    console.log("Type of Meeting: " + typeMeeting);
    console.log("Age: " + age);
    console.log("Contact: " + contact);
    console.log("Address: " + address);
    console.log("Type of Insurance: " + typeInsurance);
    console.log("Insurance Product: " + insuranceProducts);
    console.log("Insurance Product Link: " + insuranceProductLink);
    console.log("Insurance Description: " + insuranceDescription);
    // console.log(remarks);
  };

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="flex">
      <Toaster />
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
                selected={addDays(new Date(), 1)}
                onChange={(date: any) => setStartDate(date)}
                minDate={addDays(new Date(), 1)}
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
                            onClick={
                              addPost
                              // console.log(items.firstName + "" + items.lastName)
                            }
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
