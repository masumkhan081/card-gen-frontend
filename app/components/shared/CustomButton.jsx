import React, { useState } from "react";

export default function CustomButton({
  txt,
  val,
  type,
  clkHandler,
  sIcon,
  eIcon,
}) {
  const [count, setCount] = useState(1);

  return (
    <div  onClick={()=>setCount(12)} className="w-full h-full px-1 flex border border-slate-400 rounded-md">
      {sIcon && <sIcon />}
      <button
        type={type}
        onClick={() => setCount(12)}
        className="w-full text-black brd"
      >
        {txt}
      </button>
      <p>{count}</p>
      {eIcon && <eIcon />}
    </div>
  );
}
