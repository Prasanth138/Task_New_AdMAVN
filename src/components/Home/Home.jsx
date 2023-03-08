import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <div className="container">
      <h1>AdMAVIN Task</h1>
      <ul>
        <li><Link to="/Task1">Task 1</Link></li>
        <li><Link to="/Task2">Task 2</Link></li>
        <li><Link to="/Task3">Task 3</Link></li>
        <li><Link to="/Task4">Task 4</Link></li>
        <li><Link to="/Task5">Task 5</Link></li>
      </ul>
    </div>
  )
}

export default Home;