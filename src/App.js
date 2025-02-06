import React, { useState } from "react";

function App() {
  const [items, setItems] = useState(() => {
    const initialItems = [];
    for (let i = 1; i <= 1000; i++) {
      initialItems.push(`Item ${i}`);
    }
    return initialItems;
  });

  const [timeTaken, setTimeTaken] = useState(null);
  const [randomNumber, setRandomNumber] = useState(null);

  const updateList = () => {
    const start = performance.now();

    const updatedItems = [...items];
    updatedItems[0] = "Updated Item 1";

    setItems(updatedItems);

    const randomNum = Math.floor(Math.random() * 1000) + 1;
    setRandomNumber(randomNum);

    const end = performance.now();
    const time = (end - start).toFixed(2);
    setTimeTaken(time);
  };

  return (
    <div>
      <h2>React DOM Manipulation</h2>
      <button onClick={updateList}>
        Update 1st Item and Show Random Number
      </button>
      {timeTaken && <h3>Time taken to update 1st item: {timeTaken} ms</h3>}{" "}
      {/* Display time taken */}
      {randomNumber !== null && <p>Random Number: {randomNumber}</p>}{" "}
      {/* Display random number */}
      <h4>List of 1000 item</h4>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
