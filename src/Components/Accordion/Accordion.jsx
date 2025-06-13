import { useState } from "react";

export default function Accordion() {
  const [selected, SetSelectedData] = useState(null);
  const accordionData = [
    {
      id: 1,
      title: "What is React?",
      content:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.",
    },
    {
      id: 2,
      title: "How do I install React?",
      content:
        "You can install React by running `npm install react react-dom` in your terminal, or by using create-react-app for a full project setup.",
    },
    {
      id: 3,
      title: "What are props in React?",
      content:
        "Props are inputs to components. They are data passed down from a parent component to a child component and are read-only.",
    },
    {
      id: 4,
      title: "What is state in React?",
      content:
        "State is a built-in object in React that is used to store data that may change over time. It allows components to be dynamic and interactive.",
    },
    {
      id: 5,
      title: "What is JSX?",
      content:
        "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript files.",
    },
  ];
  const handleDataIteams = (getDataIteamsId) => {
    console.log(getDataIteamsId);
    SetSelectedData(getDataIteamsId);
  };
  const handleMultiData = () => {
    if (selected) {
      SetSelectedData("");
    }
  };
  return (
    <>
      <h1 className=" text-4xl font-bold flex justify-center ">Accordion</h1>
      <button
        className="bg-gray-500 mb-4 rounded-sm w-96 mt-4 py-2"
        onClick={handleMultiData}
      >
        Enable Multi Selections
      </button>
      {accordionData.map((accordiansIteams) => (
        <div
          key={accordiansIteams.id}
          className="flex justify-center relative top-0"
        >
          <ul className>
            <li
              onClick={() => handleDataIteams(accordiansIteams.id)}
              className="bg-gray-500 mb-4 rounded-sm w-96 mt-4"
            >
              <h2 className=" text-white">{accordiansIteams.title}</h2>
              <span>+</span>
              <div>
                {selected === accordiansIteams.id ? (
                  <div>
                    <p className="font-bold text-white">
                      {accordiansIteams.content}
                    </p>
                  </div>
                ) : null}
              </div>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
}
