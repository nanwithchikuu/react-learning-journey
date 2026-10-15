import styles from "./Display.module.css";

const DisplayButton = ({newTextValue}) => {
  return <input className={styles.display} type="text" value={newTextValue} readOnly />;
};

export default DisplayButton;
