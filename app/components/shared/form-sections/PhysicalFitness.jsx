import React from 'react'

const PhysicalFitness = () => {
    return (
        <>
            <div className='border pb-5 rounded-[8px] border-selection-color mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>Physical Fitness and Skills</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-2 justify-between">
                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">PAC</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="PAC"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />

                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">SHO</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="SHO"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">PAS</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="PAS"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">DRI</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="DRI"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />

                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">DEF</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="DEF"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />
                            </div>

                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">PHY</label>
                                <input
                                    id="input1"
                                    type="text"
                                    placeholder="PHY"
                                    className="form-input mt-3 text-center"
                                    min="0"
                                    max="99"
                                    maxLength="2"

                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 form-row flex flex-row md:flex-row lg:flex-row xl:flex-row gap-2 pb-5 justify-between">
                            <div className="form-group w-full">
                                <label htmlFor="input1" className="form-label">Foot</label>
                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Left
                                </button>

                            </div>

                            <div className="form-group w-full">
                                <br/>

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Right
                                </button>
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
                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    1
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    2
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    3
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    4
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    5
                                </button>
                            </div>


                        </div>

                        <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Weak Foot</label>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            <div className="form-group w-full">
                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    1
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    2
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    3
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    4
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    5
                                </button>
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
                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    High
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Medium
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Low
                                </button>
                            </div>

                        </div>

                        <label className="form-label w-1/2 block lg:hidden md:hidden pb-0">Defensive Workrate</label>

                        <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2  form-row flex flex-row gap-2 lg:gap-1 pb-5 justify-between">
                            <div className="form-group w-full">
                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    High
                                </button>

                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Medium
                                </button>
                            </div>

                            <div className="form-group w-full">

                                <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center border-[1px] text-black font-300 border-gray-400">
                                    Low
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default PhysicalFitness
