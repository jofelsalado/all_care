import Image from "next/image";
import Link from "next/link";
import { AiOutlineBell } from "react-icons/ai";
import pic3 from "../../../public/images/pic3.jpg";
export function AccountHeader({ header, img, name }: any) {
  return (
    <div className="w-full p-10">
      <div className="flex justify-between items-between ">
        <div className="font-khulareg text-3xl text-gray-700 flex justify-center items-center">
          {header}
        </div>
        <div className="flex gap-5 justify-center items-center mr-10">
          <div className="block mb-2 text-xl font-medium text-gray-900  font-khulabold">
            {name}
          </div>
          <div className="flex justify-center items-center">
            <AiOutlineBell size="1.5rem" />
          </div>
          <Link
            className="flex justify-center items-center"
            href={"./view-profile"}
          >
            <Image src={pic3} className="rounded-full w-[3rem] " alt="Avatar" />
          </Link>
        </div>
      </div>
    </div>
  );
}
