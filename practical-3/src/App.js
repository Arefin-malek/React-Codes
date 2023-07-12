import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import Navbar from '../src/Components/Navbar/Navbar'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path = "/" element = {<Home/> }> </Route>
        <Route exact path = "/contact" element = {<Contact/>}> </Route>
        <Route exact path = "/about" element = {<About/> }> </Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
