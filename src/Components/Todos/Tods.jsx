import { useState } from "react";
const Tods = () => {
  const [search, setSearch] = useState("");
  const [inputValue, setinputValue] = useState([]);

  const handleInputvalue = () => {
    setinputValue([inputValue, ...search]);
    setSearch(" ");
  };
  return (
    <>
      <h1>Todos</h1>

      <div className="mt-10">
        <input
          className="bg-red-100"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-green-950 px-3 py-1 rounded-md text-white"
          onClick={handleInputvalue}
        >
          Add Todo
        </button>
        {inputValue.map((elem, index) => (
          <ul key={index}>
            <li>{elem}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default Tods;
