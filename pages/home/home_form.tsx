import { InputForm } from "./components/input_form";
import pic1 from "../../public/images/Picture2.png";
import Image from "next/image";

export function HomeForm() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className=" w-[70rem] flex flex-col gap-20 mt-10 p-10">
        <Image src={pic1} className="object-cover h-auto w-full" alt="..." />
      </div>
    </div>
  );
}
