import './App.css';
import { HooksComponent } from "./components/HooksComponent"
import { StateWithArray } from "./components/StateWithArray"
// import { TitelChange } from "./components/TitelChange"
import { StateWithObject } from "./components/StateWithObject"
import { UseRef } from "./components/UseRef"
import { UseReducer } from "./components/UseReducer"
import { CostumeHook } from "./components/costumehook/CostumeHook"
import { RefOne } from "./components/costumehook/RefOne"
import { RefTwo } from "./components/costumehook/RefTwo"

function App() {
  return (
    <>
      <HooksComponent />
      <StateWithArray/>
      {/* <TitelChange/> */}
      <StateWithObject/>
      <UseRef/>
      <UseReducer/>
      <CostumeHook/>
      <RefOne/>
      <RefTwo/>
    </>
  );
}

export default App;
