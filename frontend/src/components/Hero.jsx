import React from "react";
import { intro_se } from "../constants";
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../utils';

function Hero() {
  return (
    <section className="relative flex flex-col h-screen justify-center text-center items-center py-16 overflow-hidden">
     
      <div className="absolute inset-0 flex justify-center opacity-20 items-center">
        <div
          style={{
            backgroundImage: "url('/ophela_logo.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <h2 className="relative text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-800  to-cyan-400 drop-shadow-lg">
        Ophela Services
      </h2>

      <p className="relative text-xl lg:w-1/3 md:w-full text-center text-gray-700 leading-relaxed mt-5">
        {intro_se}
      </p>

      <NavLink to='/Shop' onClick={() => scrollToTop()}>
      <button
        className="relative mt-8 bg-blue-500 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg shadow-md"
      >
        Start Shopping
      </button>
      </NavLink>
    </section>
  );
}

export default Hero;
