import { useEffect, useState } from "react";
import axios from "axios";
import "./header.css";
import Header from "./header";
import Statistics from "./statistics";

function App() {
  const [feedback, setFeedback] = useState(null);
  const [url_sent, setUrl_sent] = useState(false);

  return (
    <div className="App">
       <Header 
                setFeedback={setFeedback} 
                feedback={feedback}
                setUrl_sent={setUrl_sent}
        />
       <Statistics 
                setFeedback={setFeedback} 
                feedback={feedback}
                url_sent={url_sent}
                setUrl_sent={setUrl_sent}
       />
       

    </div>
  );
}

export default App;
