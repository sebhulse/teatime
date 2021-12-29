import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const state = {
    foodItems: [
      {
        id: 0,
        name: "Lasagne",
      },
      {
        id: 1,

        name: "Stir-fry",
      },
      {
        id: 2,

        name: "Bean Thing",
      },
      {
        id: 3,

        name: "Fajitas/Burritos",
      },
      {
        id: 4,

        name: "Chilli",
      },
      {
        id: 5,

        name: "Baked Marinated Tofu",
      },
    ],
    displayFoods: true,
  };

  const [activeFood, setActiveFood] = useState(0);
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };
  function randomFood() {
    const len = state.foodItems.length;
    setActiveFood(Math.floor(Math.random() * len));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Teatime Ideas</h1>
        <p>Press the button for a teatime meal idea.</p>
        <div>
          <button
            className="Recommendation-button blue"
            onClick={() => {
              setCount(count + 1);
              randomFood();
            }}
          >
            Get Recommendation
          </button>
          <p>Idea number {count} is:</p>
          <p>{state.foodItems[activeFood].name}</p>
        </div>
        <button onClick={handleOpen} className="Recommendation-button pink">
          See all options {show ? "-" : "+"}
        </button>
        {show && (
          <div>
            <ul className="list">
              {state.foodItems.map((element) => (
                <li className="list" key={element.id}>
                  {element.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
