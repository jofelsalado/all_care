import { InputForm } from "./components/input_form";

export function HomeForm() {
  return (
    <div className="flex justify-center items-center w-full">
      <div className=" w-[50rem] flex flex-col gap-20 mt-10 p-10">
        <div>
          <h1 className="font-khulareg text-xl text-gray-700 tracking-[0.1rem]">
            Ready to Inquire?
          </h1>
        </div>
        <div className="flex flex-wrap w-full  gap-y-10 gap-x-5 justify-between items-between">
          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="First Name*"
              holder="e.g Juan"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Last Name*"
              holder="e.g Dela Cruz"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Contact Number*"
              holder="e.g 09******"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Email*"
              holder="e.g juandelacruz@gmail.com"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Province*"
              holder="Select a Province"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="City*"
              holder="Select a City"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Date of Birth*"
              holder="DD/MM/YY"
            />
          </div>

          <div className="w-[20rem] grow xl:grow-0">
            <InputForm
              label="Gender*"
              holder="Select a Gender"
            />
          </div>

          <div className="w-[20rem grow gap-y-10 gap-x-5 flex flex-col">
            <div>
              <InputForm
                label="Inquiry*"
                holder="Select a Inquiry"
                className="grow"
              />
            </div>
            <div className="">
              <InputForm
                label="Additional Inquiry*"
                holder="Select a Inquiry"
                height="h-[5rem]"
              />
            </div>
          </div>
        </div>
        <div className=" w-full flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center mb-4">
              <input
                id="default-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-sm font-medium text-gray-900 "
              >
                I Agree to the Terms and Condition of All Care Business
              </label>
            </div>
            <div className="w-[10rem]">
              <button
                type="button"
                className="text-white bg-blue-700 text-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-full"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
