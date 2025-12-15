import React from "react"; 
import { Header } from "@/components/layer/Header";
export const ProfileImage = () => {
   
  return ( <div className="flex gap-3 flex-col p-[28px]">
    <div><Header/></div>
   <div className="text-left text-sm font-medium">Date of birth
    <span className="text-red-500">*</span>
   </div>

   <input type="date" 
  onChange={(e) => setDob(e.target.value)} className="border border-[#cbd5e1] rounded-lg h-11 p-3"/>
  
   <div className="text-left text-sm font-medium">Profile image
     <span className="text-red-500">*</span>
   </div>
  </div> )
}