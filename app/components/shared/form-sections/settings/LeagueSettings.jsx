"use client";
import React, { useState } from 'react'

const LeagueSettings = () => {
    const [leagueName, setLeagueName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("leagueName", leagueName);

        var fileInput = document.getElementById("leagueImage");
        var file = fileInput.files[0];
        formData.append("leagueImage", file);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        await fetch("http://localhost:5000/leagues", {
            method: "POST",
            body: formData,
            headers: {},
            redirect: "follow",
        })
            .then((res) => res.json())
            .then((data) => {
                alert(">> " + JSON.stringify(data));
            })
            .catch((error) => {
                alert(JSON.stringify(error));
            });
    };

    
    return (

        <>
            <div className='border pb-5 rounded-[8px] border-selection-color mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>League Settings</b>
                </div>

                <form className='pl-4 pr-4 pt-4' onSubmit={handleSubmit}>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="leagueName" className="form-label">League Name</label>
                            <input
                                id="leagueName"
                                name='leagueName'
                                type="text"
                                value={leagueName}
                                onChange={(e) => setLeagueName(e.target.value)}
                                placeholder="League Name.."
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="leagueImage" className="form-label">League Icon</label>
                            <input
                                id="leagueImage"
                                name='leagueImage'
                                type="file"
                                className="form-input mt-3"
                            />
                        </div>
                    </div>
                    <div className="">
                        <button className="btn" type='submit'>Upload & Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LeagueSettings
