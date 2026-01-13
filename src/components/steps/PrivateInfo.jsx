import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepOne } from "../utils/validators";
import { Button } from "@/components/ui/Button";
// import { Success } from "./Success";
export const PrivateInfo = ({
  step,
  totalSteps,
  handlePrev,
  handleClick,
  handleChange,
  formValues,
  formErrors,
  setFormErrors,
}) => {

 const handleSubmit = () => {
  const { errors, isValid } = validateStepOne(formValues);
  if (!isValid) {
    setFormErrors(errors);
    return;
  }
  handleClick(); // validation амжилттай бол дараагийн step рүү шилжүүлэх
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
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-300 rounded -md focus:outline-none focus:ring-gray-100"
          type="text"
          name="fristName"
          value={formValues.fristName}
          placeholder="Your frist name"
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.fristName}
        </p>
      </div>
      <div className=" flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Last Name <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-300 rounded -md focus:outline-none focus:ring-gray-100"
          type="text"
          name="lastName"
          value={formValues.lastName}
          placeholder="Your last name"
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.lastName}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Username <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-gray-300 rounded-md focus:outline-none focus:ring-gray-100"
          type="text"
          name="userName"
          value={formValues.userName}
          placeholder="Your username"
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.userName}
        </p>
      </div>
      <div>
        <Button
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleClick={handleClick}
          onClick={handleSubmit}
          handleSubmit={handleSubmit}
        />
      </div>
    </motion.div>
  );
}; 