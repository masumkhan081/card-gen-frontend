"use client"
import React, { useEffect, useRef, useState } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CardSettings from './shared/CardSettings';
import { playerNameAtom, playerImageAtom, overallAtom, rarityAtom, nationAtom, leagueAtom } from './Atom/GlobalStates';
import { useAtom } from 'jotai';


const CardPage = () => {


  const [playerName] = useAtom(playerNameAtom);
  const [playerImage] = useAtom(playerImageAtom);
  const [overall] = useAtom(overallAtom);
  const [rarity] = useAtom(rarityAtom);
  const [nation] = useAtom(nationAtom);
  const [league] = useAtom(leagueAtom);


  const small_diamond = 'data:image/svg+xml,%3Csvg%20width%3D%2228.6%22%20height%3D%2226.48%22%20viewBox%3D%220%200%202445%202274%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M596.5%2025L32%20890L1217.5%202235.5L2413.5%20890L1875%2025H596.5Z%22%20fill%3D%22white%22%20stroke%3D%22%23FF0000%22%20stroke-width%3D%2250%22/%3E%3C/svg%3E';

  const player = "/players/messi.webp";


  const cardPictureRef = useRef(null);

  const handleDownload = () => {
    const element = cardPictureRef.current;
    if (!element) return;

    html2canvas(element, {
      backgroundColor: null,
      scale: 2,
      scrollX: 0,
      scrollY: 0,
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
            backgroundImage: 'url(/Rarity-Gallery/1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >


          {/* header text */}

          <div
            className="absolute top-[46px] left-[49px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)'
            }}
          >

            <div className="flex-1 bg-transparent text-[25px] font-bold"><center>{overall}</center></div>


          </div>

          <div
            className="absolute top-[71px] left-[49px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)'
            }}
          >
            <div className="flex-1 bg-transparent text-[25px] font-bold maxline-1"><center>ST</center></div>
          </div>


          {/* player image */}


          {/* <div
            className="h-full w-full flex items-center justify-center gap-3   bg-transparent"
            style={{
              backgroundImage: `url(${player})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '75%',
              backgroundPosition: 'center',


            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent mt-[6px]">

            </div>
          </div> */}

          <div className="flex items-center justify-center gap-3 m-0 bg-transparent m-10">
            <Image
              src={playerImage ? URL.createObjectURL(playerImage) : player}
              alt={playerName || 'Player Image'}
              layout="intrinsic"
              width={296.34}
              height={385}
              className="object-contain"
            />
          </div>



          {/* diamond card */}

          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[165px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[6px]  justify-center bg-transparent">
              <svg width="13" height="13" class="svg-icon svg-icon--size-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.64 260.3"><path d="M48.29,145.95c.47,9.55,.77,18.3,1.38,27.03,.26,3.74,1.41,6.8,6.05,7.89,5.57,1.31,10.84,3.84,16.35,5.46,1.61,.48,3.99,.26,5.35-.64,5.38-3.56,10.6-7.39,15.65-11.41,1.36-1.08,2.56-3.16,2.67-4.86,.46-6.97,.15-13.99,.74-20.93,.38-4.48-1.46-7.18-4.78-9.59-4.29-3.12-8.47-6.4-12.65-9.68-.74-.58-1.26-1.46-2.04-2.38,2.25-1.99,4.15-4.15,6.5-5.54,1.2-.71,3.53-.61,4.81,.1,2.59,1.44,5.11,3.25,7.12,5.42,5.19,5.62,10.99,6.24,17.78,3.35,4.23-1.8,8.64-3.19,13.04-4.53,3.23-.99,5.3-2.51,6.17-6.13,1.32-5.43,3.25-10.73,5.17-15.99,1.21-3.31,.48-5.8-1.63-8.56-3.92-5.13-7.51-10.53-10.98-15.98-.67-1.05-.76-3.15-.16-4.21,5.41-9.57,6.75-9.93,18.17-7.48,25.74,5.51,45,20.08,58.93,42.03,1.24,1.95,1.97,5.24,1.23,7.28-8.42,23.19-20.16,44.59-35.64,63.85-27.01,33.62-61.05,57.62-100.99,73.47-5.81,2.3-11.75,4.27-17.67,6.29-.79,.27-1.78-.08-3.11-.17,11.65-7.48,22.84-14.68,34.8-22.36-1.85-1.49-2.86-2.45-4-3.2-21.87-14.49-33.69-35.48-38.77-60.63-1.11-5.48-.64-11.27-1.19-16.89-.39-3.91,.96-6.3,4.68-7.64,2.41-.87,4.66-2.2,7.02-3.35Zm125.41-51.13c-7.34,2.49-13.94,4.52-20.35,7.05-1.81,.71-3.71,2.65-4.39,4.46-2.19,5.82-3.51,11.98-5.83,17.75-1.18,2.93-.74,4.9,.9,7.17,4.15,5.77,8.16,11.63,12.34,17.39,3.88,5.34,6.29,5.46,9.3-.21,5.72-10.75,10.53-22.01,16.56-32.57,4.36-7.63,2.59-12.8-3.98-17.43-1.67-1.18-3.2-2.54-4.54-3.61Zm-43.73,96.98c-8.54-2.96-15.33-4.92-21.78-7.68-4.04-1.73-6.95-1.28-10.22,1.43-4.45,3.69-9.29,6.9-13.81,10.51-1.14,.91-2.39,2.53-2.44,3.86-.24,7.14-.74,14.37,.21,21.39,.35,2.56,4.18,5.04,6.95,6.67,1.09,.64,3.93-.76,5.42-1.92,4.17-3.26,8.24-6.71,12.02-10.41,7.76-7.59,15.3-15.4,23.64-23.84Z" fill="currentColor"></path><path d="M8.39,33.88c1.36-1.73,2.03-2.78,2.89-3.65C20.53,20.87,29.75,11.47,39.18,2.29c1.31-1.27,3.74-1.94,5.66-1.95C99.01,.25,153.19,.59,207.35,0c9.72-.1,16.4,2.78,22.19,9.89,3.25,3.99,6.88,7.71,10.58,11.3,2.5,2.42,2.85,3.86,.18,6.82-4.4,4.87-9.22,6.46-15.73,6.43-71-.23-142-.16-213.01-.19-.65,0-1.29-.15-3.17-.37Z" fill="currentColor"></path><path d="M245.17,245.81c0-5.62,0-10.85,0-16.08,0-59.13,.13-118.26-.19-177.39-.04-6.45,2.13-10.64,6.62-14.54,1.97-1.71,3.22-1.73,4.98,.13,6.52,6.89,13.2,13.62,19.65,20.58,.96,1.04,1.37,2.95,1.37,4.46,.07,49.3,.07,98.61,0,147.91,0,1.51-.43,3.44-1.4,4.46-9.65,10.1-19.46,20.05-29.24,30.02-.2,.2-.63,.17-1.77,.45Z" fill="currentColor"></path><path d="M108.48,247.29c6.47-4.45,13.12-8.67,19.37-13.42,7.12-5.42,13.98-11.21,20.73-17.08,2.29-2,4.06-2.67,7.03-1.35,4.65,2.06,9.51,3.72,14.42,5.06,1.72,.47,4.38,.17,5.69-.9,9.55-7.8,16.57-17.66,21.26-28.99,.92-2.23,.5-6.53-1.06-8.04-8.36-8.06-7.22-15.23-1.04-24.39,5.56-8.23,8.63-18.12,12.84-27.26,.59-1.27,1.38-2.45,2.66-4.68,9.95,32.53,6.18,62.08-13.67,88.13-22.04,28.91-51.89,40.09-87.69,34.3-.17-.46-.34-.91-.52-1.37Z" fill="currentColor"></path><path d="M112.2,68.1C83.76,107.15,46.41,134.49,0,152.21c1.37-1.77,1.82-2.77,2.59-3.28,16.24-10.82,28.67-25.68,42.24-39.36,14.82-14.94,29.43-30.3,49.8-37.94,5.46-2.05,11.2-3.35,16.81-4.99,.26,.49,.52,.97,.77,1.46Z" fill="currentColor"></path></svg>
            </div>
          </div>

          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[195px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[6px]  justify-center bg-transparent">
              <svg width="13" height="13" class="svg-icon svg-icon--size-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.64 260.3"><path d="M48.29,145.95c.47,9.55,.77,18.3,1.38,27.03,.26,3.74,1.41,6.8,6.05,7.89,5.57,1.31,10.84,3.84,16.35,5.46,1.61,.48,3.99,.26,5.35-.64,5.38-3.56,10.6-7.39,15.65-11.41,1.36-1.08,2.56-3.16,2.67-4.86,.46-6.97,.15-13.99,.74-20.93,.38-4.48-1.46-7.18-4.78-9.59-4.29-3.12-8.47-6.4-12.65-9.68-.74-.58-1.26-1.46-2.04-2.38,2.25-1.99,4.15-4.15,6.5-5.54,1.2-.71,3.53-.61,4.81,.1,2.59,1.44,5.11,3.25,7.12,5.42,5.19,5.62,10.99,6.24,17.78,3.35,4.23-1.8,8.64-3.19,13.04-4.53,3.23-.99,5.3-2.51,6.17-6.13,1.32-5.43,3.25-10.73,5.17-15.99,1.21-3.31,.48-5.8-1.63-8.56-3.92-5.13-7.51-10.53-10.98-15.98-.67-1.05-.76-3.15-.16-4.21,5.41-9.57,6.75-9.93,18.17-7.48,25.74,5.51,45,20.08,58.93,42.03,1.24,1.95,1.97,5.24,1.23,7.28-8.42,23.19-20.16,44.59-35.64,63.85-27.01,33.62-61.05,57.62-100.99,73.47-5.81,2.3-11.75,4.27-17.67,6.29-.79,.27-1.78-.08-3.11-.17,11.65-7.48,22.84-14.68,34.8-22.36-1.85-1.49-2.86-2.45-4-3.2-21.87-14.49-33.69-35.48-38.77-60.63-1.11-5.48-.64-11.27-1.19-16.89-.39-3.91,.96-6.3,4.68-7.64,2.41-.87,4.66-2.2,7.02-3.35Zm125.41-51.13c-7.34,2.49-13.94,4.52-20.35,7.05-1.81,.71-3.71,2.65-4.39,4.46-2.19,5.82-3.51,11.98-5.83,17.75-1.18,2.93-.74,4.9,.9,7.17,4.15,5.77,8.16,11.63,12.34,17.39,3.88,5.34,6.29,5.46,9.3-.21,5.72-10.75,10.53-22.01,16.56-32.57,4.36-7.63,2.59-12.8-3.98-17.43-1.67-1.18-3.2-2.54-4.54-3.61Zm-43.73,96.98c-8.54-2.96-15.33-4.92-21.78-7.68-4.04-1.73-6.95-1.28-10.22,1.43-4.45,3.69-9.29,6.9-13.81,10.51-1.14,.91-2.39,2.53-2.44,3.86-.24,7.14-.74,14.37,.21,21.39,.35,2.56,4.18,5.04,6.95,6.67,1.09,.64,3.93-.76,5.42-1.92,4.17-3.26,8.24-6.71,12.02-10.41,7.76-7.59,15.3-15.4,23.64-23.84Z" fill="currentColor"></path><path d="M8.39,33.88c1.36-1.73,2.03-2.78,2.89-3.65C20.53,20.87,29.75,11.47,39.18,2.29c1.31-1.27,3.74-1.94,5.66-1.95C99.01,.25,153.19,.59,207.35,0c9.72-.1,16.4,2.78,22.19,9.89,3.25,3.99,6.88,7.71,10.58,11.3,2.5,2.42,2.85,3.86,.18,6.82-4.4,4.87-9.22,6.46-15.73,6.43-71-.23-142-.16-213.01-.19-.65,0-1.29-.15-3.17-.37Z" fill="currentColor"></path><path d="M245.17,245.81c0-5.62,0-10.85,0-16.08,0-59.13,.13-118.26-.19-177.39-.04-6.45,2.13-10.64,6.62-14.54,1.97-1.71,3.22-1.73,4.98,.13,6.52,6.89,13.2,13.62,19.65,20.58,.96,1.04,1.37,2.95,1.37,4.46,.07,49.3,.07,98.61,0,147.91,0,1.51-.43,3.44-1.4,4.46-9.65,10.1-19.46,20.05-29.24,30.02-.2,.2-.63,.17-1.77,.45Z" fill="currentColor"></path><path d="M108.48,247.29c6.47-4.45,13.12-8.67,19.37-13.42,7.12-5.42,13.98-11.21,20.73-17.08,2.29-2,4.06-2.67,7.03-1.35,4.65,2.06,9.51,3.72,14.42,5.06,1.72,.47,4.38,.17,5.69-.9,9.55-7.8,16.57-17.66,21.26-28.99,.92-2.23,.5-6.53-1.06-8.04-8.36-8.06-7.22-15.23-1.04-24.39,5.56-8.23,8.63-18.12,12.84-27.26,.59-1.27,1.38-2.45,2.66-4.68,9.95,32.53,6.18,62.08-13.67,88.13-22.04,28.91-51.89,40.09-87.69,34.3-.17-.46-.34-.91-.52-1.37Z" fill="currentColor"></path><path d="M112.2,68.1C83.76,107.15,46.41,134.49,0,152.21c1.37-1.77,1.82-2.77,2.59-3.28,16.24-10.82,28.67-25.68,42.24-39.36,14.82-14.94,29.43-30.3,49.8-37.94,5.46-2.05,11.2-3.35,16.81-4.99,.26,.49,.52,.97,.77,1.46Z" fill="currentColor"></path></svg>
            </div>
          </div>

          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[225px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[6px]  justify-center bg-transparent">
              <svg width="13" height="13" class="svg-icon svg-icon--size-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.64 260.3"><path d="M48.29,145.95c.47,9.55,.77,18.3,1.38,27.03,.26,3.74,1.41,6.8,6.05,7.89,5.57,1.31,10.84,3.84,16.35,5.46,1.61,.48,3.99,.26,5.35-.64,5.38-3.56,10.6-7.39,15.65-11.41,1.36-1.08,2.56-3.16,2.67-4.86,.46-6.97,.15-13.99,.74-20.93,.38-4.48-1.46-7.18-4.78-9.59-4.29-3.12-8.47-6.4-12.65-9.68-.74-.58-1.26-1.46-2.04-2.38,2.25-1.99,4.15-4.15,6.5-5.54,1.2-.71,3.53-.61,4.81,.1,2.59,1.44,5.11,3.25,7.12,5.42,5.19,5.62,10.99,6.24,17.78,3.35,4.23-1.8,8.64-3.19,13.04-4.53,3.23-.99,5.3-2.51,6.17-6.13,1.32-5.43,3.25-10.73,5.17-15.99,1.21-3.31,.48-5.8-1.63-8.56-3.92-5.13-7.51-10.53-10.98-15.98-.67-1.05-.76-3.15-.16-4.21,5.41-9.57,6.75-9.93,18.17-7.48,25.74,5.51,45,20.08,58.93,42.03,1.24,1.95,1.97,5.24,1.23,7.28-8.42,23.19-20.16,44.59-35.64,63.85-27.01,33.62-61.05,57.62-100.99,73.47-5.81,2.3-11.75,4.27-17.67,6.29-.79,.27-1.78-.08-3.11-.17,11.65-7.48,22.84-14.68,34.8-22.36-1.85-1.49-2.86-2.45-4-3.2-21.87-14.49-33.69-35.48-38.77-60.63-1.11-5.48-.64-11.27-1.19-16.89-.39-3.91,.96-6.3,4.68-7.64,2.41-.87,4.66-2.2,7.02-3.35Zm125.41-51.13c-7.34,2.49-13.94,4.52-20.35,7.05-1.81,.71-3.71,2.65-4.39,4.46-2.19,5.82-3.51,11.98-5.83,17.75-1.18,2.93-.74,4.9,.9,7.17,4.15,5.77,8.16,11.63,12.34,17.39,3.88,5.34,6.29,5.46,9.3-.21,5.72-10.75,10.53-22.01,16.56-32.57,4.36-7.63,2.59-12.8-3.98-17.43-1.67-1.18-3.2-2.54-4.54-3.61Zm-43.73,96.98c-8.54-2.96-15.33-4.92-21.78-7.68-4.04-1.73-6.95-1.28-10.22,1.43-4.45,3.69-9.29,6.9-13.81,10.51-1.14,.91-2.39,2.53-2.44,3.86-.24,7.14-.74,14.37,.21,21.39,.35,2.56,4.18,5.04,6.95,6.67,1.09,.64,3.93-.76,5.42-1.92,4.17-3.26,8.24-6.71,12.02-10.41,7.76-7.59,15.3-15.4,23.64-23.84Z" fill="currentColor"></path><path d="M8.39,33.88c1.36-1.73,2.03-2.78,2.89-3.65C20.53,20.87,29.75,11.47,39.18,2.29c1.31-1.27,3.74-1.94,5.66-1.95C99.01,.25,153.19,.59,207.35,0c9.72-.1,16.4,2.78,22.19,9.89,3.25,3.99,6.88,7.71,10.58,11.3,2.5,2.42,2.85,3.86,.18,6.82-4.4,4.87-9.22,6.46-15.73,6.43-71-.23-142-.16-213.01-.19-.65,0-1.29-.15-3.17-.37Z" fill="currentColor"></path><path d="M245.17,245.81c0-5.62,0-10.85,0-16.08,0-59.13,.13-118.26-.19-177.39-.04-6.45,2.13-10.64,6.62-14.54,1.97-1.71,3.22-1.73,4.98,.13,6.52,6.89,13.2,13.62,19.65,20.58,.96,1.04,1.37,2.95,1.37,4.46,.07,49.3,.07,98.61,0,147.91,0,1.51-.43,3.44-1.4,4.46-9.65,10.1-19.46,20.05-29.24,30.02-.2,.2-.63,.17-1.77,.45Z" fill="currentColor"></path><path d="M108.48,247.29c6.47-4.45,13.12-8.67,19.37-13.42,7.12-5.42,13.98-11.21,20.73-17.08,2.29-2,4.06-2.67,7.03-1.35,4.65,2.06,9.51,3.72,14.42,5.06,1.72,.47,4.38,.17,5.69-.9,9.55-7.8,16.57-17.66,21.26-28.99,.92-2.23,.5-6.53-1.06-8.04-8.36-8.06-7.22-15.23-1.04-24.39,5.56-8.23,8.63-18.12,12.84-27.26,.59-1.27,1.38-2.45,2.66-4.68,9.95,32.53,6.18,62.08-13.67,88.13-22.04,28.91-51.89,40.09-87.69,34.3-.17-.46-.34-.91-.52-1.37Z" fill="currentColor"></path><path d="M112.2,68.1C83.76,107.15,46.41,134.49,0,152.21c1.37-1.77,1.82-2.77,2.59-3.28,16.24-10.82,28.67-25.68,42.24-39.36,14.82-14.94,29.43-30.3,49.8-37.94,5.46-2.05,11.2-3.35,16.81-4.99,.26,.49,.52,.97,.77,1.46Z" fill="currentColor"></path></svg>
            </div>
          </div>

          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[255px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[6px]  justify-center bg-transparent">
              <svg width="13" height="13" class="svg-icon svg-icon--size-sm" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 277.64 260.3"><path d="M48.29,145.95c.47,9.55,.77,18.3,1.38,27.03,.26,3.74,1.41,6.8,6.05,7.89,5.57,1.31,10.84,3.84,16.35,5.46,1.61,.48,3.99,.26,5.35-.64,5.38-3.56,10.6-7.39,15.65-11.41,1.36-1.08,2.56-3.16,2.67-4.86,.46-6.97,.15-13.99,.74-20.93,.38-4.48-1.46-7.18-4.78-9.59-4.29-3.12-8.47-6.4-12.65-9.68-.74-.58-1.26-1.46-2.04-2.38,2.25-1.99,4.15-4.15,6.5-5.54,1.2-.71,3.53-.61,4.81,.1,2.59,1.44,5.11,3.25,7.12,5.42,5.19,5.62,10.99,6.24,17.78,3.35,4.23-1.8,8.64-3.19,13.04-4.53,3.23-.99,5.3-2.51,6.17-6.13,1.32-5.43,3.25-10.73,5.17-15.99,1.21-3.31,.48-5.8-1.63-8.56-3.92-5.13-7.51-10.53-10.98-15.98-.67-1.05-.76-3.15-.16-4.21,5.41-9.57,6.75-9.93,18.17-7.48,25.74,5.51,45,20.08,58.93,42.03,1.24,1.95,1.97,5.24,1.23,7.28-8.42,23.19-20.16,44.59-35.64,63.85-27.01,33.62-61.05,57.62-100.99,73.47-5.81,2.3-11.75,4.27-17.67,6.29-.79,.27-1.78-.08-3.11-.17,11.65-7.48,22.84-14.68,34.8-22.36-1.85-1.49-2.86-2.45-4-3.2-21.87-14.49-33.69-35.48-38.77-60.63-1.11-5.48-.64-11.27-1.19-16.89-.39-3.91,.96-6.3,4.68-7.64,2.41-.87,4.66-2.2,7.02-3.35Zm125.41-51.13c-7.34,2.49-13.94,4.52-20.35,7.05-1.81,.71-3.71,2.65-4.39,4.46-2.19,5.82-3.51,11.98-5.83,17.75-1.18,2.93-.74,4.9,.9,7.17,4.15,5.77,8.16,11.63,12.34,17.39,3.88,5.34,6.29,5.46,9.3-.21,5.72-10.75,10.53-22.01,16.56-32.57,4.36-7.63,2.59-12.8-3.98-17.43-1.67-1.18-3.2-2.54-4.54-3.61Zm-43.73,96.98c-8.54-2.96-15.33-4.92-21.78-7.68-4.04-1.73-6.95-1.28-10.22,1.43-4.45,3.69-9.29,6.9-13.81,10.51-1.14,.91-2.39,2.53-2.44,3.86-.24,7.14-.74,14.37,.21,21.39,.35,2.56,4.18,5.04,6.95,6.67,1.09,.64,3.93-.76,5.42-1.92,4.17-3.26,8.24-6.71,12.02-10.41,7.76-7.59,15.3-15.4,23.64-23.84Z" fill="currentColor"></path><path d="M8.39,33.88c1.36-1.73,2.03-2.78,2.89-3.65C20.53,20.87,29.75,11.47,39.18,2.29c1.31-1.27,3.74-1.94,5.66-1.95C99.01,.25,153.19,.59,207.35,0c9.72-.1,16.4,2.78,22.19,9.89,3.25,3.99,6.88,7.71,10.58,11.3,2.5,2.42,2.85,3.86,.18,6.82-4.4,4.87-9.22,6.46-15.73,6.43-71-.23-142-.16-213.01-.19-.65,0-1.29-.15-3.17-.37Z" fill="currentColor"></path><path d="M245.17,245.81c0-5.62,0-10.85,0-16.08,0-59.13,.13-118.26-.19-177.39-.04-6.45,2.13-10.64,6.62-14.54,1.97-1.71,3.22-1.73,4.98,.13,6.52,6.89,13.2,13.62,19.65,20.58,.96,1.04,1.37,2.95,1.37,4.46,.07,49.3,.07,98.61,0,147.91,0,1.51-.43,3.44-1.4,4.46-9.65,10.1-19.46,20.05-29.24,30.02-.2,.2-.63,.17-1.77,.45Z" fill="currentColor"></path><path d="M108.48,247.29c6.47-4.45,13.12-8.67,19.37-13.42,7.12-5.42,13.98-11.21,20.73-17.08,2.29-2,4.06-2.67,7.03-1.35,4.65,2.06,9.51,3.72,14.42,5.06,1.72,.47,4.38,.17,5.69-.9,9.55-7.8,16.57-17.66,21.26-28.99,.92-2.23,.5-6.53-1.06-8.04-8.36-8.06-7.22-15.23-1.04-24.39,5.56-8.23,8.63-18.12,12.84-27.26,.59-1.27,1.38-2.45,2.66-4.68,9.95,32.53,6.18,62.08-13.67,88.13-22.04,28.91-51.89,40.09-87.69,34.3-.17-.46-.34-.91-.52-1.37Z" fill="currentColor"></path><path d="M112.2,68.1C83.76,107.15,46.41,134.49,0,152.21c1.37-1.77,1.82-2.77,2.59-3.28,16.24-10.82,28.67-25.68,42.24-39.36,14.82-14.94,29.43-30.3,49.8-37.94,5.46-2.05,11.2-3.35,16.81-4.99,.26,.49,.52,.97,.77,1.46Z" fill="currentColor"></path></svg>
            </div>
          </div>



          {/*upper rectangle part */}

          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[74px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial'>CB</text>
              </svg>
            </div>
          </div>


          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[96px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial'>CB</text>
              </svg>
            </div>
          </div>

          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[118px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'  /* Ensures that clicks and interactions don't affect the content */
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial'>CB</text>
              </svg>
            </div>
          </div>


          {/*lower rectangle part */}

          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[204px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial'>L</text>
              </svg>
            </div>
          </div>


          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[229px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial' >5⭑5</text>
              </svg>
            </div>
          </div>

          <div
            className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-3 absolute top-[254px] left-[249px]"
            style={{
              border: '1px solid red',
              borderRadius: '5.63899px',
              fontSize: '16.1114px',
              fontWeight: 'bold',
              pointerEvents: 'none'
            }}
          >
            <div className="w-full h-full flex items-center justify-center bg-transparent">
              <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="15.1114" font-weight="bold" fill="black" fontFamily='arial'>H·L</text>
              </svg>
            </div>
          </div>

          {/* footer text */}

          <div
            className="h-[58.75px] w-[224px] p-[10px] flex flex-row items-center justify-center gap-1 absolute top-[230px] left-[37px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)'
            }}
          >
            <div className="flex-1 bg-transparent text-[19px] font-bold maxline-1"><center>{playerName}</center></div>
          </div>

          <div
            className="h-[58.75px] w-[224px] p-[0px] flex flex-row items-center justify-center gap-1 absolute top-[267px] left-[37px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)',
            }}
          >
            <div className="flex-1 bg-transparent text-[12px]">PAC<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">SHO<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">PAS<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">DRI<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">DEF<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">PHY<br /></div>
          </div>

          <div
            className="h-[58.75px] w-[224px] p-[0px] flex flex-row items-center justify-center gap-1 absolute top-[285px] left-[39px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)',
            }}
          >
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">23<br /></div>
          </div>

          {/* images and logo */}

          <div
            className="h-[58.75px] w-[224px] p-[10px] flex flex-row items-center justify-center gap-3 absolute top-[314px] left-[37px]"
            style={{
              pointerEvents: 'none',
              backgroundColor: 'transparent',
              color: 'rgb(250, 250, 250)'
            }}
          >

            <div className=" bg-transparent text-[14px]"><Image src='/nation/argentina.svg' height={18.13} width={26} /></div>
            <div className=" bg-transparent text-[14px]"><Image src='/nation/argentina.svg' height={18.13} width={26} /></div>
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
