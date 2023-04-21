import { isNamedExportBindings } from "typescript";

export function InputField({ name, placeholder }: any) {
  return (
    <div className="w-[20rem] grow xl:grow-0">
      <label
        htmlFor="birth"
        className="block mb-2 text-sm font-medium text-black pl-2"
      >
        {name}
      </label>
      <input
        className={` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}
