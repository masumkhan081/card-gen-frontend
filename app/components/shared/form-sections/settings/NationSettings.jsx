import React from 'react'

const NationSettings = () => {
    return (
        <>
            <div className='border pb-5 mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-gray-400 flex items-center p-4'>
                    <b>Nation Settings</b>
                </div>

                <div className='pl-4 pr-4 pt-4'>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">Nation Name</label>
                            <input
                                id="input1"
                                type="text"
                                placeholder="Name.."
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="input1" className="form-label">National Flag</label>
                            <input
                                id="input1"
                                type="file"
                                placeholder="Overall.."
                                className="form-input mt-3"
                            />
                        </div>
                    </div>
                    <div className="">
                        <button className="btn">Upload & Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NationSettings
