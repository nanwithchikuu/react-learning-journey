import Item from "./Item";
import AnotherButtons from "./AnotheButtons";
import { useState } from "react";
const Fooditems = ({ items }) => {
  let [activeItems, setActiveItem] = useState([]);

  let onByButton = (item, event) => {
    let newItem = [...activeItems, item];
    setActiveItem(newItem);
  };
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          bought={activeItems.includes(item)}
          handleByButtonClicked={(event) => {
            onByButton(item, event);
          }}
        >
          <AnotherButtons></AnotherButtons>
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
