import { ContactInfo, PrivateInfo, ProfileImage, Success } from "@/components";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [step, setStep] = useState(0);
  const [dob, setDob] = useState(2);
  const handleCont = () => {
    if (step === 2 && !dob) return;
    setStep(step + 1);
  };
  const handlePrev = () => {
    setStep(step - 1);
  };

  const Container = [PrivateInfo, ContactInfo, ProfileImage, Success][step];
  return (
    <div className="min-h-screen flex  items-center justify-center bg-[#f4f4f4] p-7 font-semibold ">
      <div className="bg-white  flex gap-7 flex-col rounded-md w-120 text-center">
        <Container setDob={setDob} />
        <div
          className={`flex gap-2 
                    justify-center items-center p-7 ${
                      step === 0 ? "mt-31" : "mt-10"
                    }`}
        >
          {step > 0 && (
            <button
              onClick={handlePrev}
              className="justify-center items-center rounded-md flex border  border-[#cbd5e1] h-11 w-32 hover:bg-[#d6d8db]"
            >
              <ChevronLeft className="w-6 h-6" />
              Back
            </button>
          )}
          <button
            onClick={handleCont}
            className="bg-black h-11 w-104 flex justify-center items-center font-medium rounded-md text-white 
                    "
          >
            Continue
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
