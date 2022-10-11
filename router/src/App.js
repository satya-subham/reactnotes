import './App.css';
import { Home } from "./router-components/Home"
import { About } from "./router-components/About"
import { Contact } from "./router-components/Contact"
import { Route, Routes } from "react-router-dom"
import { Header } from './Header';
import { Content } from './Content';

function App() {
  return (
    <>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/about/:id' element={<Content/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  );
}

export default App;
