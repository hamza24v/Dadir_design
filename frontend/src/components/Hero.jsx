import React, { useState } from "react";
import QuoteDialog from "./QuoteDialog";
import { intro_se } from "../constants";
import Button from "@mui/material/Button";

function Hero() {

  return (
    <section className="flex flex-col h-full justify-center text-center space-y-5 items-center py-16">
    <h2 className="text-8xl font-bold text-center tracking-wide text-gray-800 drop-shadow-lg">Ophela Services</h2>
    <p className="text-xl lg:w-1/3 md:w-full text-center text-gray-700 leading-relaxed">
      {intro_se}
    </p>
   
  </section>
  
  );
}

export default Hero;
