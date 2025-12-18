import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Button = ({ handlePrev, handleCont, step }) => {
  // const [dob, setDob] = useState(2);
  // const handleCont = () => {
  //   if (step === 2 && !dob) return;
  //   if (step < steps.length - 1) {
  //     setStep(step + 1);
  //   }
  // };
  // const handlePrev = () => {
  //   if (step > 0) setStep(step - 1);
  // };
  return (
    <div className="flex gap-2">
      <button
        onClick={handlePrev}
        className="justify-center items-center rounded-md flex border  border-[#cbd5e1] h-11 w-32 hover:bg-[#d6d8db]"
      >
        <ChevronLeft className="w-6 h-6" />
        Back
      </button>
      <button
        onClick={handleCont}
        className="bg-black h-11 w-104 flex justify-center items-center font-medium rounded-md text-white"
      >
        Continue
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
};
