import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepOne } from "../utils/validators";

export const PrivateInfo = ({ handleChange, formValues, formErrors, setFormErrors}) => {
const handleSubmit = () => {
  const  { errors, isValid } = validateStepOne(formValues);
  setFormErrors(errors)
};

  return (
    <motion.div
      initial="enter"
      animate="active"
      exit="exit"
      variants={animationVariant}
      transition={{ duration: 0.5 }}
      className="flex gap-3 flex-col p-7"
    >
      <div>
        <Header />
      </div>
      <div className="flex flex-col gap-2 pt-7">
        <div className="flex gap-1 font-semibold text-sm">
          Frist Name <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="fristName"
          placeholder="Your frist name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Last Name <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="lastName"
          placeholder="Your last name"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Username <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="userName"
          placeholder="Your username"
          onChange={handleChange}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </motion.div>
  );
};
