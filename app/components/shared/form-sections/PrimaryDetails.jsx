"use client";
import React from 'react'
import League from '@/app/components/json/league.json'
import Nation from '@/app/components/json/nation.json'

const PrimaryDetails = () => {
    return (
        <>
            <div className='border pb-5'>
                <div className='h-12 bg-transparent text-selection-color border-b border-gray-400 flex items-center p-4'>
                    <b>Primary Details</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
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
                            <label htmlFor="input1" className="form-label">Player Image</label>
                            <input
                                id="input1"
                                type="file"
                                placeholder="Overall.."
                                className="form-input mt-3"
                            />
                        </div>
                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">

                    <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">Overall</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="Name.."
                                className="form-input mt-3"
                            />
                        </div>

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


                    </div>

                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">

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

                        {/* <div className="form-group w-full">
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
                            </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrimaryDetails
