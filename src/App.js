import React from "react";
import "./App.css";
import axios from 'axios';
import { API_KAY, BASE_URL } from './components/index.js'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        <h2></h2>
        <button onClick={() =>{}}>Click for Pictuer of the Day</button>
        <img></img>
      </p>
    </div>
  );
}

export default App;

