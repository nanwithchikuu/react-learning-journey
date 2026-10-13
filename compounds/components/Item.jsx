import styles from "./Item.module.css";
const Item = ({ foodItems, handleByButtonClicked }) => {
  return (
    <li>
      <span className={styles["kg-weight"]}></span>
      {foodItems}
      <button
        className={`${styles.buttons} btn-solid theme-warning `}
        onClick={handleByButtonClicked}
        >buy{" "}
      </button>
    </li>
  );
};

export default Item;
