import React, { useState } from "react";
import QuoteDialog from "./QuoteDialog";
import { intro_se } from "../constants";
import Button from "@mui/material/Button";

function Hero() {
  const [showQouteForm, setShowQuoteForm] = useState(false);

  return (
    <section className="flex flex-col justify-center text-center space-y-5 items-center bg-gradient-to-b from-blue-50 to-blue-150 py-16">
    <h2 className="text-8xl font-bold text-center tracking-wide text-gray-800 drop-shadow-lg">Ophela Services</h2>
    <p className="text-xl lg:w-1/3 md:w-full text-center text-gray-700 leading-relaxed">
      {intro_se}
    </p>
    <Button
      variant="contained"
      onClick={() => setShowQuoteForm(true)}
      className="bg-salmon-500 text-white hover:bg-salmon-600 transition ease-in-out duration-300 px-6 py-3 text-lg rounded"
      size="large"
      color="salmon"
    >
      Book an appointment
    </Button>
    <QuoteDialog
      open={showQouteForm}
      handleClose={() => setShowQuoteForm(false)}
    />
  </section>
  
  );
}

export default Hero;
