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
          <h1>{Data ? Data : 5}</h1>
    </div>
  );
}

export default App;
