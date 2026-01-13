import React, { useState, useRef } from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
import { validateStepThree } from "../utils/validators";
import { Button } from "@/components/ui/Button";
import { Trash, Image } from "lucide-react";

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
  const inputRef = useRef(null); // ✅ зөв ref
  const [imageUrl, setImageUrl] = useState(formValues.profile || "");
  const [isDragging, setIsDragging] = useState(false);

  // Файл сонгох
  const handleBrowserClick = () => {
    inputRef.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);

    // formValues-д хадгалах
    setFormValues((prev) => ({ ...prev, profile: url }));
    setFormErrors((prev) => ({ ...prev, profile: "" }));
  };

  // Date input
  const handleDateChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Image clear
  const clearImage = (e) => {
    e.stopPropagation();
    if (inputRef.current) inputRef.current.value = "";
    setImageUrl("");
    setFormValues((prev) => ({ ...prev, profile: "" }));
  };

  // Drag & drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImageUrl(url);
    setFormValues((prev) => ({ ...prev, profile: url }));
    setIsDragging(false);
  };

  const handleSubmit = () => {
    const { errors, isValid } = validateStepThree(formValues);
    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    handleClick(); // Success рүү шилжүүлэх
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

      <div className="flex flex-col gap-3">
        <label className="font-semibold text-sm flex">
          Date of birth <span className="text-red-500 ">*</span>
        </label>
        <input
          type="date"
          name="birthDay"
          value={formValues.birthDay}
          onChange={handleDateChange}
          className="border border-gray-300 rounded-lg h-11 p-3"
        />
        {formErrors.birthDay && (
          <p className="text-red-500 text-sm flex">{formErrors.birthDay}</p>
        )}
      </div>

      {/* Image */}
      <label className="font-semibold text-sm flex">
        Profile image <span className="text-red-500">*</span>
      </label>
      {formErrors.profile && (
        <p className="text-red-500 text-sm flex ">{formErrors.profile}</p>
      )}

      <div
        onClick={handleBrowserClick}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        className="relative h-45 bg-gray-100 rounded-md flex justify-center items-center cursor-pointer"
        style={{ border: isDragging ? "3px dashed gray" : "1px solid #e5e7eb" }}
      >
        {imageUrl ? (
          <img src={imageUrl} className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center text-sm">
            <Image className="w-5 h-5 mb-2" />
            Browse or Drag & Drop
          </div>
        )}

        {imageUrl && (
          <div
            onClick={clearImage}
            className="absolute top-2 right-2 bg-white rounded-full p-1"
          >
            <Trash className="w-4 h-4 text-red-500" />
          </div>
        )}
      </div>

      <input type="file" hidden ref={inputRef} onChange={handleImageChange} />

      <Button
        totalSteps={totalSteps}
        step={step}
        handlePrev={handlePrev}
        handleSubmit={handleSubmit}
      />
    </motion.div>
  );
};
