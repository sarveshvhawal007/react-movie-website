import './css/App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/pages/Home'
import Products from "./components/pages/Products";
import Service from "./components/pages/Service";


function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/service' element={<Service/>}/>

            </Routes>
        </Router>
    </div>
  );
}

export default App;
