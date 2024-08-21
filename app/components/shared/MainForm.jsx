"use client"
import React from 'react'

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
                        <select
                            id="input1"
                            className="form-input mt-3"
                        >
                            <option value="">Select Nation</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                    </div>
                </div>

                <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                    <div className="form-group w-full">
                        <label htmlFor="input1" className="form-label">Leauge</label>
                        <select
                            id="input1"
                            className="form-input mt-3"
                        >
                            <option value="">Select Leauge..</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
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
                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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
                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
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
                            <div className="w-full flex flex-col md:flex-row lg:flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <button className="form-button mt-3 cursor-pointer w-full flex items-center justify-center">
                                        <img src="/path/to/your-image.png" alt="Icon" className="h-6 w-6 mr-2" />
                                        Acrobatic
                                    </button>

                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Arial"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>

                            </div>

                            <div className="w-full flex flex-row gap-2 lg:gap-1 justify-between">
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="High"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
                                </div>
                                <div className="w-full">
                                    <input
                                        type="button"
                                        value="Medium"
                                        className="form-button mt-3 cursor-pointer w-full"
                                    />
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
