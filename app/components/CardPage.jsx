"use client"
import React, { useRef } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CardSettings from './shared/CardSettings';

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



          <div className="flex flex-col gap-3 absolute top-[190px] left-[14.8px] bg-transparent">
            <svg width="28.6" height="26.48" viewBox="0 0 2445 2274" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M596.5 25.5L32 890.5L1217.5 2236L2413.5 890.5L1875 25.5H596.5Z" fill="rgb(77, 29, 209)" stroke="rgb(250, 250, 250)" stroke-width="100" />
            </svg>
          </div>

          <div className="flex flex-col gap-3 absolute top-[220px] left-[14.8px] bg-transparent">
            <svg width="28.6" height="26.48" viewBox="0 0 2445 2274" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M596.5 25L32 890L1217.5 2235.5L2413.5 890L1875 25H596.5Z" fill="white" stroke="#FF0000" stroke-width="50" />


              <svg
                x="0%" y="0%"
                width="1400" height="1400"
                viewBox="0 0 248.02 283.86"
                class="svg-icon svg-icon--size-sm"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                style={{transform:'translate(-50%, -50%)'}}>

                <path d="M41.64,280.12c-3.99-8.42-7.9-16.55-11.72-24.73-3.42-7.33-6.94-14.62-9.97-22.11-.86-2.12-.92-5.13-.12-7.27,9.28-24.62,18.9-49.12,28.21-73.72,6.54-17.28,25.09-23.89,41.07-14.74,14.68,8.41,29.2,17.27,46.42,21.99,1.48-8.31,2.96-16.37,4.33-24.44,1.47-8.62,2.61-17.3,4.32-25.86,1.53-7.67,5.4-14.08,11.45-19.27,18.67-16.03,37.21-32.22,55.81-48.33,4.12-3.57,8.29-7.09,12.46-10.67,3.23,4.96,2.11,12.73-3.07,19.34-8.3,10.58-16.85,20.97-25.32,31.42-7.12,8.79-14.33,17.5-21.39,26.34-3.77,4.72-1.5,10.24-1.56,15.41-.2,16.47,1.17,33.1-.71,49.36-2.25,19.47-18.84,31.53-38.37,28.97-14.01-1.83-27.76-5.67-41.58-8.79-5.78-1.3-11.45-3.08-17.18-4.59-2.74-.72-5.11-.5-6.89,2.25-7.01,10.84-14.25,21.55-21.11,32.48-.98,1.56-.81,4.2-.43,6.19,2.72,14.08,5.72,28.1,8.33,42.19,.25,1.33-1.28,3.71-2.63,4.46-2.97,1.66-6.35,2.59-10.36,4.12Z" fill="currentColor"></path>
                <path d="M217.06,200.59c-18.04,1.99-35.9,3.95-55.03,6.05,4.43-3.6,7.84-6.18,11.04-9,7.76-6.87,10.25-16,10.14-25.89-.04-3.22,1.08-3.7,3.66-3.61,14.14,.49,28.28,.93,42.42,1.39,10.8,.36,19.49,9.53,18.69,20.79-1.49,21.06-2.67,42.14-3.91,63.21-.48,8.14-.75,16.28-1.17,24.42-.09,1.71-.41,3.41-.72,5.9-6.74-4.08-10.91-9.01-12.21-15.83-4.15-21.89-8.08-43.83-12.12-65.75-.11-.6-.53-1.15-.78-1.69Z" fill="currentColor"></path>
                <path d="M30.92,137.1c-19.8-.11-29.49-11.85-30.82-27.14-1.61-18.44,16.79-32.79,35.09-27.45,10.97,3.2,21.26,8.11,28.94,17.18,8.45,9.98,2.92,23.21-4.78,28.71-8.63,6.15-18.14,8.47-28.43,8.7Z" fill="currentColor"></path>
                <path d="M121.77,.09c20.82-.9,37.44,17.16,37.33,37.48-.12,21.56-17.4,37.51-37.72,37.56-21.96,.05-37.8-18.63-37.64-38.13C83.91,18.43,100.37-1.48,121.77,.09Zm-4.76,52.69c-.11-2.73-7.21-10.35-10.2-10.66-6.1-.64-12.67,4.24-13.57,10.08-.45,2.95,8.37,13.8,11.86,13.48,3.05-.28,6.64-1.85,8.67-4.06,1.96-2.14,2.23-5.83,3.24-8.83Zm5.4-48.57c-4.44-.1-9.42,5.2-9.48,10.11-.08,5.69,6.86,11.08,14.65,11.4,2.89,.12,9.19-6.13,9.29-9.22,.25-7.89-4.66-12.06-14.46-12.29Zm-1.91,55.68c-.19,2.7,5.71,9.21,8.41,9.27,4.69,.11,14.63-6.07,14.95-9.3,.6-6.05-5.17-13.33-10.85-13.72-5.71-.39-11.99,6.52-12.5,13.74Zm-20.31-21.78c6.16,0,12.15-5.58,12.44-11.61,.25-5.16-6.61-11.07-13.05-11.25-3.47-.1-9.71,9.02-9.74,14.24-.02,3.78,5.78,8.62,10.35,8.62Zm53.71-2.34c-.14-10.39-2.82-13.68-11.12-13.66-3.88,0-9.11,5.48-9,9.42,.23,8.39,4.9,14.79,10.62,14.55,4.77-.2,9.57-5.4,9.5-10.31Z" fill="currentColor"></path>
                <path d="M145.43,278.58c-7.35-2.93-14.35-5.69-21.33-8.51-7.49-3.03-14.82-6.5-22.46-9.07-5.54-1.86-8.63-5-10.57-10.55-5.33-15.23-11.26-30.25-16.91-45.37-.27-.73-.18-1.61-.34-3.22,4.44,1.01,8.51,1.9,12.57,2.87,4.97,1.19,9.92,2.54,14.94,3.6,11.52,2.39,23.25,3.95,34.53,7.28,12.01,3.55,19.08,12.17,18.99,25.19-.04,6.05-.87,12.05-1.56,18.6-.31,3.09-2.17,5.33-4.88,6.19-2.84,.9-5.96,.34-8.98,.34Z" fill="currentColor"></path>
                <path d="M195.29,283.86c-12.66-8.15-24.98-16.29-37.39-24.35-1.45-.93-2.91-1.84-4.31-2.84-6.52-4.5-6.94-6.49-4.35-14.07,1.89-5.17,3.73-10.37,5.89-16.34,1.28,3.92,2.2,7.38,3.48,10.71,2.17,5.57,4.55,11.05,6.48,16.69,3.32,9.97,7.95,19.28,12.37,29.81,4.81-.18,9.25-.35,13.71-.52Z" fill="currentColor"></path>
              </svg>
            </svg>


          </div>

          <div className="flex flex-col gap-3 absolute top-[250px] left-[14.8px] bg-transparent">
            <svg width="28.6" height="26.48" viewBox="0 0 2445 2274" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M596.5 25.5L32 890.5L1217.5 2236L2413.5 890.5L1875 25.5H596.5Z" fill="rgb(77, 29, 209)" stroke="rgb(250, 250, 250)" stroke-width="100" />
            </svg>
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
