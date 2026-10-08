import React from "react";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk"];

  return (
    <React.Fragment>
      <h1>Health food</h1>
      {foodItems == 0 && <h3>I'm still Hungry</h3>}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
