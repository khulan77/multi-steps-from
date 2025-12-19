import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "../utils/validators";
import { initialValues } from "@/constants/initial";
import { Button } from "@/components/ui/Button";

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
  const [imageUrl, setImageUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  const handleUploudImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);

    setFormValues((pervious) => ({ ...pervious, profile: imageUrl }));
  };

  const handleChange = (event) => {
    const uploadedImage = Array.from(event.target.files).at(0);
    handleUploudImage(uploadedImage);
  };
  const clearImage = () => {
    inputRef.current.value = "";
    setImageUrl("");

    setFormValues((pervious) => ({ ...pervious, profile: "" }));
  };
  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedImage = Array.from(event.dataTransfer.files).at(0);
    handleUploudImage(uploadedImage);
    setIsDragging(false);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);

  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
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
      <div className="flex flex-col  gap-3">
        <div className="flex gap-1 font-semibold text-sm">
          Date of birth
          <span className="text-red-500">*</span>
        </div>
        <div>
          <input
            type="date"
            name="birthDay"
            onChange={handleChange}
            className="border border-[#cbd5e1] rounded-lg w-full h-11 p-3"
          />
        </div>
        <p className="text-red-500 text-[14px] flex font-normal">
          {formErrors.birthday}
        </p>
      </div>
      <div>
        <div className="flex gap-1 font-semibold text-sm">
          Profile image
          <span className="text-red-500">*</span>
        </div>
      </div>
      <div className="">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleBrowserClick}
          onDragLeave={handleDragLeave}
          className="h-45 w-full bg-gray-100 rounded-xl flex justify-center items-center "
          style={{
            border: isDragging ? "10px dashed aqua" : "2px solid transparent",
          }}
        >
          {imageUrl ? (
            <img src={imageUrl} alt="image" width={100} height={100} />
          ) : (
            "Browser or Drag and Drop"
          )}
          <div onClick={clearImage} style={{ width: 50, heigth: 50 }}>
            cc
          </div>
        </div>
        <input type="file" hidden ref={inputRef} onChange={handleChange} />
      </div>
      <div>
        <Button
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
        />
      </div>
    </motion.div>
  );
};
