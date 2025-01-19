import React from "react";

interface InputLabelWrapperProps {
  label: string;
  htmlFor?: string;
  children: React.ReactNode;
}
const InputLabelWrapper: React.FC<InputLabelWrapperProps> = ({
  label,
  htmlFor,
  children,
}) => {
  return (
    <div className="mb-4 w-full space-y-1">
      <label htmlFor={htmlFor} className=" text-gray-700">
        {label}
      </label>
      {children}
    </div>
  );
};

export default InputLabelWrapper;
