"use client"
import Image from 'next/image'
import React from 'react'
import League from '@/app/components/json/league.json'
import Nation from '@/app/components/json/nation.json'

const MainForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Name</label>
                        <input
                            id="input1"
                            type="text"
                            placeholder="Name.."
                            className="form-input mt-3"
                        />
                    </div>

                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Overall</label>
                        <input
                            id="input1"
                            type="text"
                            placeholder="Overall.."
                            className="form-input mt-3"
                        />
                    </div>
                </div>

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Rarity</label>
                        <label htmlFor="input1" className="form-label float-right text-selection-color">View Rarities</label>
                        <select
                            id="input1"
                            className="form-input mt-3"
                        >
                            <option value="">Select Rariry..</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>

                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Nation</label>
                        <select id="input1" className="form-input mt-3">
                            {Nation.map(nation => (
                                <option key={nation.value} value={nation.value}>
                                    {nation.label}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Leauge</label>
                        <select id="input1" className="form-input mt-3">
                            {League.map(league => (
                                <option key={league.value} value={league.value}>
                                    {league.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Club</label>
                        <select
                            id="input1"
                            className="form-input mt-3"
                        >
                            <option value="">Select Club</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-2 justify-between">
                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">PAC</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />

                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">SHO</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">PAS</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">DRI</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />

                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">DEF</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">PHY</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="ss"
                                className="form-input mt-3"
                            />
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row md:flex-row lg:flex-row xl:flex-row gap-2 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">Foot</label>

                            <input
                                id="input1"
                                type="button"
                                value="Left"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">ss</label>
                            <input
                                id="input1"
                                type="button"
                                value="Right"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>


                    </div>
                </div>




                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-0">
                    <label className="form-label w-1/2">Skill Moves</label>
                    <label className="form-label w-1/2 hidden lg:block md:block">Weak Foot</label>
                </div>
                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0 pb-2 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="1"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="2"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="3"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="4"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="5"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>


                    </div>

                    <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Weak Foot</label>

                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="1"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="2"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="3"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="4"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="5"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>


                    </div>

                </div>




                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-0">
                    <label className="form-label w-1/2">Attacking Workrate</label>
                    <label className="form-label w-1/2 hidden lg:block md:block">Defensive Workrate</label>
                </div>
                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="High"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="Medium"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="Low"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>




                    </div>

                    <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Defensive Workrate</label>

                    <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="High"
                                className="form-button mt-3 cursor-pointer"
                            />

                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="Medium"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>

                        <div className="form-group w-full">

                            <input
                                type="button"
                                value="Low"
                                className="form-button mt-3 cursor-pointer"
                            />
                        </div>


                    </div>

                </div>

                {/* big list */}

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Position</label>
                        <div className=" w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LW"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="ST"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RW"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CF"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CAM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CDM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LWB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RWB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="GK"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>
                        </div>

                        <label htmlFor="input1" className="form-label">Alternative Positions</label>
                        <div className=" w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LW"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="ST"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RW"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CF"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CAM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CDM"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LWB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="CB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RWB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>

                            <div className="w-full flex flex-row gap-5  justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="LB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="GK"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="RB"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PlayStyles */}
                    <div className="form-group w-full">

                        <label htmlFor="input1" className="form-label">PlayStyles+</label>
                        <div className=" w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/acrobatic.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Acrobatic
                                    </button>

                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/aerial.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Aerial
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/anticipate.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Anticipate
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/block.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Block
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/bruiser.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Bruiser
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/chipshot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Chip Shot
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/crossclimer.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Cross Claimer
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/deadball.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Dead Ball
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/farthrow.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Far Throw
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/finesseshot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Finesse Shot
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/firsttouch.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        First Touch
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/flair.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Flair
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/footwork.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Footwork
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/incisivepass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Incisive Pass
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/intercept.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Intercept
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/jockey.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Jockey
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/longballpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Long Ball Pass
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/longthrow.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Long Throw
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/pingedpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Pinged Pass
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/powerheader.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Power Header
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/powershot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Power Shot
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/pressproven.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Press Proven
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/quickstep.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Quick Step
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/rapid.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Rapid
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/relentless.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Relentless
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/rushout.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Rush Out
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/slidetackle.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Slide Tackle
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/technical.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Technical
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/tikitaka.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Tiki Taka
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/trickstar.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Trickstar
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/trivela.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Trivela
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/whippedpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Whipped Pass
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Unknown1
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Unknown1
                                    </button>
                                </div>

                            </div>

                            <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Unknown1
                                    </button>
                                </div>
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px]">
                                        <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} style={{ filter: 'invert(48%) sepia(87%) saturate(3130%) hue-rotate(190deg) brightness(94%) contrast(73%)' }} />
                                        Unknown1
                                    </button>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>








            </form>
        </div>
    )
}

export default MainForm
