import { useState } from "react";

export function InputForm({ label, holder, height, handleform }: any) {
  return (
    <div>
      <div>
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
        <input
          type="text"
          id="first_name"
          className={`${height} bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 `}
          placeholder={holder}
          required
        />
      </div>
    </div>
  );
}
