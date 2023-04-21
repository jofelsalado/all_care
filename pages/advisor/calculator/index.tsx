import { UserLayout } from "../../layout/user_layout";
import { LeadLayout } from "../../lead/layout/lead_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";

import { FormRow } from "./components/form";

export default function ReportsPage() {
  return (
    <div>
      <AccountHeader header="Financial Calculator" name="James Villarojo" />
      <div className="w-full flex flex-col ">
        <div className="bg-slate-200 w-full  py-10 rounded-lg flex flex-row justify-around items-center ">
          <div className="flex flex-wrap h-full justify-around items-start gap-10 w-full">
            <div className="flex flex-col gap-10 w-[12.9rem]">
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Date </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder="Date"
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Name </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Email </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Monthly Net Income </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 w-[12.9rem]">
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Contact Number </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Current Age </div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Peak Age</div>
                <input
                  disabled={false}
                  type="text"
                  className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-around gap-10 w-full mt-10 px-10">
          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Operating Activities</div>
              <div className="flex flex-col w-min mt-10 gap-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Description </div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost </div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-green-500 font-khulaXbold">HEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Recommended Limit </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Unused Allocation </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Amount Exceeding Limit </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Investing Activities</div>
              <div className="flex flex-col w-min mt-10 gap-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Description </div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost</div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-green-500 font-khulaXbold">HEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Minimum Amount Needed </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Amount Not Invested </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row w-full justify-around bg-blue-200 rounded-xl p-10 items-center">
            <div className="">
              <div>Financing Activities</div>
              <div className="flex flex-col w-min mt-10 gap-10">
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Description</div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost </div>
                    <input
                      disabled={false}
                      type="text"
                      className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                      id="exampleFormControlInput1"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <FormRow py="py-1.0" label="" />
                  <FormRow py="py-1.0" label="" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">Total: </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className="text-red-500 font-khulaXbold">UNHEALTHY </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Recommended Limit </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">Amount Exceeding Limit </div>
                  <input
                    disabled={true}
                    type="text"
                    className={`
        form-control
        block
      
        px-3
        py-1
        text-base
        font-normal
        text-gray-700
        bg-slate-200 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
  `}
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Calculate Now!
          </button>
          <div></div>
        </div>
      </div>
    </div>
  );
}

ReportsPage.getLayout = function getLayout(page: any) {
  return <AdvisorLayout>{page}</AdvisorLayout>;
};
