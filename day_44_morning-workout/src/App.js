import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { SearchResults, searchResults } from './SearchResults';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [offset, setOffset] = useState(0);

  const url = `https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${searchQuery}&sroffset=${offset}`;

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.query.search);
    setSearchResults(data.query.search);
  }

  useEffect(() => {
    fetchData()
  }, [searchQuery, offset]);

  return (
    <div className="App">
      <h1>Morning Workout - React Wikipedia Search</h1>
      <SearchBar setSearchQuery={setSearchQuery} />
      <br />
      {searchQuery !== "" && searchResults
        ? (
          <>
            {/* {offset === 0 ? 'Previous results' : <button onClick={() => setOffset(offset === 0 ? offset : offset - 10)}>Previous 10 results</button>} */}
            <button disabled={offset === 0} onClick={() => setOffset(offset === 0 ? offset : offset - 10)}>Previous 10 results</button>
            {' '}
            <button onClick={() => setOffset(offset + 10)} >Next 10 results</button>
            <br />

            <SearchResults searchResults={searchResults} />
          </>)
        : ""
      }


    </div>
  );
}

export default App;
