import React from 'react';
import { HOURS, SERVICES, SERVICE_AREAS } from '../constants/footer_data';
import dadir_design from '../assets/dadir_design.png'

function Footer() {
    return (
        <footer className="w-auto text-center bg-orange-300 text-gray-800">
            <div className=" px-4 py-4 flex flex-col md:flex-row justify-even md:justify-between">
                <div className='flex flex-row px-4 h-25'>
                    <div>
                        <img className='w-20 mx-auto md:mx-0 min-w-[5rem]' src={dadir_design} alt='dadir design' />
                    </div>
                    <div className='ml-5 text-left font-semibold'>
                        <p className='font-semi-bold' >Columbus, OH</p>
                        <p>(614) 377-9722</p>   
                        <p>Ophela.helps@gmail.com</p>
                    </div>
                </div>

                <div className="mt-4 md:mt-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    <div>
                        <h3 className='text-xl text-left font-semibold mb-2 border-b-2 border-black'>Service Areas</h3>
                        {SERVICE_AREAS.map((area, idx) => (
                            <p className='text-left' key={idx}>{area}</p>
                        ))}
                    </div>

                    <div>
                        <h3 className='text-xl text-left font-semibold mb-2 border-b-2 border-black'>Services</h3>
                        {SERVICES.map((service, idx) => (
                            <p className='text-left' key={idx}>{service}</p>
                        ))}
                    </div>

                    <div>
                        <h3 className='text-xl text-left font-semibold mb-2 border-b-2 border-black'>Hours</h3>
                        {HOURS.map((hour, idx) => (
                            <p className='text-left' key={idx}>{hour}</p>
                        ))}
                    </div>
                </div>
            </div>
            <hr className=" border-t border-orange-400" />
            <div className="bg-orange-300 text-center p-4 text-sm">
                © All Rights Reserved - Dadir Design
            </div>
        </footer>
    );
}

export default Footer;
