import { useAtom } from 'jotai';
import Image from 'next/image'
import React, { useState } from 'react'
import { alternatepositionAtom, positionsAtom } from '../../Atom/GlobalStates';

const Tactics = () => {



    const [primaryPosition, setPrimaryPosition] = useAtom(positionsAtom);
    const [alternatePositions, setAlternatePositions] = useAtom(alternatepositionAtom);

    const handlePrimaryClick = (position) => {
        setPrimaryPosition(position);
        // If the new primary position is in the alternate positions, remove it
        setAlternatePositions((prev) => prev.filter((p) => p !== position));
    };

    const handleAlternateClick = (position) => {
        setAlternatePositions((prev) => {
            if (prev.includes(position)) {
                // Remove the position if it is already selected
                return prev.filter((item) => item !== position);
            } else if (prev.length < 3 && position !== primaryPosition) {
                // Add the position if less than 3 are selected and it's not the primary position
                return [...prev, position];
            } else if (prev.length === 3 && position !== primaryPosition) {
                // If 3 positions are already selected, remove the first one (FIFO) and add the new one
                return [...prev.slice(1), position];
            }
            return prev; // Do nothing if it's the primary position
        });
    };

    const isSelected = (position, type) => {
        if (type === 'primary') {
            return position === primaryPosition;
        } else if (type === 'alternate') {
            return alternatePositions.includes(position);
        }
        return false;
    };

    const buttonStyles = (type, isSelected) => ({
        backgroundColor: isSelected ? (type === 'primary' ? '#1E73BE' : '#1E73BE') : 'white',
        color: isSelected ? 'white' : 'black',
        borderColor: isSelected ? (type === 'primary' ? '#1E73BE' : '#1E73BE') : 'gray',
        pointerEvents: type === 'primary' && isSelected ? 'none' : 'auto', // Prevent clicking the primary position
    });


    ///////////////

    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleButtonClick = (playStyle) => {
        if (selectedButtons.includes(playStyle)) {
            // Deselect if already selected
            setSelectedButtons(selectedButtons.filter(style => style !== playStyle));
        } else {
            if (selectedButtons.length < 4) {
                // Select if less than 4 are selected
                setSelectedButtons([...selectedButtons, playStyle]);
            } else {
                // If 4 are selected, remove the first one and add the new one
                setSelectedButtons([...selectedButtons.slice(1), playStyle]);
            }
        }
    };

    const buttonPairs = [
        ["acrobatic", "aerial"],
        ["anticipate", "block"],
        ["bruiser", "chipshot"],
        ["crossclimer", "deadball"],
        ["farthrow", "finesseshot"],
        ["firsttouch", "flair"],
        ["footwork", "incisivepass"],
        ["intercept", "jockey"],
        ["longballpass", "longthrow"],
        ["pingedpass", "powerheader"],
        ["powershot", "pressproven"],
        ["quickstep", "rapid"],
        ["relentless", "rushout"],
        ["slidetackle", "technical"],
        ["tikitaka", "trickstar"],
        ["trivela", "whippedpass"],
        ["unknown", "unknown"],
        ["unknown", "unknown"]
    ];

    return (
        <>
            <div className='border pb-5 rounded-[8px] border-selection-color mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>Position and Playstyles</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">Position</label>
                            <div className="w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('LW', 'primary'))}
                                            onClick={() => handlePrimaryClick('LW')}
                                        >
                                            LW
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('ST', 'primary'))}
                                            onClick={() => handlePrimaryClick('ST')}
                                        >
                                            ST
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('RW', 'primary'))}
                                            onClick={() => handlePrimaryClick('RW')}
                                        >
                                            RW
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('LM', 'primary'))}
                                            onClick={() => handlePrimaryClick('LM')}
                                        >
                                            LM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('CF', 'primary'))}
                                            onClick={() => handlePrimaryClick('CF')}
                                        >
                                            CF
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('RM', 'primary'))}
                                            onClick={() => handlePrimaryClick('RM')}
                                        >
                                            RM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('CM', 'primary'))}
                                            onClick={() => handlePrimaryClick('CM')}
                                        >
                                            CM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('CAM', 'primary'))}
                                            onClick={() => handlePrimaryClick('CAM')}
                                        >
                                            CAM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('CDM', 'primary'))}
                                            onClick={() => handlePrimaryClick('CDM')}
                                        >
                                            CDM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('LWB', 'primary'))}
                                            onClick={() => handlePrimaryClick('LWB')}
                                        >
                                            LWB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('CB', 'primary'))}
                                            onClick={() => handlePrimaryClick('CB')}
                                        >
                                            CB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('RWB', 'primary'))}
                                            onClick={() => handlePrimaryClick('RWB')}
                                        >
                                            RWB
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('LB', 'primary'))}
                                            onClick={() => handlePrimaryClick('LB')}
                                        >
                                            LB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('GK', 'primary'))}
                                            onClick={() => handlePrimaryClick('GK')}
                                        >
                                            GK
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('primary', isSelected('RB', 'primary'))}
                                            onClick={() => handlePrimaryClick('RB')}
                                        >
                                            RB
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <label htmlFor="input1" className="form-label">Alternative Positions</label>
                            <div className="w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('LW', 'alternate'))}
                                            onClick={() => handleAlternateClick('LW')}
                                        >
                                            LW
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('ST', 'alternate'))}
                                            onClick={() => handleAlternateClick('ST')}
                                        >
                                            ST
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('RW', 'alternate'))}
                                            onClick={() => handleAlternateClick('RW')}
                                        >
                                            RW
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('LM', 'alternate'))}
                                            onClick={() => handleAlternateClick('LM')}
                                        >
                                            LM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('CF', 'alternate'))}
                                            onClick={() => handleAlternateClick('CF')}
                                        >
                                            CF
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('RM', 'alternate'))}
                                            onClick={() => handleAlternateClick('RM')}
                                        >
                                            RM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('CM', 'alternate'))}
                                            onClick={() => handleAlternateClick('CM')}
                                        >
                                            CM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('CAM', 'alternate'))}
                                            onClick={() => handleAlternateClick('CAM')}
                                        >
                                            CAM
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('CDM', 'alternate'))}
                                            onClick={() => handleAlternateClick('CDM')}
                                        >
                                            CDM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('LWB', 'alternate'))}
                                            onClick={() => handleAlternateClick('LWB')}
                                        >
                                            LWB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('CB', 'alternate'))}
                                            onClick={() => handleAlternateClick('CB')}
                                        >
                                            CB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('RWB', 'alternate'))}
                                            onClick={() => handleAlternateClick('RWB')}
                                        >
                                            RWB
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5 justify-between">
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('LB', 'alternate'))}
                                            onClick={() => handleAlternateClick('LB')}
                                        >
                                            LB
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('GK', 'alternate'))}
                                            onClick={() => handleAlternateClick('GK')}
                                        >
                                            GK
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button
                                            className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]"
                                            style={buttonStyles('alternate', isSelected('RB', 'alternate'))}
                                            onClick={() => handleAlternateClick('RB')}
                                        >
                                            RB
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* playstyle */}

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">PlayStyles+</label>
                            <div className="w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5">
                                {buttonPairs.map((pair, rowIndex) => (
                                    <div key={rowIndex} className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1">
                                        {pair.map((name, colIndex) => (
                                            <div key={colIndex} className="w-full sm:w-1/2">
                                                <button
                                                    onClick={() => handleButtonClick(name)}
                                                    className={`form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400 ${selectedButtons.includes(name) ? 'bg-selection-color text-white' : ''}`}
                                                >
                                                    <Image
                                                        src={`/icons/${name}.svg`}
                                                        alt={`${name} Icon`}
                                                        className="h-6 w-6 mr-2 filter-[color]"
                                                        width={16}
                                                        height={16}
                                                    />
                                                    {name.replace(/^\w/, c => c.toUpperCase())}
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Tactics;
