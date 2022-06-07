import Footer from "/Users/mikellebrown/Desktop/front_end_mentor/react-advice-generator/src/images/pattern-divider-desktop.svg";
import Dice from "/Users/mikellebrown/Desktop/front_end_mentor/react-advice-generator/src/images/icon-dice.svg";
import "./App.css";

import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [quoteId, setQuoteId] = useState("");
  const [_isLoaded, setIsLoaded] = useState(false);
  const [_error, setError] = useState("");

  function getData() {
    const url = "https://api.adviceslip.com/advice";

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setQuote(result.slip.advice);
          setQuoteId(result.slip.id);
          console.log(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <div className="advice-container">
        <span className="advice-number">ADVICE #{quoteId}</span>
        <span className="quote">"{quote}"</span>
        <img src={Footer} alt="" className="footer-container"></img>
        <button className="btn" onClick={() => getData()}>
          <img src={Dice}></img>
        </button>
      </div>
    </div>
  );
}

export default App;
