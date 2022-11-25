import { useEffect, useState } from "react";
import axios from "axios";
import "./header.css";
import Header from "./header";
import Statistics from "./statistics";

function App() {
  const [feedback, setFeedback] = useState(null);
  const [url_sent, setUrl_sent] = useState(false);
  const [errormessage, setErrormesagge] = useState(null)

  return (
    <div className="App">
       <Header 
                setFeedback={setFeedback} 
                feedback={feedback}
                setUrl_sent={setUrl_sent}
                setErrormesagge={setErrormesagge}
        />
       <Statistics 
                setFeedback={setFeedback} 
                feedback={feedback}
                url_sent={url_sent}
                setUrl_sent={setUrl_sent}
                errormessage={errormessage}
       />
       

    </div>
  );
}

export default App;
