import { PrivateInfo, ContactInfo } from "@/components/steps";
import { useState } from "react";
import { initialValues } from "@/constants/initial"


const Home = () => {
  const [step, setStep] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);

  const [dob, setDob] = useState(2);
  const handleCont = () => {
    if (step === 2 && !dob) return;
    if (step < Container.length - 1) {
      setStep(step + 1);
    }
  };
  const handlePrev = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFormErrors((previous) => ({ ...previous, [name]: "" }));
    setFormValues((previous) => ({ ...previous, [name]: value }));
  };
  const Container = [PrivateInfo, ContactInfo][step];


  return (
    <div className="min-h-screen flex  items-center justify-center bg-[#f4f4f4] p-7 font-semibold ">
      <div className="bg-white  flex gap-7 flex-col rounded-md w-120 text-center">
  
        
        <Container 
         handleChange={handleChange}
            formValues={formValues}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
            step={step}
            // stepsLength={steps.length}
            handlePrev={handlePrev}
            handleCont={handleCont}
        />
      </div>
    </div>
  );
};
export default Home;
