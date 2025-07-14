import { useState } from "react";
const Todolist = () => {
  const [inputvalue, setInputvalues] = useState([]);
  const [searchInput, setSearchinput] = useState("");
  console.log(inputvalue);

  const handleInputValue = (e) => {
    setSearchinput(e.target.value);
    console.log(searchInput);
  };
  const handleaddInputValue = (e) => {
    e.preventDefault();
    setInputvalues([...inputvalue, searchInput]);
    setSearchinput("");
  };
  const handleDelete = (indexDelete) => {
    setInputvalues(inputvalue.filter((_, elem) => elem !== indexDelete));
  };
  return (
    <div>
      <h1 className="bg-violet-300 text-white flex justify-center items-center  h-[10vh] sm:h-[16vh] font-bold text-2xl sm:text-3xl md:text-4xl ">
        Mayur To-Do List
      </h1>
      <input
        type="text"
        className="px-4 py-2 text-xl md:text-2xl border-2 m-2 mt-8 sm:m-5"
        placeholder="enter your task"
        value={searchInput}
        onChange={handleInputValue}
      />

      <button
        className="bg-blue-700 text-xl md:text-2xl w-[35vw] md:w-[10vw] px-4 py-2 m-2 mt-8 sm:m-5 text-white"
        onClick={handleaddInputValue}
      >
        Add Task
      </button>
      {inputvalue.map((values, index) => (
        <li key={index} className="flex  justify-around items-center">
          <p className="mt-10 font-semibold text-2xl">{values}</p>
          <button
            className="bg-red-500 text-xl md:text-2xl w-[35vw] md:w-[10vw] px-4 py-2 m-2 mt-8 sm:m-5 text-white"
            onClick={() => handleDelete(index)}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todolist;
