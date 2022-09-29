import './App.css';
import { HooksComponent } from "./components/HooksComponent"
import { StateWithArray } from "./components/StateWithArray"
import { TitelChange } from "./components/TitelChange"
import { StateWithObject } from "./components/StateWithObject"
import { UseRef } from "./components/UseRef"

function App() {
  return (
    <>
      <HooksComponent />
      <StateWithArray/>
      {/* <TitelChange/> */}
      <StateWithObject/>
      <UseRef/>
    </>
  );
}

export default App;
