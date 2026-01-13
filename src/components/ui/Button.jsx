import { ChevronRight,ChevronLeft  } from "lucide-react";

export const Button = ({ step, totalSteps, handlePrev, handleSubmit }) => {
  // Form-ийн зөвхөн 3 алхамыг тоолох
  const displayStep = step + 1 > 3 ? 3 : step + 1;

  return (
    <div className="flex justify-between mt-20 gap-4">
      {step > 0 && (
        <button
          type="button"
          onClick={handlePrev}
          className="px-4 py-2 bg-white flex text-black border border-gray-300 rounded-md"
        >   <ChevronLeft />
          Back
        </button>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        className="px-4 py-2 w-full  bg-black flex justify-center items-center text-white rounded-md"
      >
        {step === 2 ? "Continue" : "Continue"}{" "}
        <span className="ml-2 text-l font-semibold">
          {displayStep}/3
        </span>
        <ChevronRight className="ml-2 w-5 h-5" />
      </button>
    </div>
  );
};
