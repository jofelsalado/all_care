import Link from "next/link";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AccountHeader } from "../components/account_header";
import { LeadLayout } from "../layout/lead_layout";
import { Card } from "./components/card";
import { BiSortAlt2 } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { EmailClass } from "../../advisor/router-data/data";

export default function ViewAdvisorsPage({ label, desc, py }: any) {
  const [posts, setPosts] = useState<any>([]);
  // const [postsProd, setPostsProd] = useState<any>([]);
  const router = useRouter();
  // const apiEndPoint = "http://localhost:5555/api/v1/accounts";
  const apiEndPoint = "http://localhost:5555/api/v1/products";
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const response = await axios.get(apiEndPoint);
  //     setPosts(response.data.data);
  //   };
  //   getPosts();
  // }, []);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get(apiEndPoint);

      setPosts(response.data);
      // console.log(response.data);
      // console.log(posts);
    };
    getPosts();
  }, []);

  return (
    <div className="">
      <AccountHeader header="View Advisors" name="James Villarojo" />
      <div className=" w-full flex  justify-center items-center gap-4 p-10 md:flex-wrap border-t-2  ">
        <div className="w-full h-[3rem] flex flex-row justify-evenly items-center px-10 border-b-2 pb-10">
          <form className="w-[15rem]">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 "
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          <select
            id="countries"
            className="bg-gray-50 border w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected>Type of Insurance</option>
            <option value="US">PhilHealth</option>
            <option value="CA">Medicare</option>
          </select>

          <select
            id="countries"
            className="bg-gray-50 border w-[15rem] border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          >
            <option selected>Type of Meeting</option>
            <option value="US">Face to Face</option>
            <option value="CA">Zoom</option>
            <option value="CA">Google Meet</option>
          </select>
          <button className="flex justify-center items-center  ">
            <div className="mr-4">RATING</div>
            <BiSortAlt2 size={30} />
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Get Match
          </button>
        </div>
        <div className=" flex-1 flex-wrap flex w-min justify-evenly items-evenly">
          {posts.map((post: any) => (
            <Card
              key={post.id}
              name={post.adviserData.user.firstName}
              meeting_type={post.meetingType}
              insurance_product={post.name}
              currStatus={post.status}
              productId={post}
            />
          ))}
          {/* {posts
            .filter((post: any) => post.userTypeId == 3)
            .map((post: any) => (
              <Card
                key={post.id}
                name={post.firstName}
                address={post.address}
                type={post.advisor}
                currStatus={"postprod.status"}
                client_types1={"postprod.typeInsurance"}
              />
            ))} */}
        </div>
      </div>
    </div>
  );
}

ViewAdvisorsPage.getLayout = function getLayout(page: any) {
  return <LeadLayout>{page}</LeadLayout>;
};
