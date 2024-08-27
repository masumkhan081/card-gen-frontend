"use client"
import React, { useEffect, useRef, useState } from 'react';
import SearchBox from './shared/SearchBox';
import Tab from './shared/Tab';
import MainForm from './shared/MainForm';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CardSettings from './shared/CardSettings';
import { playerNameAtom, playerImageAtom, overallAtom, rarityAtom, nationAtom, leagueAtom, positionsAtom, alternatepositionAtom, playstylesAtom, weakAtom, skillmovesAtom, footAtom, defensiveAtom, atackingAtom, pacAtom, shoAtom, phyAtom, pasAtom, defAtom, driAtom, searchQ, searchResult, isSearchResultShowing, isCurrentActEdit, selectedItemsAtom } from './Atom/GlobalStates';
import { useAtom } from 'jotai';





const CardPage = () => {

  const [isCurrentActEdits, setIsCurrentActEdits] = useAtom(isCurrentActEdit);

  const [selectedItems, setSelectedItems] = useAtom(selectedItemsAtom);

  const [search, setSearhQ] = useAtom(searchQ);

  const [searchResults, setSearResults] = useAtom(searchResult);
  const [isShowing, setIsShowing] = useState(false);


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
  const [dri] = useAtom(driAtom);
  const [def] = useAtom(defAtom);
  const [phy] = useAtom(phyAtom);



  /////////// search

  const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${BaseURL}/players?search_by=playerName&search=${search}`
        );
        const result = await response.json();
        const data = result.data.data;
        setSearResults(data ? data : []);
        setIsShowing(data ? true : false);


        console.log("Success");
      } catch (error) {
        console.error("Error fetching the countries:", error);
      }
    };

    if (search.length > 1) {
      fetchData();
    }
  }, [search]);

  /////////////////////////////// save information finally

  const handleSubmit = async (event) => {


    event.preventDefault();

    let formData = new FormData();
    formData.append("playerName", playerName);
    formData.append("playerImage", playerImage);
    formData.append("overall", overall);
    formData.append("rarity", rarity);
    formData.append("nationality", nation);
    formData.append("league", league);
    formData.append("foot", foot);
    formData.append("skillMoves", skill);
    formData.append("weakFoot", weakfoot);
    formData.append("atkWorkrate", attack);
    formData.append("defWorkrate", defense);
    formData.append("position", positions); // Handle if multiple positions
    formData.append("playStyle", JSON.stringify(playstyle));
    formData.append("altPosition", JSON.stringify(alternatePositions));
    formData.append("pace", pac);
    formData.append("dribbling", dri);
    formData.append("pass", pass);
    formData.append("shot", sho);
    formData.append("defense", def);
    formData.append("physical", phy);

    try {
      if (isCurrentActEdits === false) {
        const response = await fetch(`${BaseURL}/players`, {
          method: "POST",
          body: formData,
          headers: {},
          redirect: "follow",
        });

        if (response.ok) {
          const data = await response.json();
          // alert(">> " + JSON.stringify(data));
          alert("New Player saved successfully");
          // toast.success('New Player saved successfully');
          handleDownload();
        } else {
          const error = await response.text(); // or response.json() if the error is in JSON format
          alert("Error: " + error);
          // toast.error("Error");
        }
      }
      else {

        alert("else");

        const response = await fetch(`${BaseURL}/players/${selectedItems.id}`, {
          method: "PATCH",
          body: formData,
          headers: {},
          redirect: "follow",
        });

        if (response.ok) {
          const data = await response.json();
          alert(">> " + JSON.stringify(data));
          alert("New Player updated successfully");
          // toast.success('New Player saved successfully');
          handleDownload();
        } else {
          const error = await response.text(); // or response.json() if the error is in JSON format
          alert("Error: " + error);
          // toast.error("Error");
        }


      }

    } catch (error) {
      alert("Network Error: " + JSON.stringify(error));
      // toast.error("Error");
    }
  };






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
      if (playerName) {
        link.download = playerName + '.png';
      }
      else {
        link.download = 'card-picture.png';
      }

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

  const imagePaths = [imagePath, imagePath1, imagePath2, imagePath3];

  const conditions = [
    { condition: foot, top: 204, content: foot },
    { condition: skill || weakfoot, top: 229, content: `${skill}⭑${weakfoot}` },
    { condition: attack || defense, top: 254, content: `${attack}·${defense}` }
  ];


  ////////////// dragable image

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };


  return (


    <div className="relative flex flex-col md:flex-col lg:flex-row xl:flex-row justify-center gap-[20px] w-full h-full">

      <div className="lg:sticky lg:top-0 flex flex-col justify-center items-center lg:w-1/3 md:w-full xl:w-1/3 h-full p-6">
        <SearchBox
          chgHandler={(e) => setSearhQ(e.target.value)}
          search={search}
          isShowing={isShowing}
          searchResults={searchResults}
          setIsShowing={setIsShowing}
        />


        {/* {JSON.stringify(isCurrentActEdits)} */}



        <div id='card-picture' ref={cardPictureRef} className="relative w-[280px] h-[391.453px] mb-[20px] bg-transparent">
          {/* rarity image */}

          <Image
            src={rarity}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            className="z-1 bg-transparent"
          />



          <div
            className="absolute inset-0 flex items-center justify-center z-3 bg-transparent"
            style={{
              top: position.y,
              left: position.x,
              cursor: dragging ? "grabbing" : "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp} // To handle mouse leaving the div while dragging
          >
            <div
              className="w-full h-full bg-no-repeat bg-contain bg-center bg-transparent"
              style={{
                backgroundImage: `url(${typeof playerImage === 'string' ? playerImage : playerImage ? URL.createObjectURL(playerImage) : ""
                  })`,
              }}
            ></div>
          </div>



          <div className="absolute text-white font-bold text-md z-2 bg-transparent top-[55px] h-[fit-content] w-[fit-content] left-10 right-10 text-center">
            {overall}<br />
            {positions}
          </div>

          <div className="absolute text-white font-500 text-md z-2 bg-transparent top-[248px] h-[fit-content] w-[full] left-10 right-10 text-center">
            {playerName}
          </div>

          <div className="absolute text-white font-500 text-xs z-2 bg-transparent top-[275px] h-[fit-content] w-[full] left-10 right-10 text-center flex gap-3 items-center justify-center">
            <div className="bg-transparent text-white">
              PAC<br />{pac ? pac : 0}
            </div>
            <div className="bg-transparent text-white">
              SHO<br />{sho ? sho : 0}
            </div>
            <div className="bg-transparent text-white">
              PAS<br />{pass ? pass : 0}
            </div>
            <div className="bg-transparent text-white">
              DRI<br />{dri ? dri : 0}
            </div>
            <div className="bg-transparent text-white">
              DEF<br />{def ? def : 0}
            </div>
            <div className="bg-transparent text-white">
              PHY<br />{phy ? phy : 0}
            </div>
          </div>


          {playstyle.slice(0, 4).map((style, index) => (
            <div
              key={index}
              className="h-[26px] w-[29px] flex items-center justify-center gap-3 absolute left-[12.8px] bg-transparent"
              style={{
                backgroundImage: `url(${small_diamond})`,
                backgroundRepeat: 'no-repeat',
                top: `${165 + index * 30}px`
              }}
            >
              <div className="w-full h-full flex mt-[7px] justify-center bg-transparent">
                <Image
                  src={imagePaths[index]} // Assuming each style object has an imagePath property
                  alt="Icon" // Provide an alt attribute for accessibility
                  width={13}
                  height={13}
                  className="p-0 m-0 max-w-[13px] min-w-[13px] max-h-[13px] min-h-[13px]"
                />
              </div>
            </div>
          ))}

          {alternatePositions.slice(0, 3).map((position, index) => (
            <div
              key={index}
              className="h-[18.75px] w-[33.59px] flex items-center justify-center gap-[30px] absolute left-[239px]"
              style={{
                top: `${74 + index * 22}px`, // Correctly calculate the top position
                border: '1px solid red',
                borderRadius: '5.63899px',
                fontSize: '16.1114px',
                fontWeight: 'bold',
                pointerEvents: 'none' // Ensures that clicks and interactions don't affect the content
              }}
            >
              <div className="w-full h-full flex items-center justify-center bg-transparent">
                <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" strokeWidth=".5" />
                  <text
                    x="50%"
                    y="57%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="12.1114"
                    fontWeight="bold"
                    fill="black"
                    fontFamily="arial"
                  >
                    {position}
                  </text>
                </svg>
              </div>
            </div>
          ))}



          {conditions.map((item, index) =>
            item.condition ? (
              <div
                key={index}
                className={`h-[18.75px] w-[33.59px] flex items-center justify-center gap-[30px] absolute left-[239px]`}
                style={{
                  border: '1px solid red',
                  borderRadius: '5.63899px',
                  fontSize: '16.1114px',
                  fontWeight: 'bold',
                  top: `${item.top}px`,
                  pointerEvents: 'none' // Ensures that clicks and interactions don't affect the content
                }}>

                <div className="w-full h-full flex items-center justify-center bg-transparent">
                  <svg width="33.59" height="18.75" viewBox="0 0 33.59 18.75" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0" y="0" width="33.59" height="18.75" rx="5.63899" fill="none" stroke="red" stroke-width=".5" />
                    <text x="50%" y="57%" dominant-baseline="middle" text-anchor="middle" font-size="12.1114" font-weight="bold" fill="black" fontFamily='arial'>
                      {item.content}
                    </text>
                  </svg>
                </div>
              </div>


            ) : null
          )}


          <div className="absolute text-white font-500 text-xs z-2 bg-transparent top-[319px] h-[fit-content] w-[full] left-10 right-10 text-center flex gap-3 items-center justify-center">
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
          <button onClick={handleDownload} className="mt-0 p-2 bg-selection-color text-white rounded">
            Download
          </button>
          <button onClick={handleSubmit} className="mt-0 p-2 bg-transparent text-selection-color rounded">
            Save  & Download
          </button>

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
