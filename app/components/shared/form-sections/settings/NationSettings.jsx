"use client";
import React, { useState } from "react";

const NationSettings = () => {
  const [countryName, setCountryName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("countryName", countryName);

    var fileInput = document.getElementById("countryImage");
    var file = fileInput.files[0];
    formData.append("countryImage", file);

    const config = {
      headers: { "content-type": "multipart/form-data" },
    };

    await fetch("http://localhost:5000/countries", {
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
