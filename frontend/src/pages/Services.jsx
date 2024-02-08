// Import React and Tailwind CSS
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

function Services() {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        // Add a scroll listener to trigger animations when the element is in view
        const handleScroll = () => {
            const servicesElement = document.getElementById('services');
            const position = servicesElement.getBoundingClientRect();

            // Check if the element is within the viewport
            if (position.top >= 0 && position.bottom <= window.innerHeight) {
                setAnimate(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`container mx-auto px-4 py-8 text-large ${animate ? 'animate-fadeInUp' : ''}`} id="services">
            <h2 className="text-3xl font-bold text-center mb-6">Services</h2>
            <p className="text-base text-left md:text-lg leading-relaxed text-gray-700 text-large text-left">
                Say goodbye to the battle of wills against a pile of planks, screws, and what looks like instructions from a long-lost language. <span className="text-indigo-600">🛠️✨ Welcome to the land of hassle-free furniture assembly!</span> Imagine this: no more squinting at hieroglyphic manuals or playing hide and seek with 'allegedly included' screws.
                Enter our <span className="font-bold">Furniture Assembly service</span> - your new superhero in a tool belt. We're the maestros of the allen wrench, the wizards with the screwdriver, and we turn a box of baffling bits into your dream piece with the swish of our magical tools. 🎩✨
                <br></br><br></br>
                Gone are the days of DIY disasters and near-tear experiences. Our pros are like a GPS for those confusing assembly steps; they navigate the road of rods and rails with the finesse of a seasoned explorer. They're here to safeguard your manicure and your sanity - because why turn your living room into a testing ground for patience and thumb strength?
                Booking with us? It's like pressing the fast-forward button. 🔄 
                <br></br><br></br>
                Sit back, sip on your favorite beverage, and watch the magic unfold. Before you know it, voilà, your chic coffee table stands proud, and that bookshelf? It's practically strutting its shelves in style.
                Why wrestle with wrenches when you can jazz up your day with the perfect symphony of efficiency and expertise? When it's time to bring in the next piece of furniture flair to your home, just holler. We'll bring the tools, the talent, and the triumphant high-fives when we cross the finish line together. 👏
                
                and step into a world where your furniture assembles as if by magic - all you have to do is a point, and poof, it's done!
            </p>
            <button className="mt-4 bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300 ease-in-out">
                    Book your Furniture Assembly service now
            </button>
        </div>
    );
}

export default Services;
