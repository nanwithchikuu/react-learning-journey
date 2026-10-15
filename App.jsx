import { useState } from "react";
import styles from "./App.module.css";
import AddButton from "./Components/Addbutton";
import DisplayButton from "./Components/DisplayButton";
function App() {
  let [textValue, settextvalue] = useState("");
  let showButton = (event) => {
    let valueText = event.target.innerText
    let updatevalue = textValue + valueText;
    settextvalue(updatevalue);
    if(valueText == "C") {
      settextvalue('')
    } else if  ( valueText == "=") {
      try {
        settextvalue(String(eval(textValue)))
      } catch {
        settextvalue("Error")
      }
    }else{
      console.log(updatevalue)
    }
  };
  return (
    <div className={styles.calculator} id="calculator">
      <DisplayButton newTextValue={textValue}></DisplayButton>
      <div className={styles.buttonsContainer}>
        <AddButton showButton={showButton}></AddButton>
      </div>
    </div>
  );
}

export default App;
