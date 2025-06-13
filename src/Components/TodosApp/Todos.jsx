import { useState } from "react";

export default function Todos() {
  const [Todos, SetTodos] = useState([]);
  const [Input, Setinput] = useState("");

  const addTodos = () => {
    if(Input.trim()){
        SetTodos([...Todos, Input]);
        Setinput("");
    }
    
  };

  const deleteTodos = (items) => {
    SetTodos(Todos.filter((_, e) => e !== items));
  };
  return (
    <>
      <div className="bg-red-700 h-[600px] rounded-lg">
        <h1 className="mt-32 font-bold text-4xl pt-10">Tods App</h1>
        <input
          type="text"
          value={Input}
          placeholder="Enter Your Work"
          className="w-48 px-5  font-sm py-2 rounded-lg mt-4"
          onChange={(e) => Setinput(e.target.value)}
        />
        <button
          className="w-32 px-5  font-sm py-2 rounded-lg mt-4 bg-gray-900 text-white ml-2"
          onClick={addTodos}
        >
          Add
        </button>
        <ul className="w-64 px-2  font-sm py-1 rounded-lg mt-4 bg-gray-900 text-white ml-44 text-1xl font-bold">
          {Todos.map((items, index) => (
            <li key={index}>
              {items}
              <button
                className="ml-10 bg-red-600 rounded-lg py-2 px-3 mb-5"
                onClick={() => deleteTodos(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
