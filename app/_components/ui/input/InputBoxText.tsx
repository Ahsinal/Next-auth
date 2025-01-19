import React, { useState } from "react";

interface InputBoxPropsText {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputBoxText: React.FC<InputBoxPropsText> = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      className="h-10 w-full rounded-md border border-gray-300 p-2 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-blue-200"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
};
