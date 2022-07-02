import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [films, setFilms] = useState([])
  // const [sorted, setSorted] = useState([]);
  const url = 'https://swapi.dev/api/films/?format=json';

  const fetchdData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setFilms(data.results.sort(function (a, b) {
      return a.episode_id - b.episode_id;
    }));
  }

  useEffect(() => {
    fetchdData()
  }, [])

  // useEffect(() => {
  //   const sortedFilms = films.;
  //   console.log(sortedFilms);
  //   setSorted(sortedFilms);

  // }, [films])




  return (
    <div className="App">
      <h1>STAR WARS</h1>
      <div className="films">

        {films && (
          films.map((film, index) =>

            <div className='film' key={index}>
              <h3>{film.title}. Episode {film.episode_id} </h3>
              <p> director: {film.director} </p>
              <p> release date: {film.release_date}</p>
              <p><i>{film.opening_crawl}</i></p>
              <p>{console.log(film)}</p>
            </div>

          ))
        }

      </div>
    </div>
  );
}

export default App;
