"use client";

import {
  PrivateInfo,
  ContactInfo,
  ProfileImage,
  Success,
} from "@/components/steps";
import { useEffect, useState } from "react";
import { initialValues } from "@/constants/initial";

const initialErrors = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  image: "",
};

const Home = () => {
  // Step
  const [step, setStep] = useState(0);

  // Form values + errors
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialErrors);

  const totalSteps = 4;

  // 🔹 Load from localStorage (SAFE)
  useEffect(() => {
    const savedValues = localStorage.getItem("formValues");
    const savedStep = localStorage.getItem("step");

    if (savedValues) {
      setFormValues({
        ...initialValues,
        ...JSON.parse(savedValues),
      });
    }

    if (savedStep !== null) {
      setStep(Number(savedStep));
    }
  }, []);

  // 🔹 Save formValues
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  // 🔹 Save step
  useEffect(() => {
    localStorage.setItem("step", String(step));
  }, [step]);

  // Step +
  const handleClick = () => {
    if (step < totalSteps - 1) {
      setStep((prev) => prev + 1);
    }
  };

  // Step -
  const handlePrev = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  // Input change
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const Container = [PrivateInfo, ContactInfo, ProfileImage, Success][step];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f4f4] p-7 font-semibold">
      <div className="bg-white flex gap-7 flex-col rounded-md w-120 text-center">
        <Container
          totalSteps={totalSteps}
          step={step}
          handlePrev={handlePrev}
          handleClick={handleClick}
          handleChange={handleChange}
          formValues={formValues}
          formErrors={formErrors}
          setFormErrors={setFormErrors}
          setFormValues={setFormValues}
          setStep={setStep}
        />
      </div>
    </div>
  );
};

export default Home;
