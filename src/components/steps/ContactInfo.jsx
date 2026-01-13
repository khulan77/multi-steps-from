import React, { useState } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { Button } from "@/components/ui/Button";
import { validateStepTwo } from "../utils/validators";
import { Eye, EyeOff } from "lucide-react";
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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <Header />

      <div className="flex flex-col gap-2 pt-7">
        <label className="font-semibold text-sm flex">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          value={formValues.email}
          onChange={handleChange}
          className="pl-4 h-11 border border-gray-300 rounded-md"
          placeholder="Your email"
        />
        <p className="text-red-500 text-sm flex">{formErrors.email}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-sm flex">
          Phone number <span className="text-red-500">*</span>
        </label>
        <input
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          className="pl-4 h-11 border border-gray-300 rounded-md"
          placeholder="Your phone number"
        />
        <p className="text-red-500 text-sm flex">{formErrors.phoneNumber}</p>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-semibold text-sm flex">
          Password <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formValues.password}
            onChange={handleChange}
            className="pl-4 pr-10 h-11 border border-gray-300 rounded-md w-full"
            placeholder="Password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <p className="text-red-500 text-sm flex">{formErrors.password}</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-sm flex">
          Confirm password <span className="text-red-500">*</span>
        </label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            className="pl-4 pr-10 h-11 border border-gray-300 rounded-md w-full"
            placeholder="Confirm password"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <p className="text-red-500 text-sm flex">{formErrors.confirmPassword}</p>
      </div>

      <Button
        totalSteps={totalSteps}
        step={step}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  );
};
