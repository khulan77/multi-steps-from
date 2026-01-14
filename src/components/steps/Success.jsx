"use client";

import { useEffect } from "react";
import Image from "next/image";

export const Success = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    localStorage.removeItem("step");
    localStorage.removeItem("formValues");
  }, []);

  return (
    <div className="flex  flex-col font-semibold p-7 gap-2">
      <div className="w-15 h-15">
        <Image
          src="/pinecone.svg.png"
          alt="success"
          width={60}
          height={60}
        />
      </div>
        
      <div className="text-[#202124] text-[26px] flex font-semibold">
        You're All Set 🔥🔥🔥
      </div>

      <div className="text-lg  flex text-[#8e8e8e]">
        We have received your submission. Thank you!
      </div>
      <button
      className="flex text-[#8e8e8e]"
       onClick={() => {
          localStorage.removeItem("step");
          localStorage.removeItem("formValues");
          window.location.reload();
         
        }}
      >
        Start again
      </button>


    </div>
  );
};
