import Image from 'next/image'
import React from 'react'

const Tactics = () => {
    return (
        <>
            <div className='border pb-5 mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-gray-400 flex items-center p-4'>
                   <b>Position and Playstyles</b> 
                </div>

                <div className='pl-4 pr-4 pt-4'>
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
                </div>
            </div>
        </>
    )
}

export default Tactics
