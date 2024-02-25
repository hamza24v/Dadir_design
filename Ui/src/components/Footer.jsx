import React from 'react';
import backgroundImage from '../assets/whitebackground.webp'; // Adjust the path if necessary
import { HOURS, SERVICES, SERVICE_AREAS } from '../constants/footer_data';

function Footer() {
  return (
    <div className='flex flex-col text-center footer bg-cover bg-center' style={{ backgroundImage: `url(${backgroundImage})` }}>
         <div >
            <h3 className='text-xl font-semibold mb-2'>Dadir Design</h3>
            <p>Columbus, OH</p>
            <p>(614) 377-9722</p>
            <p>Ophela.helps@gmail.com</p>
            <p>ⓒ All Rights Reserved</p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 p-8 text-black' style={{ fontFamily: 'Roboto' }}>
           
            <div>
                <h3 className='text-xl font-semibold mb-2'>Service Areas</h3>
                {SERVICE_AREAS.map((area, idx) => (
                    <p key={idx}>{area}</p>
                ))}
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-2'>Services</h3>
                {SERVICES.map((service, idx) => (
                    <p key={idx}>{service}</p>
                ))}
            </div>
            <div>
                <h3 className='text-xl font-semibold mb-2'>Hours</h3>
                {HOURS.map((hour, idx) => (
                    <p key={idx}>{hour}</p>
                ))}
            </div>
        </div>
        <footer className="p-4 ">
            <div className="justify-between items-center">
                <div>Copyright © 2024 Dadir Designs</div>
            </div>
        </footer>
    </div>
  );
}

export default Footer;
