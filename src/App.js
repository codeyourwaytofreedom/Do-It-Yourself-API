import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState(null);

  useEffect(()=> {

      axios.get("http://localhost:9000/testAPI").then((response) => {
        setData(response.data);
        for (let index = 0; index < Data.length; index++) {
          const element = Data[index].comment.split(" ");
          console.log(element)
          // console.log(response.data)
        }
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
          {
              Data && Data.map((comment, index)=>
              <div key={index}>{comment.comment}</div>
              )
          }
          
    </div>
  );
}

export default App;
