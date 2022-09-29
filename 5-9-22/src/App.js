import logo from './logo.svg';
import './App.css';
import { ClassComponent } from './components/Component';
import { Button } from "./components/Button";
import { Login } from "./components/Login"

function App() {
  return (
    <div>
    <h1>This Is My First Project Of React</h1>
    <ClassComponent name="class component" />
    <Button />
    <Login />
    </div>
  );
}

export default App;
