import React from "react";

function About() {
  return (
    <div className="grid place-items-center container mx-auto px-4 py-8 text-large" id="Assembly">
      <h2 className="text-5xl font-bold text-center mb-12 text-blue-900">About Us</h2>
      
      <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8 px-4 py-4">
        
        <div className="w-full md:w-1/2 h-[70vh] bg-cover bg-center rounded-lg shadow-lg" 
          style={{ backgroundImage: `url(/dadiro.jpg)` }} 
        ></div>

        <div className="w-full md:w-1/2">
          <p className="text-base md:text-xl leading-relaxed text-gray-700">
            At <span className="font-bold text-blue-900">Ophela Services</span>, we're not just about furniture — we're about the stories that unfold in your living spaces.
            Our journey began with a vision to offer <span className="font-bold">personalized furniture assembly</span> and craftsmanship that turns houses into homes. 
            Rooted in tradition yet innovating for today, we're proud to serve Columbus and its surrounding communities with dedication and attention to detail.
          </p>
          
          <p className="mt-4 text-base md:text-xl leading-relaxed text-gray-700">
            From <span className="font-bold text-blue-900">cherished family heirlooms</span> to contemporary pieces, each project at Ophela Services is more than a task — it's our passion. 
            Let us help you bring your vision to life, one piece at a time.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
