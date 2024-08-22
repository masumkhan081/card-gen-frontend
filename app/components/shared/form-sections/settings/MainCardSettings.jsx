"use client";
import React, { useState } from 'react'

const MainCardSettings = () => {

    const [cardName, setCardName] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append("cardName", cardName);

        var fileInput = document.getElementById("cardImage");
        var file = fileInput.files[0];
        formData.append("cardImage", file);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        await fetch("http://localhost:3001/cards", {
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
            <div className='border pb-5 mt-6'>
                <div className='h-12 bg-transparent text-selection-color border-b border-gray-400 flex items-center p-4'>
                    <b>Card Settings</b>
                </div>

                <form className='pl-4 pr-4 pt-4' onSubmit={handleSubmit}>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="cardName" className="form-label">Card Name</label>
                            <input
                                id="cardName"
                                name="cardName"
                                onChange={()=>setCardName(e.target.name)}
                                type="text"
                                placeholder="Card Name.."
                                className="form-input mt-3"
                            />
                        </div>

                        <div className="form-group w-full">
                            <label htmlFor="cardImage" className="form-label">Card Image</label>
                            <input
                                id="cardImage"
                                name="cardImage"
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

export default MainCardSettings
