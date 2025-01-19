import { Eye, EyeClosed, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface InputBoxPasswordProps {
  type: string; // Current value of the input
  placeholder?: string; // Placeholder text
  name?: string; // Input name attribute
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputBoxPAssword: React.FC<InputBoxPasswordProps> = ({
  type,
  placeholder,
  name,
  value,
  onChange,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  //toggle password visibility
  const toggleVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };
  return (
    <div className="relative w-full">
      <input
        type={isPasswordVisible ? "text" : "password"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-10 w-full  rounded-md border border-gray-300 p-2 placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring focus:ring-blue-200"
        required
      />
      {isPasswordVisible ? (
        <EyeOff
          className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500"
          onClick={toggleVisibility}
          aria-label="Hide password"
        />
      ) : (
        <Eye
          className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-500"
          onClick={toggleVisibility}
          aria-label="Hide password"
        />
      )}
    </div>
  );
};

export default InputBoxPAssword;
