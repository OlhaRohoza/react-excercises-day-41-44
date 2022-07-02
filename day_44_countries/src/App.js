import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { SearchBar } from './SearchBar';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Countries } from './Countries';
import { SearchResult } from './SearchResult';

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="App">
      <Router>
        <Link to="/" >HOME</Link>
        <br />
        <input name="search" onChange={(e) => setSearchQuery(e.target.value)} />
        <Link to={`/search/${searchQuery}`} >Search</Link>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/search/:name" element={<SearchResult />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
