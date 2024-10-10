import React from "react";
import { HOURS, SERVICES, SERVICE_AREAS } from "../constants";

function Footer() {
  return (
    <footer className="w-full text-center bg-blue-100 text-gray-800 mt-auto relative bottom-0">
      <div className="px-4 py-4 flex flex-col md:flex-row justify-even md:justify-between">
        <div className="flex flex-row px-4 h-25">
          <div className="bg-slate-900 rounded-full h-20">
            <img
              className="w-20 mx-auto md:mx-0 min-w-[5rem]"
              src="./ophela_logo.png"
              alt="ophela services"
            />
          </div>
          <div className="ml-5 text-lg text-left font-semibold">
            <p className="font-semi-bold">Columbus, OH</p>
            <p>(614) 377-9722</p>
            <p>Ophela.helps@gmail.com</p>
          </div>
        </div>

        <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <div>
            <h3 className="text-lg text-left font-semibold mb-2 border-b-2 border-black">
              Service Areas
            </h3>
            {SERVICE_AREAS.map((area, idx) => (
              <p className="text-left text-lg" key={idx}>
                {area}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-lg text-left font-semibold mb-2 border-b-2 border-black">
              Services
            </h3>
            {SERVICES.map((service, idx) => (
              <p className="text-left text-lg" key={idx}>
                {service}
              </p>
            ))}
          </div>

          <div>
            <h3 className="text-lg text-left font-semibold mb-2 border-b-2 border-black">
              Hours
            </h3>
            {HOURS.map((hour, idx) => (
              <p className="text-left text-lg" key={idx}>
                {hour}
              </p>
            ))}
          </div>
        </div>
      </div>
      <hr className="border-t border-blue-300" />
      <div className="bg-blue-100 text-center p-4 text-sm">
        © All Rights Reserved - Ophela Services
      </div>
    </footer>
  );
}

export default Footer;
