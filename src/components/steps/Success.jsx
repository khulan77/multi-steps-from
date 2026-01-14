"use client";

import { useEffect } from "react";

export const Success = () => {
  useEffect(() => {
    // Success дээр ормогц хадгалалтыг цэвэрлэнэ
    localStorage.removeItem("step");
    localStorage.removeItem("formValues");
  }, []);

  return (
    <div className="flex h-48.25 flex-col items-start font-semibold justify-start p-7 gap-2">
      <div className="w-15 h-15">
        <img src="pinecone.svg.png" alt="" />
      </div>

      <div className="text-[#202124] text-[26px] font-semibold">
        You're All Set 🔥
      </div>

      <div className="text-lg text-[#8e8e8e]">
        We have received your submission. Thank you!
      </div>
    </div>
  );
};
