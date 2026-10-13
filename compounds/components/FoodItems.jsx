import Item from "./Item";
import AnotherButtons from "./AnotheButtons";
const Fooditems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItems={item}
          handleByButtonClicked={() => console.log(`${item} being bought`)}
        >
          <AnotherButtons></AnotherButtons>
        </Item>
      ))}
    </ul>
  );
};
export default Fooditems;
