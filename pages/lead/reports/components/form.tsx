export function FormRow({ label, desc, py }: any) {
  return (
    <div className="flex flex-row gap-5 justify-between items-center w-[30rem]">
      <div className="">{label} </div>
      <input
        type="text"
        className={`
        form-control
        block
        w-[24rem]
        px-3
        ${py}
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
        placeholder={desc}
      />
    </div>
  );
}
