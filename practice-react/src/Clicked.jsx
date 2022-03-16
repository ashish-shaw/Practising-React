import React, { useState } from "react";

export const Clicked = () => {
  let name = "Touch Me";
  let bgcolor = "purple";
  const [bg, setBg] = useState(bgcolor);
  const [nname, setNname] = useState(name);

  const OneClick = () => {
    let nbg = "teal";
    setBg(nbg);
    setNname("Aww!! 😍");
  };
  const DoubleClick = () => {
    let nbg = "purple";
    setBg(nbg);
    setNname("Hurray!! 😍");
  };

  return (
    <>
      <div style={{ backgroundColor: bg }}>
        <button onMouseLeave={OneClick} onMouseEnter={DoubleClick}>
          {nname}
        </button>
      </div>
    </>
  );
};
