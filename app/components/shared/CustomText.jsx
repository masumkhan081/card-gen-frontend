import React from "react";

export default function CustomText({ val, chgHandler, ph, si, ei }) {
  return (
    <div className="w-full h-full flex border border-slate-400 rounded-md">
      <input
        type="text"
        value={val}
        onChange={chgHandler}
        placeholder={ph}
        className="w-full px-1 rounded-md outline-none py-0.5"
      />
    </div>
  );
}
