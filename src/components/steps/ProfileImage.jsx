import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "../utils/validators";
import { Button } from "@/components/ui/Button";
import { Trash, Image } from 'lucide-react';
import { Success } from "./Success"; // Success component-г import хийж байна

export const ProfileImage = ({
  step,
  totalSteps,
  handlePrev,
  handleClick,
  formErrors,
  formValues,
  setFormValues,
  setFormErrors,
}) => {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState(formValues.profile || null);
  const [isDragging, setIsDragging] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // success state

  // Photo Click
  const handleBrowserClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  // Image handler
  const handleImageChange = (event) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const uploadedImage = files[0];
    const newImageUrl = URL.createObjectURL(uploadedImage);
    setImageUrl(newImageUrl);

    if (typeof setFormValues === "function") {
      setFormValues(prev => ({ ...prev, profile: newImageUrl }));
    }

    if (formErrors.profile) {
      setFormErrors(prev => ({ ...prev, profile: "" }));
    }
  };

  // Date handler
  const handleDateChange = (event) => {
    const { name, value } = event.target;

    if (typeof setFormValues === "function") {
      setFormValues(prev => ({ ...prev, [name]: value }));
    }

    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Clear image
  const clearImage = (e) => {
    e.stopPropagation();
    if (inputRef.current) inputRef.current.value = "";
    setImageUrl(null);
    if (typeof setFormValues === "function") {
      setFormValues(prev => ({ ...prev, profile: "" }));
    }
  };

  // Drag & Drop
  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    if (!files || files.length === 0) return;

    const uploadedImage = files[0];
    const newImageUrl = URL.createObjectURL(uploadedImage);
    setImageUrl(newImageUrl);

    if (typeof setFormValues === "function") {
      setFormValues(prev => ({ ...prev, profile: newImageUrl }));
    }

    if (formErrors.profile) {
      setFormErrors(prev => ({ ...prev, profile: "" }));
    }

    setIsDragging(false);
  };

  const handleDragOver = (event) => { event.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);

  // Submit handler
  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
    if (!isValid) {
      setFormErrors(errors);
      setIsSuccess(false);
      return;
    }

    setIsSuccess(true);  // Амжилттай submit бол success-г true болгоно
    handleClick();        // Next step буюу дараагийн action
  };

  // Хэрвээ success бол Success component-г харуулна
  if (isSuccess) {
    return <Success />;
  }

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

      {/* Date input */}
      <div className="flex flex-col gap-3">
        <div className="flex gap-1 font-semibold text-sm">
          Date of birth <span className="text-red-500">*</span>
        </div>
        <div>
          <input
            type="date"
            name="birthDay"
            value={formValues.birthDay}
            onChange={handleDateChange}
            className="border border-[#cbd5e1] rounded-lg w-full h-11 p-3"
          />
        </div>
        {formErrors.birthDay && (
          <p className="text-red-500 text-[14px] flex font-normal">
            {formErrors.birthDay}
          </p>
        )}
      </div>

      {/* Profile image */}
      <div>
        <div className="flex gap-1 font-semibold text-sm">
          Profile image <span className="text-red-500">*</span>
        </div>
        {formErrors.profile && (
          <p className="text-red-500 text-[14px] flex font-normal">
            {formErrors.profile}
          </p>
        )}
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onClick={handleBrowserClick}
        onDragLeave={handleDragLeave}
        className="relative h-45 w-full bg-gray-100 rounded-md flex flex-col justify-center items-center border border-black-300 cursor-pointer"
        style={{ border: isDragging ? "4px dashed gray" : "1px solid transparent" }}
      >
        <div className="w-7 h-7 rounded-full flex justify-center items-center overflow-hidden bg-white">
          <Image className="w-3.5 h-3.5" />
        </div>
        {imageUrl ? (
          <img src={imageUrl} alt="image" className="w-full h-full object-cover text-center font-bold text-sm" />
        ) : (
          <div className="text-sm">Browser or Drag and Drop</div>
        )}
        <div
          onClick={clearImage}
          className="w-6 h-6 absolute top-2 right-2 hidden ml-auto cursor-pointer flex justify-center items-center bg-white rounded-full"
        >
          <Trash className="w-4 h-4  text-red-500" />
        </div>
      </div>
      <input type="file" hidden ref={inputRef} onChange={handleImageChange} />

      <Button
        totalSteps={totalSteps}
        step={step}
        handlePrev={handlePrev}
        handleClick={handleClick}
        handleSubmit={handleSubmit}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </motion.div>
  );
};
