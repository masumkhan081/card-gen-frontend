"use client";
import Image from 'next/image'
import React from 'react'
import html2canvas from 'html2canvas';




const CardPicture = () => {

    const handleDownload = () => {
        const element = document.getElementById('card-picture');
        html2canvas(element, {
            backgroundColor: null,
            scale: 2,
            logging: true,
        }).then((canvas) => {
            const link = document.createElement('a');
            link.download = 'card-picture.png';
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        });
    };


    return (
        <div className="relative pt-5 flex flex-col items-center">
            <div id='card-picture' className="relative bg-transparent">
                <Image

                    src="/Rarity-Gallery/2.webp"
                    alt="Player Image"
                    width={296.34}
                    height={385}
                />
                <p className="absolute top-20 left-10 text-white">gghdf</p>
            </div>

            <button onClick={handleDownload} className="mt-4 p-2 bg-selection-color text-white rounded">
                Download
            </button>
        </div>


    );
};

export default CardPicture
