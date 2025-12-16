import React from "react";
import { Header } from "@/components/layer/Header";
import { motion } from "framer-motion";
import { animationVariant } from "@/constants/animation-variant";
export const ProfileImage = () => {
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
        onChange={(e) => setDob(e.target.value)}
        className="border border-[#cbd5e1] rounded-lg h-11 p-3"
      />

      <div className="text-left text-sm font-medium pt-5">
        Profile image
        <span className="text-red-500">*</span>
        <div className="bg-red-100 w-106 h-45 rounded-lg "></div>
      </div>
    </motion.div>
  );
};
