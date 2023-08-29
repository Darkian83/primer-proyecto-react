import { useState } from "react";
import "./App.css";
import phrases from "./utils/data.json";
import { getRandomPhrase } from "./utils/getRandomphrase";
import { getRandomBackground } from "./utils/getRandomBackground";

function App() {
  const [phrase, setPhrase] = useState(
    "clik the button to get a fortune"
  );

  const [backGround, setBackGround] = useState(getRandomBackground());

  const [isloading, setIsloading] = useState(false);

  const handleRandomPharase = () => {
    setIsloading(true);
    setTimeout(() => {
      const newPhrase = getRandomPhrase(phrases);
      setPhrase(newPhrase.phrase);
      setBackGround(getRandomBackground());
      setIsloading(false);
    }, 1000);
  };

  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${backGround})` }}
    >
      <h1 className="container__title">Fortune Cookie</h1>

      {isloading ? (
        <p className="phrase">loading </p>
      ) : (
        <p className="phrase">{phrase}</p>
      )}
      <button className="button btn-2" onClick={handleRandomPharase}>
        Consult Fortune
      </button>
    </div>
  );
}

export default App;
