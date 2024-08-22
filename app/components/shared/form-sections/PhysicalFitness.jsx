import React from 'react'

const PhysicalFitness = () => {
    return (
        <>
            <div className='border pb-5 mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-gray-400 flex items-center p-4'>
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
                </div>
            </div>
        </>
    )
}

export default PhysicalFitness
