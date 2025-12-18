import { ChevronLeft, ChevronRight, Container } from "lucide-react";
import { useState } from "react";
import { initialValues } from "@/constants/initial"



export const Button = ({ step, stepsLength, handlePrev, handleCont }) => {
  return (
    <div className="flex gap-2 justify-center items-center p-7">
      {step > 0 && step < stepsLength && (
        <button
          onClick={handlePrev}
          className="flex items-center gap-1 border border-[#cbd5e1] h-11 w-32 rounded-md hover:bg-[#d6d8db]"
        >
          <ChevronLeft className="w-6 h-6" /> Back
        </button>
      )}

      <button
        onClick={handleCont}
        className="bg-black h-11 w-104 flex justify-center items-center font-medium rounded-md text-white"
      >
        Continue <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};