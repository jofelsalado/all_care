import { UserLayout } from "../../layout/user_layout";
import { LeadLayout } from "../../lead/layout/lead_layout";
import { AccountHeader } from "../components/account_header";
import { AdvisorLayout } from "../layout/advisor_layout";
import { useEffect, useState } from "react";

interface FormData {
  date: string;
  name: string;
  email: string;
  income: string;
  contact: string;
  current: string;
  peak: string;
  operating_cost1: string;
  operating_cost2: string;
  operating_cost3: string;
  operating_cost4: string;
  operating_cost5: string;
  operating_cost6: string;
  operating_cost7: string;
  operating_cost8: string;
  investing_cost1: string;
  investing_cost2: string;
  investing_cost3: string;
  financing_cost1: string;
  financing_cost2: string;
  financing_cost3: string;
}

export default function ReportsPage() {
  const [form, setForm] = useState<FormData>({
    date: "",
    name: "",
    email: "",
    income: "",
    contact: "",
    current: "",
    peak: "",
    operating_cost1: "0",
    operating_cost2: "0",
    operating_cost3: "0",
    operating_cost4: "0",
    operating_cost5: "0",
    operating_cost6: "0",
    operating_cost7: "0",
    operating_cost8: "0",
    investing_cost1: "0",
    investing_cost2: "0",
    investing_cost3: "0",
    financing_cost1: "0",
    financing_cost2: "0",
    financing_cost3: "0",
  });

  const [statusOperating, setStatusOperating] = useState("");
  const [statusColorOperating, setStatusColorOperating] = useState("");
  const [statusInvesting, setStatusInvesting] = useState("");
  const [statusColorInvesting, setStatusColorInvesting] = useState("");
  const [statusFinancing, setStatusFinancing] = useState("");
  const [statusColorFinancing, setStatusColorFinancing] = useState("");

  let total_operating_cost =
    parseFloat(form.operating_cost1) +
    parseFloat(form.operating_cost2) +
    parseFloat(form.operating_cost3) +
    parseFloat(form.operating_cost4) +
    parseFloat(form.operating_cost5) +
    parseFloat(form.operating_cost6) +
    parseFloat(form.operating_cost7) +
    parseFloat(form.operating_cost8);
  let operating_monthly = total_operating_cost / parseFloat(form.income);
  let operating_limit = parseFloat(form.income) * 0.6;
  let operating_allocation = 0;
  let operating_exceeding = 0;

  let total_investing_cost =
    parseFloat(form.investing_cost1) +
    parseFloat(form.investing_cost2) +
    parseFloat(form.investing_cost3);
  let investing_monthly = total_investing_cost / parseFloat(form.income);
  let investing_minimum = 0.2 * parseFloat(form.income);
  let investing_amount = investing_minimum - total_investing_cost;

  let total_financing_cost =
    parseFloat(form.financing_cost1) +
    parseFloat(form.financing_cost2) +
    parseFloat(form.financing_cost3);

  let financing_monthly = total_financing_cost / parseFloat(form.income);
  let financing_limit = 0.2 * parseFloat(form.income);
  let financing_amount = 0;

  if (total_financing_cost > financing_limit) {
    financing_amount = total_financing_cost - financing_limit;
  } else {
    financing_amount = 0;
  }

  if (total_investing_cost < investing_minimum) {
    investing_amount = investing_minimum - total_investing_cost;
  } else {
    investing_amount = 0;
  }

  if (parseFloat(form.income) * 0.6 - total_operating_cost < 0) {
    operating_allocation = 0;
  } else {
    operating_allocation = parseFloat(form.income) * 0.6 - total_operating_cost;
  }

  if (total_operating_cost > operating_limit) {
    operating_exceeding = total_operating_cost - operating_limit;
  } else {
    operating_exceeding = 0;
  }

  const handleClick = () => {
    if (operating_exceeding > 0) {
      setStatusColorOperating("text-red-500");
      setStatusOperating("UNHEALTHY");
    } else {
      setStatusColorOperating("text-green-500");
      setStatusOperating("HEALTHY");
    }
    if (investing_amount > 0) {
      setStatusColorInvesting("text-red-500");
      setStatusInvesting("UNHEALTHY");
    } else {
      setStatusColorInvesting("text-green-500");
      setStatusInvesting("HEALTHY");
    }
    if (financing_amount > 0) {
      setStatusColorFinancing("text-red-500");
      setStatusFinancing("UNHEALTHY");
    } else {
      setStatusColorFinancing("text-green-500");
      setStatusFinancing("HEALTHY");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (
    isNaN(operating_monthly) ||
    isNaN(operating_limit) ||
    isNaN(operating_allocation) ||
    isNaN(investing_monthly) ||
    isNaN(investing_minimum) ||
    isNaN(financing_limit) ||
    isNaN(financing_monthly)
  ) {
    operating_monthly = 0;
    operating_limit = 0;
    operating_allocation = 0;
    investing_monthly = 0;
    investing_minimum = 0;
    financing_monthly = 0;
    financing_limit = 0;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AccountHeader header="Financial Calculator" name="James Villarojo" />

      <div className="w-full flex flex-col px-10">
        <div className="bg-slate-200 w-full shadow-2xl py-10 rounded-3xl flex flex-row justify-around items-center ">
          <div className="flex flex-wrap h-full justify-around items-start gap-10 w-full">
            <div className="flex flex-col gap-10 w-[12.9rem]">
              <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                <div className=" shrink-0">Date </div>
                <input
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
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
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
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
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
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
                  value={form.income}
                  onChange={(e) => setForm({ ...form, income: e.target.value })}
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
                  value={form.contact}
                  onChange={(e) =>
                    setForm({ ...form, contact: e.target.value })
                  }
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
                  value={form.current}
                  onChange={(e) =>
                    setForm({ ...form, current: e.target.value })
                  }
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
                  value={form.peak}
                  onChange={(e) => setForm({ ...form, peak: e.target.value })}
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
        <div className="flex flex-col justify-around gap-10 w-full mt-10 ">
          <div className="flex flex-row w-full shadow-2xl justify-around bg-blue-200 rounded-3xl p-10 items-center">
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
                      placeholder="Description #1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost </div>
                    <input
                      onChange={(e) => {
                        setForm({ ...form, operating_cost1: e.target.value });
                      }}
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
                      placeholder="Cost #1"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #2"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"></div>
                    <input
                      onChange={(e) => {
                        setForm({ ...form, operating_cost2: e.target.value });
                      }}
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
                      placeholder="Cost #2"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #3"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost3: e.target.value })
                      }
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
                      placeholder="Cost #3"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #4"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost4: e.target.value })
                      }
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
                      placeholder="Cost #4"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #5"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost5: e.target.value })
                      }
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
                      placeholder="Cost #5"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #6"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost6: e.target.value })
                      }
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
                      placeholder="Cost #6"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #7"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost7: e.target.value })
                      }
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
                      placeholder="Cost #7"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #8"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, operating_cost8: e.target.value })
                      }
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
                      placeholder="Cost #8"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">
                  Total: PHP {total_operating_cost.toLocaleString()}
                </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className={`${statusColorOperating} font-khulaXbold`}>
                    {statusOperating}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    value={operating_monthly}
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
                  <div className=" shrink-0">Recommended Limit</div>
                  <input
                    value={operating_limit.toLocaleString()}
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
                    value={operating_allocation.toLocaleString()}
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
                    value={operating_exceeding.toLocaleString()}
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

          <div className="flex flex-row w-full justify-around bg-blue-200 shadow-2xl rounded-3xl p-10 items-center">
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
                      placeholder="Description #1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost</div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, investing_cost1: e.target.value })
                      }
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
                      placeholder="Cost #1"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #2"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, investing_cost2: e.target.value })
                      }
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
                      placeholder="Cost #2"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #3"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, investing_cost3: e.target.value })
                      }
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
                      placeholder="Cost #3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">
                  Total: PHP {total_investing_cost.toLocaleString()}
                </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div className={` font-khulaXbold ${statusColorInvesting}`}>
                    {statusInvesting}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    value={investing_monthly}
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
                  <div className=" shrink-0">Minimum Amount Needed</div>
                  <input
                    value={investing_minimum.toLocaleString()}
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
                  <div className=" shrink-0">Amount Not Invested</div>
                  <input
                    value={investing_amount.toLocaleString()}
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

          <div className="flex flex-row w-full justify-around bg-blue-200 shadow-2xl rounded-3xl p-10 items-center">
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
                      placeholder="Description #1"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0">Cost </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, financing_cost1: e.target.value })
                      }
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
                      placeholder="Cost #1"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #2"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({ ...form, financing_cost2: e.target.value })
                      }
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
                      placeholder="Cost #2"
                    />
                  </div>
                </div>
                <div className="flex flex-row w-[27rem] gap-5">
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
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
                      placeholder="Description #3"
                    />
                  </div>
                  <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                    <div className=" shrink-0"> </div>
                    <input
                      onChange={(e) =>
                        setForm({
                          ...form,
                          financing_cost3: e.target.value,
                        })
                      }
                      disabled={false}
                      type="number"
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
                      placeholder="Cost #3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10justify-center items-center">
              {" "}
              <div className="flex flex-row justify-between items-center w-full">
                <div className="">
                  Total: PHP {total_financing_cost.toLocaleString()}
                </div>
                <div className="flex gap-2 justify-center items-center text-center">
                  <div className="">Status: </div>
                  <div
                    className={`text-red-500 font-khulaXbold ${statusColorFinancing}`}
                  >
                    {statusFinancing}{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-10 gap-10">
                {" "}
                <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
                  <div className=" shrink-0">% of Monthly Income </div>
                  <input
                    value={financing_monthly}
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
                    value={financing_limit.toLocaleString()}
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
                    value={financing_amount.toLocaleString()}
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
            onClick={handleClick}
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
