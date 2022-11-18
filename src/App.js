import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState(null);

  useEffect(()=> {

      axios.get("http://localhost:9000/testAPI").then((response) => {
        setData(response.data);
      });
    
  },[])

  return (
    <div className="App">
      <br />
      <br />
      <br />
          <h1>Data coming from API request</h1>
          <br />
          <br />
          <h2 style={{color:"blue"}}>{Data ? Data : 5}</h2>
    </div>
  );
}

export default App;
