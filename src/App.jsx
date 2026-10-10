import styles from "./App.module.css";
import AddButton from "./Components/Addbutton";
import DisplayButton from "./Components/DisplayButton";
function App() {
  return (
    <div className={styles.calculator} id="calculator">
      <DisplayButton></DisplayButton>
      <div className={styles.buttonsContainer}>
        <AddButton></AddButton>
      </div>
    </div>
  );
}

export default App;
