import Link from "next/link";
import { AiOutlineCreditCard } from "react-icons/ai";

export function Card({
  name,
  address,
  type,
  price,
  client_types1,
  client_types2,
  client_types3,
  status,
}: any) {
  return (
    <div
      className={`bg-white w-[20rem] shadow-2xl rounded-xl flex flex-col justify-center gap-4 items-center px-4 py-4 scale-95 ${status}`}
    >
      <div className="flex flex-row justify-around items-center w-full">
        <div className="bg-pink-500 w-[6.5rem] h-[6.5rem] rounded-full"></div>
        <div className="flex flex-col">
          <div>{name}</div>
          <div>{address}</div>
        </div>
      </div>
      <div className=" flex flex-row w-full justify-around items-center">
        <div className="bg-slate-200 w-[7rem] h-[6rem] rounded-xl  flex flex-col items-center justify-start pt-3">
          <div className="text-sm text-center font-khulabold">Type:</div>
          <div className="text-sm text-center  h-full flex justify-center items-center font-khulalight w-min">
            {type}
          </div>
        </div>

        <div className="bg-slate-200 w-[7rem] h-[6rem] rounded-xl  flex flex-col items-center justify-start pt-3">
          <div className="text-sm text-center font-khulabold">Price:</div>
          <div className="text-sm text-center flex flex-row justify-center gap-1 items-center w-full  h-full font-khulalight">
            <div>
              <AiOutlineCreditCard size={30} />
            </div>
            <div>{price}</div>
          </div>
        </div>
      </div>
      <div className="bg-slate-200 w-[16rem]  flex flex-col justify-start gap-3 items-center py-5 rounded-xl">
        <div className=" font-khulabold">Client Types:</div>
        <div className="flex flex-col  h-full justify-center items-start gap-1 font-khulalight ">
          <div>{client_types1}</div>
          <div>{client_types2}</div>
          <div>{client_types3}</div>
        </div>
      </div>
      <Link
        href={""}
        className=" font-khulabold text-xs text-blue-500 underline pt-0"
      >
        View Profile
      </Link>
    </div>
  );
}
