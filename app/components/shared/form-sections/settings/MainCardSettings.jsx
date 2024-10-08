"use client";
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const MainCardSettings = () => {

    const [cardName, setCardName] = useState("crd nme");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Submitted");
        let formData = new FormData();
        formData.append("cardName", cardName);

        var fileInput = document.getElementById("cardImage");
        var file = fileInput.files[0];
        formData.append("cardImage", file);

        const config = {
            headers: { "content-type": "multipart/form-data" },
        };

        await fetch("http://localhost:5000/cards", {
            method: "POST",
            body: formData,
            headers: {},
            redirect: "follow",
        })
            .then((res) => res.json())
            .then((data) => {
                toast.success("Rarity added successfully");
            })
            .catch((error) => {
                toast.error("Error Occured");
            });
    };

    return (
        <>
            <div className='border pb-5 rounded-[8px] border-selection-color'>
                <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
                    <b>Card Settings</b>
                </div>

                <form className='pl-4 pr-4 pt-4' onSubmit={handleSubmit}>
                    <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
                        <div className="form-group w-full">
                            <label htmlFor="cardName" className="form-label">Card Name</label>
                            <input
                                id="cardName"
                                name="cardName"
                                onChange={(e) => setCardName(e.target.value)}
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
    );
};

export default MainCardSettings;
