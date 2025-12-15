import { ContactInfo, PrivateInfo, ProfileImage, Success} from "@/components";
import { useState } from "react";

import { Header } from "@/components/layer/Header"

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
        <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-[28px]">
            <div className="bg-white pt-8vp-8 flex gap-7 flex-col rounded-md w-[480px] text-center">
                <Container setDob={setDob}/>
                <div className={`flex gap-2 
                    justify-center items-center p-[28px] ${step === 0 ? "mt-31" : "mt-10"}`}>
                    {step > 0 && (
                        <button onClick= {handlePrev} className="justify-center items-center rounded-md flex border  border-[#cbd5e1] h-11 w-32 ">Back</button>
                    )}
                    <button   onClick = {handleCont} className="bg-black h-11 w-[416px]  font-medium rounded-md text-white 
                    ">Continue</button>
                </div>
            </div>
        </div>
    );
};
export default Home;