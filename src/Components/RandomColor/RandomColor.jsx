import { useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#ffffff");
  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }
  function grnrateHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += [randomColorUtility(hex.length)];
      console.log(hexColor);
    }
    setColor(hexColor);
  }
  
  function RandomRgbColor (){
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    const RgbColor = `rgb(${r},${g},${b})`;
    setColor(RgbColor);
  }


  return (
    <>
      <div className="mt-10 w-[85vw] h-[100vh]" style={{ background: color }}>
        <button
          className=" border-2 rounded-sm  mr-10"
          onClick={grnrateHexColor}
        >
          Create Hex Color
        </button>
        <button
          className=" border-2 rounded-sm  mr-10"
          onClick={RandomRgbColor}
        >
          Create Rgb Color
        </button>
        <button className=" border-2 rounded-sm  mr-10" onClick={color ? grnrateHexColor:RandomColor}>
          Create Random Color
        </button>
      </div>
    </>
  );
}
