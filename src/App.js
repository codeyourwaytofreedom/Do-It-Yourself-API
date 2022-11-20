import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [Data, setData] = useState(null);
  const [sorted, setSorted] = useState(null);

  useEffect(()=> {

      axios.get("http://localhost:9000/testAPI").then((response) => {
        setData(response.data);
        let all_words = [];
        let sorted = [];
        if(Data){
          for (let index = 0; index < Data.length; index++) {
            const element = Data[index].comment.split(" ");
            for (let index = 0; index < element.length; index++) {
              const word = element[index];
              all_words.push(word);
              if(!sorted.includes(word))
              {sorted.push(word)}
            }
          }
          setSorted(sorted.length)

          console.log(sorted.sort())
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
