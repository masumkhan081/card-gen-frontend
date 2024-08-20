"use client";

import React, { useState } from "react";
import CustomButton from "./shared/CustomButton";
import CustomText from "./shared/CustomText";
import EnhancedTitle from "./shared/EnhancedTitle";

export default function CardPage() {
  //
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex min-h-screen flex-col gap-4 items-center border-2 lg:p-18 sm:p-8 md:p-12 p-4  ">
      <EnhancedTitle title="Card-Gen" />

      <div className="flex items-center  w-fit h-[32px]">
        <div className="w-[200px] md:w-[300px] lg:w-[450px] h-full">
          <CustomText chgHandler={(e) => setSearchTerm(e.target.value)} val={searchTerm} />
        </div>
        <div className="h-full">
        
          <CustomButton txt="Search" clkHandler={()=>alert(searchTerm)} />
        </div>
      </div>

      <div className="">{searchTerm}</div>
    </div>
  );
}
