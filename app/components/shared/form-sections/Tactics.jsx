import Image from 'next/image'
import React, { useState } from 'react'

const Tactics = () => {

    const [primaryPosition, setPrimaryPosition] = useState(null);
    const [alternatePositions, setAlternatePositions] = useState([]);

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

    const playStyles = [
        { name: 'Acrobatic', icon: '/icons/acrobatic.svg' },
        { name: 'Aerial', icon: '/icons/aerial.svg' },
        { name: 'Anticipate', icon: '/icons/anticipate.svg' },
        { name: 'Block', icon: '/icons/block.svg' },
        { name: 'Bruiser', icon: '/icons/bruiser.svg' },
        { name: 'Chip Shot', icon: '/icons/chipshot.svg' },
        { name: 'Cross Claimer', icon: '/icons/crossclimer.svg' },
        { name: 'Dead Ball', icon: '/icons/deadball.svg' },
        { name: 'Far Throw', icon: '/icons/farthrow.svg' },
        { name: 'Finesse Shot', icon: '/icons/finesseshot.svg' },
        { name: 'First Touch', icon: '/icons/firsttouch.svg' },
        { name: 'Flair', icon: '/icons/flair.svg' },
        { name: 'Footwork', icon: '/icons/footwork.svg' },
        { name: 'Incisive Pass', icon: '/icons/incisivepass.svg' },
        { name: 'Intercept', icon: '/icons/intercept.svg' },
        { name: 'Jockey', icon: '/icons/jockey.svg' },
        { name: 'Long Ball Pass', icon: '/icons/longballpass.svg' },
        { name: 'Long Throw', icon: '/icons/longthrow.svg' },
        { name: 'Pinged Pass', icon: '/icons/pingedpass.svg' },
        { name: 'Power Header', icon: '/icons/powerheader.svg' },
        { name: 'Power Shot', icon: '/icons/powershot.svg' },
        { name: 'Press Proven', icon: '/icons/pressproven.svg' },
        { name: 'Quick Step', icon: '/icons/quickstep.svg' },
        { name: 'Rapid', icon: '/icons/rapid.svg' },
        { name: 'Relentless', icon: '/icons/relentless.svg' },
        { name: 'Rush Out', icon: '/icons/rushout.svg' },
        { name: 'Slide Tackle', icon: '/icons/slidetackle.svg' },
        { name: 'Technical', icon: '/icons/technical.svg' },
        { name: 'Tiki Taka', icon: '/icons/tikitaka.svg' },
        { name: 'Trickstar', icon: '/icons/trickstar.svg' },
        { name: 'Trivela', icon: '/icons/trivela.svg' },
        { name: 'Whipped Pass', icon: '/icons/whippedpass.svg' },
        { name: 'Unknown1', icon: '/icons/unknown.svg' },
        { name: 'Unknown2', icon: '/icons/unknown.svg' }
        // Add other play styles here if needed...
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
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tactics;
