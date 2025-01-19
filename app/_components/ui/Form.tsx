"use client";
import React, { useState } from "react";
import InputLabelWrapper from "./input/InputLabelWrapper";
import { InputBoxText } from "./input/InputBoxText";
import { Button } from "./button";
import InputBoxPAssword from "./input/InputBoxPassword";

const Form = () => {
  const [formData, setFormData] = useState<{
    fname: string;
    password: string;
  }>({
    fname: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div className="w-full max-w-lg min-h-[500px] bg-white rounded-md p-4 ">
      <h4 className="text-sm text-gray-700 mb-4">Dynamic Form</h4>
      <form className="w-full " onSubmit={handleSubmit}>
        <InputLabelWrapper label="First Name" htmlFor="first name">
          <InputBoxText
            type="text"
            name="fname"
            placeholder="Enter Your First Name"
            value={formData.fname}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <InputLabelWrapper label="Password " htmlFor="password">
          <InputBoxPAssword
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
        </InputLabelWrapper>
        <Button>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
