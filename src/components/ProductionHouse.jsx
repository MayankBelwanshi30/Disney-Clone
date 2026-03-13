// import React from 'react';
import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/videos/disney.mp4";
import marvelV from "../assets/videos/marvel.mp4";
import nationalGV from "../assets/videos/national-geographic.mp4";
import pixarV from "../assets/videos/pixar.mp4";
import starwarV from "../assets/videos/star-wars.mp4";

const ProductionHouse = () => {
    const productionHouseList = [
        { id: 1, image: disney, video: disneyV },
        { id: 2, image: marvel, video: marvelV },
        { id: 3, image: nationalG, video: nationalGV },
        { id: 4, image: pixar, video: pixarV },
        { id: 5, image: starwar, video: starwarV }
    ];

    return (
        <div className="flex flex-wrap justify-evenly gap-2 md:gap-6 p-2 mt-5 px-5 md:px-10">
            {productionHouseList.map((item) => (
                <div key={item.id} className="relative w-15 md:w-50 h-11 md:h-30 border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 shadow-xl shadow-gray-800 overflow-hidden">
                    <video 
                        src={item.video} 
                        autoPlay loop muted playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover opacity-0 hover:opacity-50 transition-opacity duration-300" 
                    />
                    <img 
                        src={item.image} 
                        alt="production-house" 
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProductionHouse;
