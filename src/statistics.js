import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessBishop, faChessKnight, faChessPawn, faChessQueen } from "@fortawesome/free-solid-svg-icons";

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
            {/* <h3>{splitted && splitted.length}</h3>
            <h3>{nonrepetitive && nonrepetitive.length }</h3> */}
            <div className="statistics_summary">
              <div className="statistics_summary_title">Top Ten</div>
                {
                  final_duals && final_duals.slice(0,10).map((dual, index)=>
                  <div key={index} className="statistics_summary_item">
                    <div className="statistics_summary_item_icon">
                      {
                        index === 0 ? <FontAwesomeIcon icon={faChessQueen} size={"4x"} color={"orange"}/> : 
                        index === 1 ? <FontAwesomeIcon icon={faChessKnight} size={"3x"} color={"yellowgreen"}/> :
                        index === 2 ? <FontAwesomeIcon icon={faChessBishop} size={"2x"} color={"salmon"}/> :
                        <FontAwesomeIcon icon={faChessPawn} size={"2xl"} color={"gray"}/>
                      }
                      
                    </div>
                    <div className="statistics_summary_item_word"
                    style={{color:
                      index === 0 ? "orange":
                      index === 1 ? "yellowgreen":
                      index === 2 ? "salmon":
                      "gray"
                    }}
                    
                    >{dual.word[0].toUpperCase()}{dual.word.substring(1)}</div>
                    <div className="statistics_summary_item_count"
                    style={{color:
                      index === 0 ? "orange":
                      index === 1 ? "yellowgreen":
                      index === 2 ? "salmon":
                      "gray"
                    }}
                    >{dual.repetition}</div>
                      
                  </div>
                )
                }
            </div>
            <div className="statistics_chart">
                {
                final_duals && final_duals.slice(0,10).map((dual, index)=>
                <div key={index} className="statistics_chart_comment" 
                
                    style={{height: dual.repetition*5,
                    backgroundColor:
                    index === 0 ? "orange":
                      index === 1 ? "yellowgreen":
                      index === 2 ? "salmon":
                      "gray"
                    }}>
                </div>
                )
                }
            </div>
            <div className="statistics_chart_round">
              Hello
            </div>
                
        </div>
     );
}
 
export default Statistics;