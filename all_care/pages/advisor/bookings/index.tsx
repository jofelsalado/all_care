import { AccountHeader } from "../components/account_header";
import "tw-elements";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsCheckCircle } from "react-icons/bs";
import { AdvisorLayout } from "../layout/advisor_layout";

export default function BookingsPage() {
  return (
    <div>
      <AccountHeader header="Manage Bookings" />
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
                  Type
                </th>
                <th className="grow pl-3 pr-3 pt-2 pb-2 text-sm font-semibold tracking-wide text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y-8 shadow-2xl leading-cust before:content-[''] before:text-[#f2f8ff]  ">
              <tr
                className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
              >
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  1
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  05/06/99
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  AJ Ybanerz
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Health
                </td>
                <td className="p-3 text-sm whitespace-nowrap ">
                  <div className="flex gap-2">
                    <button>
                      <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                        <BsCheckCircle size="1.2rem" />
                      </div>
                    </button>

                    <button>
                      <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                        <RiDeleteBinLine size="1.2rem" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
              <tr
                className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
              >
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  2
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  05/06/99
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Mae Mabilog
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Health
                </td>
                <td className="p-3 text-sm whitespace-nowrap ">
                  <div className="flex gap-2">
                    <button>
                      <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                        <BsCheckCircle size="1.2rem" />
                      </div>
                    </button>

                    <button>
                      <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                        <RiDeleteBinLine size="1.2rem" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
              <tr
                className={`bg-white hover:bg-gradient-to-r from-[#588cfc] to-pink-400  hover:text-white scale-100 laptop:scale-100 laptop:hover:scale-105 duration-300`}
              >
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  3
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  05/06/99
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  James Villarojo
                </td>
                <td className="p-3 text-sm tex-gray-700 whitespace-nowrap">
                  Health
                </td>
                <td className="p-3 text-sm whitespace-nowrap ">
                  <div className="flex gap-2">
                    <button>
                      <div className="cursor-pointer hover:text-blue-500 scale-100 hover:scale-125 duration-300">
                        <BsCheckCircle size="1.2rem" />
                      </div>
                    </button>

                    <button>
                      <div className="cursor-pointer hover:text-red-500 scale-100 hover:scale-125 duration-300">
                        <RiDeleteBinLine size="1.2rem" />
                      </div>
                    </button>
                  </div>
                </td>
              </tr>
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
