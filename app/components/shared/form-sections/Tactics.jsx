import Image from 'next/image'
import React from 'react'

const Tactics = () => {
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
                            <div className=" w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LW
                                        </button>

                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            ST
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RW
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CF
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CAM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CDM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LWB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RWB
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            GK
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RB
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <label htmlFor="input1" className="form-label">Alternative Positions</label>
                            <div className=" w-full flex flex-col gap-0 pb-5 md:gap-5 lg:gap-5 xl:gap-5 justify-between">
                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LW
                                        </button>

                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            ST
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RW
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CF
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CAM
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CDM
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LWB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            CB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RWB
                                        </button>
                                    </div>
                                </div>

                                <div className="w-full flex flex-row gap-5  justify-between">
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            LB
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            GK
                                        </button>
                                    </div>
                                    <div className="w-full">

                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            RB
                                        </button>
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
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/acrobatic.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Acrobatic
                                        </button>

                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/aerial.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Aerial
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/anticipate.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Anticipate
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/block.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Block
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/bruiser.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Bruiser
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/chipshot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Chip Shot
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/crossclimer.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Cross Claimer
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/deadball.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Dead Ball
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/farthrow.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Far Throw
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/finesseshot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Finesse Shot
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/firsttouch.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            First Touch
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/flair.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Flair
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/footwork.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Footwork
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/incisivepass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Incisive Pass
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/intercept.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Intercept
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/jockey.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Jockey
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/longballpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Long Ball Pass
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/longthrow.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Long Throw
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/pingedpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Pinged Pass
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/powerheader.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Power Header
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/powershot.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Power Shot
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/pressproven.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Press Proven
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/quickstep.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Quick Step
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/rapid.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Rapid
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/relentless.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Relentless
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/rushout.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Rush Out
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/slidetackle.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Slide Tackle
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/technical.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Technical
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/tikitaka.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Tiki Taka
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/trickstar.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Trickstar
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/trivela.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Trivela
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/whippedpass.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Whipped Pass
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Unknown1
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Unknown1
                                        </button>
                                    </div>

                                </div>

                                <div className="w-full flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between">
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
                                            Unknown1
                                        </button>
                                    </div>
                                    <div className="w-full">
                                        <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                            <Image src="/icons/unknown.svg" alt="Icon" className="h-6 w-6 mr-2 filter-[color] " width={16} height={16} />
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
