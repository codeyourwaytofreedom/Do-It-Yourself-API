import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faChessBishop, faChessKnight, faChessPawn, faChessQueen } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";
import "./statistics.css"

const Statistics = ({url_sent, feedback,setUrl_sent}) => {

    /* const[splitted, setSplitted] = useState(null);
    const [nonrepetitive, setNonrepetitive] = useState(null); */
    
    const color1 = "orange";
    const color2 = "yellowgreen";
    const color3 = "salmon";

    const [all_comments, setAllcomments] = useState([]);
  
    const [final_duals, setFinalduals] = useState(null);
    const [clicked_word, setClickedword] = useState(null);

    useEffect(()=> {
      console.log("from statistics",feedback)
    })
  
    useEffect(()=> {   
      if(feedback && feedback.data.length !== 0) 
      {
        setUrl_sent(false)
        setAllcomments(feedback.data)
        let all_words = [];
          let sorted = [];

          for (let index = 0; index < feedback.data.length; index++) {
            const element = feedback.data[index].comment.split(" ");
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
              //console.log(sorted[index], repeat)
              duals.push({word: sorted[index], repetition: repeat})
            }
          }
          duals.sort((b,a) => a.repetition - b.repetition); // b - a for reverse sort
          //setSplitted(all_words)
          /* setNonrepetitive(sorted)*/    
          setFinalduals(duals) 
          setClickedword(duals[0].word)
      }
      
      if(feedback && feedback.data.length ===0)
      {
        console.log("burada sorun")
        setUrl_sent(false)
        alert("No comment found")
      }

      else{

        axios.get("http://localhost:9000/testAPI").then((response) => 
        {
          let all_words = [];
          let sorted = [];

          setAllcomments(response.data)
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
              //console.log(sorted[index], repeat)
              duals.push({word: sorted[index], repetition: repeat})
            }
          }
          duals.sort((b,a) => a.repetition - b.repetition); // b - a for reverse sort
          //setSplitted(all_words)
          /* setNonrepetitive(sorted)*/    
          setFinalduals(duals) 
          setClickedword(duals[0].word)
        })      
      }
    },[feedback])

    return ( 
        <div className="statistics">
            {/* <h3>{splitted && splitted.length}</h3>
            <h3>{nonrepetitive && nonrepetitive.length }</h3> */}
            <div className="statistics_summary">
              <div className="statistics_summary_title">Top Ten</div>
                {
                  final_duals && final_duals.slice(0,10).map((dual, index)=>
                  <div key={index} className="statistics_summary_item" onClick={()=> setClickedword(dual.word)}>
                    <div className="statistics_summary_item_icon">
                      {
                        index === 0 ? <FontAwesomeIcon icon={faChessQueen} size={"4x"} color={color1}/> : 
                        index === 1 ? <FontAwesomeIcon icon={faChessKnight} size={"3x"} color={color2}/> :
                        index === 2 ? <FontAwesomeIcon icon={faChessBishop} size={"2x"} color={color3}/> :
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
                        index === 0 ? color1:
                        index === 1 ? color2:
                        index === 2 ? color3:
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
                    style={{height: 200+dual.repetition*3,
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
              <div className="statistics_chart_round_title">Comments including the word "{clicked_word && clicked_word[0].toUpperCase()+clicked_word.substring(1)}"</div>
              <div className="statistics_chart_round_comments">             
                {all_comments && all_comments.filter((comment)=> comment.comment.includes(clicked_word)).map((comment,index)=> 
                        <div className="statistics_chart_round_comments_comment">
                          <div><FontAwesomeIcon icon={faCaretRight} color={index % 2 === 0 ? "black" : "red"} size={"2x"} /></div>
                          <div id="comment-text" style={{borderLeft:index % 2 === 0 ? "3px solid black" : "3px solid red" }}>
                            {comment.comment[0].toUpperCase()+comment.comment.substring(1)}
                          </div>
                        </div>
                )}
              </div>

            </div>
            
            {url_sent ? 
                            <div className="loading_modal">
                                    <img src="https://media.tenor.com/-J3rO8bFMLsAAAAi/timer-sablier.gif" alt="Timer Sablier Sticker - Timer Sablier Stickers"></img>
                            </div> 
                      : null
            }
        </div>
     );
}
 
export default Statistics;