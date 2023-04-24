import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";
import router, { useRouter } from "next/router";

export default function NotifactionPage() {
  const [posts, setPosts] = useState<any>([]);
  const router = useRouter();
  const apiEndPoint = "http://localhost:5555/api/v1/products";
  useEffect(() => {
    const getPosts = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  }, []);

  const handleDelete = async (post:any)=> {
    await axios.delete(apiEndPoint + "/" + post.id);
    setPosts(posts.filter((p: any)=> p.id !== post.id));
    setShowModal(false);
  }
  const [showModal, setShowModal] = React.useState(false);
 

  return (
    <div className="pl-10 pr-28">
      
      <Toaster />
      <AccountHeader header="Insurance Products" name="James Villarojo" />
      <Link href={"./add-products"} className="order-1">
        <div className="mb-5 cursor-pointer text-white scale-100 hover:scale-125 duration-300 flex justify-center items-center gap-1 font-khulareg bg-blue-600 py-1 px-3 rounded-3xl text-center w-[7rem]">
          ADD
          <IoIosAddCircleOutline size="1.2rem" />
        </div>
      </Link>
      <div className="overflow-auto rounded-lg shadow  w-full ">
        <table className="w-full">
          <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
            <tr className="pt-10">
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                PRODUCT ID
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                PRODUCT NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                INSURANCE PRODUCT LINK
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                TYPE OF INSURANCE
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                DESCRIPTION
              </th>
      
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => (
              <tr key={post.id}>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  {post.id}
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  {post.name}
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  {post.url}
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  {post.type}
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  {post.description}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        router.push(
                          {
                            pathname: "./update-products",
                            query: {
                              id: post.id,
                              type: post.type,
                              url: post.url,
                              name: post.name,
                              description: post.description,
                              sku: "N/A",
                              quotation: "N/A",
                              status: "N/A",
                              meetingType: "N/A",
                            },
                          },
                          "./update"
                        );
                      }}
                    >
                      <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                        <AiOutlineEdit size="1.2rem" />
                      </div>
                    </button>

                    <button
                      onClick={() => setShowModal(true)}
                    >
                      <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                        <RiDeleteBinLine size="1.2rem" />
                      </div>
                    </button>
                  </div>
                </td>
                <>
                {showModal ? (
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                      <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Confirm Deletion</h3>
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
                           <h1>Delete the data?</h1>
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
                              onClick={() => handleDelete(post)}
                            >
                              Confirm
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                ) : null}
              </>
              </tr>
              
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
  );
}

NotifactionPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
