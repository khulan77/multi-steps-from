import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "../utils/validators";
import { initialValues } from "@/constants/initial";
import { Button } from "../ui/Button";

export const ProfileImage = () => {
  const inputRef = useRef();
  const [imageUrl, setImageUrl] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

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
      <div className="text-left text-sm font-medium pt-5">
        Date of birth
        <span className="text-red-500">*</span>
      </div>

      <input
        type="date"
        name="brithDay"
        onChange={{ handleChange }}
        className="border border-[#cbd5e1] rounded-lg h-11 p-3"
      />

      <div className="text-left text-sm font-medium pt-5">
        Profile image
        <span className="text-red-500">*</span>
      </div>
      <div className="">
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onClick={handleBrowserClick}
          onDragLeave={handleDragLeave}
          className="h-45 w-104 bg-gray-100 rounded-xl flex justify-center items-center "
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
        <Button />
      </div>
    </motion.div>
  );
};
