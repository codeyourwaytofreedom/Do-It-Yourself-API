import { useEffect, useState } from "react";
import axios from "axios";
import "./statistics.css"

const Statistics = () => {

    const[splitted, setSplitted] = useState(null);
    const [nonrepetitive, setNonrepetitive] = useState(null);
  
    const [final_duals, setFinalduals] = useState(null);
  
    useEffect(()=> {
  
        axios.get("http://localhost:9000/testAPI").then((response) => {
          let all_words = [];
          let sorted = [];
          for (let index = 0; index < response.data.length; index++) {
            const element = response.data[index].comment.split(" ");
            for (let index = 0; index < element.length; index++) {
              const word = element[index].toLowerCase();
              all_words.push(word);
              if(!sorted.includes(word))
              {sorted.push(word)}
            }
          }
          let duals = [];
          for (let index = 0; index < sorted.length; index++) {
            let repeat = 0;
            for (let a = 0; a < all_words.length; a++) {
              if(sorted[index] === all_words[a])
              {repeat = repeat + 1}
            }
            if(repeat>4 && sorted[index].length >=3)
            { 
              console.log(sorted[index], repeat)
              duals.push({word: sorted[index], repetition: repeat})
            }
          }
          duals.sort((b,a) => a.repetition - b.repetition); // b - a for reverse sort
  
  
          setSplitted(all_words)
          setNonrepetitive(sorted)    
          setFinalduals(duals)
          
          
        });
      
    },[])


    return ( 
        <div className="statistics">
            {/* <h1>{splitted && splitted.length}</h1>
            <h1>{nonrepetitive && nonrepetitive.length }</h1> */}
                {
                final_duals && final_duals.map((dual, index)=>
                <div key={index} className="comment">
                  {dual.word}  {dual.repetition}
                </div>
                )
                }
        </div>
     );
}
 
export default Statistics;