import React, { useState } from "react";
import "./App.css";

function App() {
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
      {
        id: 6,

        name: "Sunday Roast",
      },
      {
        id: 7,

        name: "Curry",
      },
      {
        id: 8,

        name: "Burgers",
      },
      {
        id: 9,

        name: "Mushroom Pie",
      },
      {
        id: 10,

        name: "Potato Layer",
      },
      {
        id: 11,

        name: "Pizza",
      },
      {
        id: 12,

        name: "Risotto",
      },
      {
        id: 13,

        name: "Soup",
      },
      {
        id: 14,

        name: "Sausages and Mash",
      },
      {
        id: 15,

        name: "Spag Bol",
      },
      {
        id: 16,

        name: "Just Hummus",
      },
      {
        id: 17,

        name: "Fried Rice and Veg/Beans",
      },
      {
        id: 18,

        name: "Tapas (Hummus, Potatoes, Sausages, Salad etc)",
      },
    ],
    displayFoods: true,
  };

  const [count, setCount] = useState(0);
  const [activeFood, setActiveFood] = useState(
    Math.floor(Math.random() * state.foodItems.length)
  );
  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(!show);
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
          <div className="border">{state.foodItems[activeFood].name}</div>
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
