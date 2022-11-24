import { useEffect, useState } from "react";
import axios from "axios";
import "./header.css";
import Header from "./header";
import Statistics from "./statistics";

function App() {
  const [feedback, setFeedback] = useState(null);

  return (
    <div className="App">
       <Header setFeedback={setFeedback} feedback={feedback}/>
       <Statistics setFeedback={setFeedback} feedback={feedback}/>
       

    </div>
  );
}

export default App;
