"use client";
import React, { useState, useRef } from "react";

const NationSettings = () => {
  // Base URL
  const BaseURL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const [countryName, setCountryName] = useState("");
  const fileInputRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("countryName", countryName);

    const file = fileInputRef.current.files[0];
    if (file) {
      formData.append("countryImage", file);
    }

    try {
      const response = await fetch(`${BaseURL}/countries`, {
        method: "POST",
        body: formData,
        headers: {},
        redirect: "follow",
      });

      const data = await response.json();
      alert(">> " + JSON.stringify(data));
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading the data.");
    }
  };

  return (
    <>
      <div className='border pb-5 rounded-[8px] border-selection-color mt-6'>
        <div className='h-12 bg-transparent text-selection-color border-b border-selection-color flex items-center p-4'>
          <b>Nation Settings</b>
        </div>

        <form className="pl-4 pr-4 pt-4" onSubmit={handleSubmit}>
          <div className="form-row flex flex-col md:flex-row lg:flex-row xl:flex-row gap-5 pb-5 justify-between">
            <div className="form-group w-full">
              <label htmlFor="countryName" className="form-label">
                Nation Name
              </label>
              <input
                id="countryName"
                name="countryName"
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
                placeholder="Nation Name.."
                className="form-input mt-3"
              />
            </div>

            <div className="form-group w-full">
              <label htmlFor="countryImage" className="form-label">
                National Flag
              </label>
              <input
                id="countryImage"
                name="countryImage"
                type="file"
                ref={fileInputRef}
                className="form-input mt-3"
              />
            </div>
          </div>
          <div className="">
            <button className="btn" type="submit">
              Upload & Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NationSettings;
