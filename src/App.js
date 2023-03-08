import React from 'react';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from  "./components/Home/Home";
import Page1 from  "./components/Task1/Task1";
import Page2 from "./components/Task2/Task2";
import Page3 from "./components/Task3/Task3";
import Page4 from "./components/Task4/Task4";
import Page5 from "./components/Task5/Task5";

function App() {
  return (
      <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Routes>
              <Route path='/' exact element={<Home />}  />
              <Route path='/Task1' element={<Page1 />} />
              <Route path='/Task2' element={<Page2 />}  />
              <Route path='/Task3' element={<Page3 />}  />
              <Route path='/Task4' element={<Page4 />}  />
              <Route path='/Task5' element={<Page5 />}  />
        </Routes>  
      </div>
    </Router>
  );
}

export default App;

