import { useState } from "react";

let adjustinterval = undefined;

function App() {
  const [show, setShow] = useState(0);
  const [started, setStarted] = useState(false);

  let start = () => {
    adjustinterval = setInterval(() => {
      // setShow(show + 1);

      setShow((x) => x + 2);
    }, 1000);
    setStarted(true);
  };
  const stopp = () => {
    clearInterval(adjustinterval);
    setStarted(false);
  };

  const reset = () => {
    clearInterval(adjustinterval);
    setShow(0);
    setStarted(false);
  };

  return (
    <>
      <h1>Start Stop Watch</h1>
      <p>{show}</p>
      <button disabled={started} onClick={start}>
        Start
      </button>
      <button onClick={stopp}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
