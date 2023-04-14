import Link from "next/link";
import { GrStatusGoodSmall } from "react-icons/gr";

export function Card({
  name,
  address,
  type,
  currStatus,
  client_types1,
  client_types2,
  client_types3,
  status,
}: any) {
  var iconColor = "";

  if (currStatus == "ONLINE") {
    iconColor = "green";
  } else if (currStatus == "OFFLINE") {
    iconColor = "red";
  } else if (currStatus == "DEACTIVATED") {
    iconColor = "gray";
  }
  return (
    <div
      className={`bg-white w-[20rem] shadow-2xl rounded-xl flex flex-col justify-center gap-4 items-center px-4 py-4 scale-95 ${status}`}
    >
      <div className="flex flex-row justify-around items-center w-full">
        <div className="bg-pink-500 w-[6.5rem] h-[6.5rem] rounded-full"></div>
        <div className="flex flex-col">
          <div>{name}</div>
          <div>{address}</div>

          <div className="flex items-center mt-4">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-300 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
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
          <div className="text-sm text-center font-khulabold">Status:</div>
          <div className="text-sm text-center flex flex-row justify-center gap-1 items-center w-full  h-full font-khulalight">
            <div>
              <GrStatusGoodSmall size={20} color={iconColor} />
            </div>
            <div>{currStatus}</div>
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
        href={"./view-profile"}
        className=" font-khulabold text-xs text-blue-500 underline pt-0"
      >
        View Profile
      </Link>
    </div>
  );
}
