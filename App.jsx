import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Containers from "./components/Containers";
import AddButtons from "./components/AddButtons";
import { useState } from "react";

function App() {
  const [foodItems, setFoodItems] = useState([
    "sabzi",
    "Green Vegetable",
    "Roti",
    "Salad",
    "Milk",
  ]);

  let amit = (event) => {
    if (event.key === "Enter") {
      let newFoodItems = event.target.value;
      let newItem = [...foodItems, newFoodItems];
      setFoodItems(newItem);
    }
  };

  return (
    <>
      <Containers>
        <h1 className="kg-weight">Health food</h1>
        <AddButtons amit={amit} />
        <ErrorMessage items={foodItems} />
        <FoodItems items={foodItems} />
      </Containers>
    </>
  );
}

export default App;
