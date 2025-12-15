import React from "react";
import { Header } from "@/components/layer/Header"
export const ContactInfo = () => {
     return (<div className="flex gap-3 flex-col p-[28px]">
            <div>
                <Header/>
            </div>
            <div className="flex flex-col gap-2 ">
                <div className="flex gap-1 font-semibold text-sm">
                    Email <span className="text-[#E14942]">*</span>
                </div>
                <input className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300" type="text" placeholder="Your email" />
            </div>
           <div className="flex flex-col gap-2">
                <div className="flex gap-1 font-semibold text-sm">
                    Phone number <span className="text-[#E14942]">*</span>
                </div>
                <input className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300" type="text" placeholder="Your phone number" />
            </div>
             <div className="flex flex-col gap-2">
                <div className="flex gap-1 font-semibold text-sm">
                    Password <span className="text-[#E14942]">*</span>
                </div>
                <input className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300" type="text" placeholder="Your password" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex gap-1 font-semibold text-sm">
                  Confirm password <span className="text-[#E14942]">*</span>
                </div>
                <input className="flex pl-4 w-104 h-11 border-[1px] border-[#cbd5e1] rounded -md focus:outline-none focus:ring-blue-300" type="text" placeholder="Confirm password" />
            </div>
        </div>
        );
}