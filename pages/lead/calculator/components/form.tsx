export function FormRow({ label, desc, py, status }: any) {
  return (
    <div className="flex flex-col gap-2 justify-center items-start w-[30rem]">
      <div className=" shrink-0">{label} </div>
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
  );
}
