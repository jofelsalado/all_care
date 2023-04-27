import { AccountHeader } from "../components/account_header";
import "tw-elements";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { AdvisorLayout } from "../layout/advisor_layout";
import React, { useEffect, useState } from "react";
import { MdOutlineDisabledByDefault } from "react-icons/md";
import axios from "axios";
import Router from "next/router";
import { type } from "os";
import toast from "react-hot-toast";

export default function BookingsPage() {
  var color = "";
  const [status, setStatus] = useState("N/A");
  const [note, setNotes] = useState("");
  const [showModal, setShowModal] = React.useState(false);
  const [posts, setPosts] = useState<any>([]);
  const [form, setForm] = useState<any>([]);
  useEffect(() => {
    setPosts(Object.values(form));
    const items = JSON.parse(localStorage.getItem("advisor") || "{}");
    if (items) {
      setForm(items);

      const apiEndPoint = `http://localhost:5555/api/v1/adviser/${items.id}/consultations-history`;
      const getPosts = async () => {
        const { data: res } = await axios.get(apiEndPoint);

        setPosts(res.data);
      };
      getPosts();
    }
  }, []);
  if (status == "Accepted") {
    color = "text-green-500";
  } else {
    color = "text-red-500";
  }
  console.log(posts);
  return (
    <div>
      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold">Notes</h3>
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
                    <div className="">
                      <input
                        className={`h-[10rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
                        type="text"
                        placeholder="Notes"
                        value={note}
                        onChange={(e) => setNotes(e.target.value)}
                      />
                    </div>
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
                      onClick={() => {
                        setShowModal(false);
                        // setNotes("asdasdasd");
                      }}
                    >
                      Save Notes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>
      <AccountHeader header="Manage Bookings" name="James Villarojo" />
      <div className="px-10 w-full">
        <div className="overflow-auto rounded-lg shadow  w-full ">
          <table className="w-full">
            <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
              <tr className="pt-0">
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  ID
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Booking Date
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Name
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Type of Meeting
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Insurance
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Actions
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Status
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-8 shadow-2xl leading-cust before:content-[''] before:text-[#f2f8ff]  ">
              {posts.map((post: any) => (
                <tr
                  key={post.id}
                  className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
                >
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                    {post.id}
                  </td>
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                    {post.consultationDate}
                  </td>
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                    {post.lead?.user.firstName + " " + post.lead?.user.lastName}
                  </td>
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                    {post.meetingType}
                  </td>
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                    {post.product?.name}
                  </td>
                  <td className="p-3 text-sm whitespace-nowrap ">
                    <div className="flex gap-2">
                      <button onClick={() => setStatus("Accepted")}>
                        <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                          <BsCheckCircle size="1.2rem" />
                        </div>
                      </button>

                      <button onClick={() => setStatus("Declined")}>
                        <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                          <MdOutlineDisabledByDefault size="1.2rem" />
                        </div>
                      </button>
                    </div>
                  </td>
                  <td
                    className={`p-3 text-sm tex-gray-700 whitespace-nowrap ${color}`}
                  >
                    {status}
                  </td>
                  <td className="p-3 text-sm tex-gray-700 whitespace-nowrap ">
                    <button
                      onClick={() => setShowModal(true)}
                      className="underline hover:text-blue-500 cursor-pointer"
                    >
                      view
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

BookingsPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
