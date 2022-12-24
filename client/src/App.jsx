import logo from './logo.svg';
import './App.css';

import Nav from './components/Nav/Nav';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';



import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {


  return (
    <BrowserRouter>
      <div className="App">
    
          {/* <div id="headingbox">
          <h1>Sirius -- find your best life</h1>
          </div> */}
          

        {/* </header> */}
        <Nav></Nav>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/auth' element={<Auth></Auth>}></Route>
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;
