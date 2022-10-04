import './App.css';
import { HooksComponent } from "./components/HooksComponent"
import { StateWithArray } from "./components/StateWithArray"
import { TitelChange } from "./components/TitelChange"
import { StateWithObject } from "./components/StateWithObject"
import { UseRef } from "./components/UseRef"
import { UseReducer } from "./components/UseReducer"

function App() {
  return (
    <>
      <HooksComponent />
      <StateWithArray/>
      {/* <TitelChange/> */}
      <StateWithObject/>
      <UseRef/>
      <UseReducer/>
    </>
  );
}

export default App;
