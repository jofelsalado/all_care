import {
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import Link from "next/link";
import Router from "next/router";
import router, { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import React from "react";

export function AccountTable() {
  const [showModal, setShowModal] = React.useState(false);
  const [posts, setPosts] = useState<any>([]);
  const apiEndPoint = "http://localhost:5555/api/v1/accounts";
  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPoint);
      setPosts(response.data.data);
      console.log(response.data.data);
    };
    getPosts();
  }, []);

  const handleDelete = async (post: any) => {
    await axios.delete(apiEndPoint + "/" + post.id);
    setPosts(posts.filter((p: any) => p.id !== post.id));
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="mb-0 xl:w-[15rem] order-2">
          <div className="rounded-full input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              // onChange={updateInput}
              type="search"
              className="outline-none form-control relative flex-auto min-w-0 block w-full px-3 py-0 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button
              // onClick={() => setShowFilter(true)}
              className="btn px-6 py-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 rounded-fullhover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                className="w-4"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <Link href={"./account/add"} className="order-1">
          <div className="cursor-pointer text-white scale-100 hover:scale-125 duration-300 flex justify-center items-center gap-1 font-khulareg bg-blue-600 py-1 px-3 rounded-3xl text-center">
            ADD
            <IoIosAddCircleOutline size="1.2rem" />
          </div>
        </Link>
      </div>
      {posts.map((post: any) => (
        <>
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-[80rem] h-[40rem] my-6 mx-auto overflow-auto ">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Confirm Deletion
                      </h3>
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
      ))}
      <div className="overflow-auto rounded-lg shadow  w-full">
        <table className="w-full">
          <thead className=" bg-[#f2f8ff] border-2 border-gray-200 ">
            <tr className="pt-10">
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ID
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ROLE
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                EMAIL
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                USERNAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                PASSWORD
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                FIRST NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                MIDDLE NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                LAST NAME
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                CONTACT NO.
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ADDRESS
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                BIRTH
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                GENDER
              </th>

              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ACTIONS
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
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.userTypeId}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">{post.email}</td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.username}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.password}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.firstName}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.middleName}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.lastName}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.contactNo}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.address}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">
                  {post.birthdate}
                </td>
                <td className="p-3 text-sm whitespace-nowrap">{post.gender}</td>

                <td className="p-3 text-sm whitespace-nowrap">
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        router.push(
                          {
                            pathname: "./account/update",
                            query: {
                              id: post.id,
                              firstName: post.firstName,
                              middleName: post.middleName,
                              lastName: post.lastName,
                              gender: post.gender,
                              contactNo: post.contactNo,
                              address: post.address,
                              birthdate: post.birthdate,
                              email: post.email,
                              username: post.username,
                              password: post.password,
                              userTypeId: post.userTypeId,
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

                    <button onClick={() => setShowModal(true)}>
                      <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                        <RiDeleteBinLine size="1.2rem" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Toaster />
      </div>
    </div>
  );
}
