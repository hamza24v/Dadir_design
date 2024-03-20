import React, { useState } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

function ServiceCard({ title, description }) {
    const [isExpanded, setIsExpanded] = useState(false);

 

    return (
        <div
            className="group w-64 h-auto p-5 m-2 bg-orange-300 shadow-md hover:shadow-xl rounded-lg cursor-pointer transition-all duration-300 ease-in-out transform"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
        >
            <div className={`flex flex-col h-full justify-between ${isExpanded ? 'expanded' : ''}`}>
                <div className="flex items-center justify-start">
                    <KeyboardArrowUpIcon
                        className={`transition-transform ease-in-out duration-700 ${isExpanded ? 'rotate-180' : 'rotate-0'}`}
                    />
                    <h3 className="text-xl font-semibold">{title}</h3>
                </div>
                <div className={`transition-all ease-in-out duration-700 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="mt-2">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCard;
