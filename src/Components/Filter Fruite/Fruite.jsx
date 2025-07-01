import { useState } from "react";
const Fruite = () => {
  const [Seachinput, Setsearchinput] = useState("");
  const fruits = [
    "Apple 🍎",
    "Banana 🍌",
    "Grapes 🍇",
    "Watermelon 🍉",
    "Pineapple 🍍",
  ];
  const handleChange = (e) => {
    Setsearchinput(e.target.value);
    console.log(Seachinput);
  };
  const filterFruite = fruits.filter((fruitevalue) =>
    fruitevalue.includes(Seachinput)
  );
  return (
    <>
      <div>
        <div className="">
          <h1>Fruite</h1>
          <input
            type="text"
            placeholder="Search input"
            value={Seachinput}
            onChange={handleChange}
          />
          {filterFruite.map((values, index) => (
            <ul key={index}>
              <li>{values}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fruite;
