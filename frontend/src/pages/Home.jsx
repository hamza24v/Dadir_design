import React from "react";
import Services from "../components/Services";
import Galleries from "./Galleries";
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";

function Home() {
  return (
    <main className="flex flex-col items-center justify-between  overflow-hidden">
      <div className="flex items-center justify-center h-screen w-full  bg-gradient-to-t from-blue-100 to-blue-150">
        <Hero />
      </div>
      <Services />
      <Testimonials />
      <Galleries showPreview={true} />
    </main>
  );
}

export default Home;
