import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [joke, setJoke] = useState('');
  const [jokePartTwo, setPartTwo] = useState('');
  const url = 'https://v2.jokeapi.dev/joke/Any';

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.type === 'twopart') {
      setJoke(data.setup);
      setPartTwo(data.delivery);
    } else {
      setJoke(data.joke);
      setPartTwo("");
    }

  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="App">
      <h2>{joke}</h2>
      <h2 style={{ color: "red" }}>{jokePartTwo}</h2>
      <button onClick={() => fetchData()} >Change the joke</button>
    </div>
  );
}

export default App;
