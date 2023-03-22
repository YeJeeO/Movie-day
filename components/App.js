import {useState } from 'react';
import Card from './Card';
import Search from './Search';
import Footer from './Footer';
import NotFind from './NotFind'

export default function App() {
  const [movieName, setMovieName] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [found, setFound]=useState("true");

  const getMovies = (movie) => {
    fetch(`https://www.omdbapi.com/?apikey=b2f63315&s=${movie}`)
      .then(res => res.json())
      .then(data => { 
        if(data.response==="False")
          setFound(data.response)
        else{
          setFound("True");
          setMovieList(data.Search);
        }
      })
      .catch(err => console.log(err.message));
  }

  const setMovie = (e) => {
    setMovieName(e.target.value);
  }

  const getMovieList = (e) => {
    if(e.key==='Enter'){
      getMovies(movieName);
    }
  }

  return (
    <>
      <div className='main_container'>
        <h1>Movie Day</h1>
      <div className="container my-5">
        <Search value={movieName} onChange={setMovie} onKeyPress={getMovieList}/><br/>
        <div className='movie_list container'>
          {
            (found==="False")?(<NotFind/>):movieList?.map((value, index) => (
              <Card prop={value} key={index} />
            ))
          }
        </div>
      </div>
      <br/><br/>
      <Footer/>
      </div>
    </>
  );
}


