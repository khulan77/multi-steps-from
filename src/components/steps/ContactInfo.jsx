import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { Button } from "@/components/ui/Button";
import { validateStepTwo } from "../utils/validators";

export const ContactInfo = ({
  step,
  totalSteps,
  handlePrev,
  handleChange,
  handleClick,
  formValues,
  formErrors,
  setFormErrors,
}) => {
  const handleSubmit = () => {
    const { errors, isValid } = validateStepTwo(formValues);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    handleClick();
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
          Email <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="email"
          placeholder="Your email"
          onChange={handleChange}
        />
        <p
          className="text-red-500 
       flex text-[14px] font-normal"
        >
          {formErrors.email}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Phone number <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="phoneNumber"
          placeholder="Your phone number"
          onChange={handleChange}
        />
        <p className="text-red-500 flex text-[14px] font-normal">
          {formErrors.phoneNumber}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Password <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="password"
          placeholder="Your password"
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.password}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-1 font-semibold text-sm">
          Confirm password <span className="text-[#E14942]">*</span>
        </div>
        <input
          className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300"
          type="text"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
        />
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.confirmPassword}
        </p>
      </div>
      <div>
        <Button
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleSubmit={handleSubmit}
          handleClick={handleClick}
        />
      </div>
    </motion.div>
  );
};
