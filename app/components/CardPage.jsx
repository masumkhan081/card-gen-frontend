"use client"
import React, { useEffect, useRef, useState } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CardSettings from './shared/CardSettings';
import { playerNameAtom, playerImageAtom, overallAtom, rarityAtom, nationAtom, leagueAtom, positionsAtom, alternatepositionAtom, playstylesAtom, weakAtom, skillmovesAtom, footAtom, defensiveAtom, atackingAtom, pacAtom, shoAtom, phyAtom, pasAtom } from './Atom/GlobalStates';
import { useAtom } from 'jotai';


const CardPage = () => {


  const [playerName] = useAtom(playerNameAtom);
  const [playerImage] = useAtom(playerImageAtom);
  const [overall] = useAtom(overallAtom);
  const [rarity] = useAtom(rarityAtom);
  const [nation] = useAtom(nationAtom);
  const [league] = useAtom(leagueAtom);
  const [positions] = useAtom(positionsAtom);
  const [alternatePositions] = useAtom(alternatepositionAtom);
  const [playstyle] = useAtom(playstylesAtom);

  const [weakfoot] = useAtom(weakAtom);
  const [skill] = useAtom(skillmovesAtom);
  const [foot] = useAtom(footAtom);
  const [attack] = useAtom(atackingAtom);
  const [defense] = useAtom(defensiveAtom);

  const [pac] = useAtom(pacAtom);
  const [sho] = useAtom(shoAtom);
  const [pass] = useAtom(pasAtom);
  const [dri] = useAtom(atackingAtom);
  const [def] = useAtom(defensiveAtom);
  const [phy] = useAtom(phyAtom);







  const small_diamond = 'data:image/svg+xml,%3Csvg%20width%3D%2228.6%22%20height%3D%2226.48%22%20viewBox%3D%220%200%202445%202274%22%20fill%3D%22none%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M596.5%2025L32%20890L1217.5%202235.5L2413.5%20890L1875%2025H596.5Z%22%20fill%3D%22white%22%20stroke%3D%22%23FF0000%22%20stroke-width%3D%2250%22/%3E%3C/svg%3E';

  // const player = "/players/messi.webp";


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


  const imagePath = `/icons/${playstyle[0]}.svg`;
  const imagePath1 = `/icons/${playstyle[1]}.svg`;
  const imagePath2 = `/icons/${playstyle[2]}.svg`;
  const imagePath3 = `/icons/${playstyle[3]}.svg`;


  return (
    <div className="relative flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center gap-[20px] w-full h-full">
      <div className="lg:sticky lg:top-0 flex flex-col justify-center items-center lg:w-1/3 md:w-full xl:w-1/3 h-full p-6">
        <SearchBox />
        <div
          id='card-picture'
          ref={cardPictureRef}
          className="relative w-[296.34px] h-[385px] bg-transparent mt-6"
          style={{
            backgroundImage: `url(${rarity})`,
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
            <div className="flex-1 bg-transparent text-[25px] font-bold maxline-1"><center>{positions}</center></div>
          </div>




          <div className="flex items-center justify-center gap-3 m-0 bg-transparent m-10">
            {playerImage ?
              (<Image
                src={playerImage ? URL.createObjectURL(playerImage) : ''}
                alt={playerName || ''}
                layout="intrinsic"
                width={296.34}
                height={385}
                className="object-contain"
              />)
              :
              (
                ''
              )
            }

          </div>



          {/* diamond card */}




          {playstyle.length > 0 ?
            (
              <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[165px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

                  <Image
                    src={imagePath} // Assuming playstyle contains the image filename
                    alt="Icon" // Provide an alt attribute for accessibility
                    width={13} // Specify the width of the image
                    height={13} // Specify the height of the image
                  />
                </div>

              </div>

            )
            :
            (
              ''
            )

          }


          {playstyle.length > 1 ?
            (
              <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[195px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

                  <Image
                    src={imagePath1} // Assuming playstyle contains the image filename
                    alt="Icon" // Provide an alt attribute for accessibility
                    width={13} // Specify the width of the image
                    height={13} // Specify the height of the image
                  />
                </div>

              </div>

            )
            :
            (
              ''
            )

          }

          {playstyle.length > 2 ?
            (
              <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[225px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

                  <Image
                    src={imagePath2} // Assuming playstyle contains the image filename
                    alt="Icon" // Provide an alt attribute for accessibility
                    width={13} // Specify the width of the image
                    height={13} // Specify the height of the image
                  />
                </div>

              </div>

            )
            :
            (
              ''
            )

          }


          {playstyle.length > 3 ?
            (
              <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[255px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
                <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

                  <Image
                    src={imagePath3} // Assuming playstyle contains the image filename
                    alt="Icon" // Provide an alt attribute for accessibility
                    width={13} // Specify the width of the image
                    height={13} // Specify the height of the image
                  />
                </div>

              </div>

            )
            :
            (
              ''
            )

          }




          {/* <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[195px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath1} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div>


          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[225px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath2} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div>


          <div className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute top-[255px] left-[14.8px] bg-transparent" style={{ backgroundImage: `url(${small_diamond})`, backgroundRepeat: 'no-repeat' }}>
            <div className="w-full h-full flex mt-[-6px]  justify-center bg-transparent">

              <Image
                src={imagePath3} // Assuming playstyle contains the image filename
                alt="Icon" // Provide an alt attribute for accessibility
                width={13} // Specify the width of the image
                height={13} // Specify the height of the image
              />
            </div>

          </div> */}






          {/*upper rectangle part */}

          {alternatePositions.length > 0 ?

            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[0]}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }

          {alternatePositions.length > 1 ?

            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[1]}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }

          {alternatePositions.length > 2 ?

            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{alternatePositions[2]}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }








          {/*lower rectangle part */}

          {foot ?
            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{foot}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }


          {(skill || weakfoot) ?
            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial' >{skill}⭑{weakfoot}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }


          {(attack || defense) ?
            (
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
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>{attack}·{defense}</text>
                  </svg>
                </div>
              </div>
            )
            :
            (
              ''
            )
          }



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
            <div className="flex-1 bg-transparent text-[12px]">{pac ? pac : 0}<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">{sho ? sho : 0}<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">{pass ? pass : 0}<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">{dri ? dri : 0}<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">{def ? def : 0}<br /></div>
            <div className="flex-1 bg-transparent text-[12px]">{phy ? phy : 0}<br /></div>
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
            {nation ? (
              <div className="bg-transparent max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px] flex items-center justify-center">
                <Image className='p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px]' src={nation} width={26} height={18.13} alt='nation' />
              </div>
            ) : null}

            {league ? (
              <div className="bg-transparent p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px] flex items-center justify-center">
                <Image className='p-0 m-0 max-w-[26px] min-w-[26px] max-h-[18px] min-h-[18px]' src={league} width={22} height={12} alt='league' />
              </div>
            ) : null}



          </div>


        </div>

        <div className='flex flex-row gap-5'>
          <button onClick={handleDownload} className="mt-4 p-2 bg-selection-color text-white rounded">
            Download
          </button>
          <button onClick={handleDownload} className="mt-4 p-2 bg-transparent text-selection-color rounded">
            Save  & Download
          </button>

          <p>{playstyle[0]}</p>


        </div>


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
