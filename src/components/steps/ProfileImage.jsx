import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "../utils/validators";
import { Button } from "@/components/ui/Button";
import { Trash } from 'lucide-react';
import { Image } from 'lucide-react';

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
  
//Photo Click
  const handleBrowserClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  //Photo 
  const handleUploudImage = (file) => {
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);

    setFormValues((pervious) => ({ ...pervious, profile: imageUrl }));
    console.log("setFormValues:", setFormValues);

  };

  const handleChanges = (event) => {
    const uploadedImage = Array.from(event.target.files).at(0);

    const imageUrl = URL.createObjectURL(uploadedImage);
    setImageUrl(imageUrl);

    setFormValues((pervious) => ({ ...pervious, profile: imageUrl }));
    // handleUploudImage(uploadedImage);
  };

  //Photo Clear Button
  const clearImage = (e) => {
  e.stopPropagation(); // container click-ийг дарангуйлж орохгүй
  inputRef.current.value = "";
  setImageUrl(null);
  setFormValues((previous) => ({ ...previous, profile: "" }));
};

  const handleDrop = (event) => {
    event.preventDefault();
    // const uploadedImage = Array.from(event.dataTransfer.files).at(0);
    // handleUploudImage(uploadedImage);
    // setIsDragging(false);
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
            onChange={handleChanges}
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
          className="relative h-45 w-full bg-gray-100 rounded-md flex  flex-col justify-center items-center border border-black-300 cursor-pointer"
          style={{
            border: isDragging ? "10px dashed aqua" : "2px solid transparent",
          }}
        >  
        <div className="w-7 h-7 rounded-full flex  justify-center items-center overflow-hidden bg-white"><Image className="w-3.5 h-3.5"/></div>  
          {imageUrl ? (
            <img src={imageUrl} alt="image"  className="w-full h-full object-cover text-center font-bold text-sm" />
          ) : (
            <div className="text-sm ">Browser or Drag and Drop</div>
          )}
          <div onClick={clearImage} className="w-6 h-6 absolute top-2 right-2 hidden ml-auto cursor-pointer flex justify-center items-center bg-white rounded-full">
              <Trash className="w-4 h-4 text-red-500" />
          </div>
        </div>
        <input type="file" hidden ref={inputRef} onChange={handleChanges} />
      </div>
      <div>
        <Button
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          formValues={formValues}
          setFormValues={setFormValues}
        />
      </div>
    </motion.div>
  );
};
