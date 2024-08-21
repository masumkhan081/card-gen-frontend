"use client"
import React from 'react'
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import html2canvas from 'html2canvas';
import Image from 'next/image';

const CardPage = () => {

  // Tab
  const tabs = [
    {
      name: 'General', content: <MainForm />
    },
    { name: 'Card Settings', content: <p>This is the content for Tab 2</p> }
  ];

  // Export image
  const handleDownload = () => {
    const element = document.getElementById('card-picture');
    html2canvas(element, {
      backgroundColor: null,
      scale: 3,  // Increase the scale factor for higher resolution
      logging: true,
      useCORS: true,  // Enable CORS if needed
    }).then((canvas) => {
      // Create a link to download the image
      const link = document.createElement('a');
      link.download = 'card-picture.png';
      link.href = canvas.toDataURL('image/png', 1.0);
      link.click();
    });
  };


  return (
    <div className="relative flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center gap-[20px] w-full h-full">
      <div className=" lg:sticky lg:top-0 flex flex-col justify-center items-center lg:w-1/3 md:w-full xl:w-1/3 h-full p-6 bg-white">
        <SearchBox />
        <div id='card-picture' className="relative w-[296.34px] h-[385px]">
          <Image
            src="/Rarity-Gallery/2.webp"
            alt="Player Image"
            width={296.34}
            height={385}
            layout="intrinsic"
          />
          <p className="absolute top-20 left-10 text-white">gghdf</p>
        </div>

        <button onClick={handleDownload} className="mt-4 p-2 bg-selection-color text-white rounded">
          Download
        </button>
      </div>
      <div className="lg:w-2/3 md:w-full xl:w-2/3 h-full p-6">
        <Tab tabs={tabs} />
      </div>
    </div>
  );
}

export default CardPage;
