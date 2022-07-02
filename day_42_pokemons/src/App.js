import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Pokemon } from './Pokemon';

function App() {
  const [pokemons, setPokemons] = useState('');
  const [offset, setOffset] = useState(0);
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=5`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setPokemons(data.results);
  }

  useEffect(() => {
    fetchData();
  }, [offset])

  return (
    <div className="App">
      <div className='buttons'>
        <button onClick={() => setOffset(offset === 0 ? offset : offset - 5)}>Previous 5 pokemons</button>
        <button onClick={() => setOffset(offset + 5)}>Next 5 pokemons</button>

      </div>

      <div className='pokemons'>

        {pokemons && pokemons.map((one, index) => (
          <Pokemon pokemon={one} key={index} />
        ))}
      </div>

    </div>
  );
}

export default App;
