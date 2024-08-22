"use client"
import React, { useEffect, useRef, useState } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CardSettings from './shared/CardSettings';
import Icon from '../../public/icons/farthrow.svg'


const CardPage = () => {

  ////////// test

  const small_diamond = 'data:image/svg+xml,%3Csvg%20width%3D%2228.6%22%20height%3D%2226.48%22%20viewBox%3D%220%200%202445%202274%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M596.5%2025L32%20890L1217.5%202235.5L2413.5%20890L1875%2025H596.5Z%22%20fill%3D%22white%22%20stroke%3D%22%23FF0000%22%20stroke-width%3D%2250%22/%3E%3C/svg%3E';

  ///////////


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


          <div className="h-[26px] w-[29px] flex flex-col gap-3 absolute top-[220px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div style={{
              backgroundImage: 'url(/icons/block.svg)',
              backgroundSize: 'cover', // Ensures the background image covers the entire div
              backgroundPosition: 'center', // Centers the image
             
            }}></div>
          </div>

        </div>

        <button onClick={handleDownload} className="mt-4 p-2 bg-selection-color text-white rounded">
          Download
        </button>
      </div>
      <div className="lg:w-2/3 md:w-full xl:w-2/3 h-full pt-6 pb-6 pr-2 pl-2">
        <Tab tabs={[
          { name: 'General', content: <MainForm /> },
          { name: 'Card Settings', content: <CardSettings /> }
        ]} />
      </div>
    </div>
  );
};

export default CardPage;
