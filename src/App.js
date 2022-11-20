import { useEffect, useState } from "react";
import axios from "axios";
import "./header.css";
import Header from "./header";
import Statistics from "./statistics";

function App() {

  return (
    <div className="App">
       <Header/>
       <Statistics/>
       

    </div>
  );
}

export default App;
