import styles from "./AddButtons.module.css";

const AddButtons = ({ amit }) => {
  return (
    <input
      className={styles.btn}
      type="text"
      placeholder="Enter The Food Items"
      onChange={amit}
    />
  );
};

export default AddButtons;