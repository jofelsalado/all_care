import { InputForm } from "./components/input_form";

export function HomeTitle() {
  return (
    <div className="w-full ">
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-4 ">
          <h1 className="font-khulabold text-5xl text-center text-gray-700 tracking-[0.3rem] flex justify-center items-center px-20">
            Do you want to find the best insurance for you?
          </h1>
          <h1 className="font-khulareg text-xl text-center text-gray-700 tracking-[0.1rem]">
            Get the best care from All Care
          </h1>
        </div>
      </div>
    </div>
  );
}
