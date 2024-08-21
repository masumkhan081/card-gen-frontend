"use client"
import React, { useRef } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';

const CardPage = () => {
    const cardPictureRef = useRef(null);

    const handleDownload = () => {
        const element = cardPictureRef.current;
        if (!element) return;

        html2canvas(element, {
            backgroundColor: null,
        }).then((canvas) => {
            const dataUrl = canvas.toDataURL('image/png');

            const link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'card-picture.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((err) => {
            console.error('Error capturing the image:', err);
        });
    };

    return (
        <div className="relative flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center gap-[20px] w-full h-full">
            <div className="lg:sticky lg:top-0 flex flex-col justify-center items-center lg:w-1/3 md:w-full xl:w-1/3 h-full p-6">
                <SearchBox />
                <div
                    id='card-picture'
                    ref={cardPictureRef}
                    className="relative w-[296.34px] h-[385px] bg-transparent mt-6"
                    style={{
                        backgroundImage: 'url(/Rarity-Gallery/2.webp)',
                        backgroundSize: 'cover', // Ensures the background image covers the entire div
                        backgroundPosition: 'center', // Centers the image
                    }}
                >
                    
                    <p className="absolute top-20 left-10 text-white">gghdf</p>
                </div>

                <button onClick={handleDownload} className="mt-4 p-2 bg-selection-color text-white rounded">
                    Download
                </button>
            </div>
            <div className="lg:w-2/3 md:w-full xl:w-2/3 h-full p-6">
                <Tab tabs={[
                    { name: 'General', content: <MainForm /> },
                    { name: 'Card Settings', content: <p>This is the content for Tab 2</p> }
                ]} />
            </div>
        </div>
    );
};

export default CardPage;
