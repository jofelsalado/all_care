import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { UserLayout } from "../../layout/user_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

export default function NotifactionPage() {
  const [posts, setPosts] = useState<any>([]);
  const [error, setError] = React.useState<any>([]);
  const apiEndPoint = "http://localhost:5555/api/v1/products";
   useEffect(()=> {
    const getPosts = async () => {
      const {data: res} = await axios.get(apiEndPoint);
      setPosts(res);
    };
    getPosts();
  },[]);
  return (
    <div className="pl-10 pr-28">
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
              {/* <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ADVISOR
              </th>
              <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                ACTION
              </th> */}
            </tr>
          </thead>
          <tbody>
            {posts.map((post: any) => 
              <tr key={post.id}>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.id}</td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.name}</td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.url}</td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.type}</td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.description}</td>
                {/* <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.id}</td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">{post.id}</td> */}
              </tr>
              )}
          </tbody>
          {/* <tr
            // key={item.id}
            className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
          >
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">1</td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Medicare
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Insular
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Face-to-Face
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Online
            </td>
            <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
              Mabilog
            </td>
            <td className="p-3 text-sm whitespace-nowrap">
              <div className="flex gap-2">
                <button onClick={() => {}}>
                  <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                    <AiOutlineEdit size="1.2rem" />
                  </div>
                </button>

                <button
                  onClick={() => {
                    // deleteUser(item.id);
                  }}
                >
                  <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                    <RiDeleteBinLine size="1.2rem" />
                  </div>
                </button>
              </div>
            </td>
          </tr> */}
        </table>
      </div>
    </div>
  );
}

NotifactionPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
