import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState(null);
  const[splitted, setSplitted] = useState(null);

  const [nonrepetitive, setNonrepetitive] = useState(null);

  useEffect(()=> {

      axios.get("http://localhost:9000/testAPI").then((response) => {
        setData(response.data);
        let all_words = [];
        let sorted = [];
        for (let index = 0; index < response.data.length; index++) {
          const element = response.data[index].comment.split(" ");
          for (let index = 0; index < element.length; index++) {
            const word = element[index];
            all_words.push(word);
            if(!sorted.includes(word))
            {sorted.push(word)}
          }
        }

        setSplitted(all_words)
        setNonrepetitive(sorted)    
        
        
      });
    
  },[])



  return (
    <div className="App">
      <br />
      <br />
      <br />
          <h1>Data coming from API request</h1>
          <h1>{splitted && splitted.length}</h1>
          <h1>{nonrepetitive && nonrepetitive.length }</h1>
          <br />
          <br />
          {
              Data && Data.map((comment, index)=>
              <div key={index} className="comment">
                {comment.comment.split(" ").map((word, index)=>
                  <span key={index}>{word}</span>
                )
                }
              </div>
              )
          }
          
    </div>
  );
}

export default App;
