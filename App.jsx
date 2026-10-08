import Heading from "./compounds/Heading";
import Slogan from "./compounds/Slogan";
import CurrentTime from "./compounds/CurrentTime";
function App() {
  return (
    <center className="heading-name">
      <Heading></Heading>
      <Slogan></Slogan>
      <CurrentTime></CurrentTime>
    </center>
  );
}

export default App;
