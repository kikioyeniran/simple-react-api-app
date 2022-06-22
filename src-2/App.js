import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  // const name = 'Jason';
  const name = null;
  const [counter, setCounter] = useState(0);
  useEffect(() => {
      // setCounter(100);
  }, [counter])
  return (
    <div className="App">
      <h1>Hello React</h1>

      { name ? (
        <>
          <h1>{name}</h1>
        </>
      ) : (
        <>
          <h1>test</h1>
          <h2>there is no name</h2>
        </>
      )

      }

      <button onClick={() => {
        setCounter((prevCount) => prevCount - 1)
      }}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => {
        setCounter((prevCount) => prevCount + 1)
      }}>+</button>
    </div>
  );
}

export default App;
