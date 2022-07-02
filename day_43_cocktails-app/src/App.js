import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { CocktailMore } from './CocktailMore';
import { CocktailLess } from './CocktailLess';

function App() {
  const [cocktails, setCocktails] = useState(null);
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');

  // const url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${input}`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCocktails(data.drinks);
    console.log(data.drinks);
  }

  useEffect(() => {
    fetchData()
  }, [search])

  console.log(search);

  return (
    <div className="App">
      <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={() => setSearch(input)} >Search</button>
      </div>
      <div className='cocktails'>
        <h1>Cocktails app</h1>
        {search && (
          cocktails.map((cocktail, i) => (
            <CocktailLess cocktail={cocktail} />
          ))

        )}

      </div>
    </div>
  );
}

export default App;
