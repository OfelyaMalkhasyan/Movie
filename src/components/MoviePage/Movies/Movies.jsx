import React, {useState, useEffect} from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './Movies.css';
import NavBar from '../../LoginPage/NavBar';

 const MOVIES_API="https://api.themoviedb.org/3/movie/popular?api_key=39be42783bcc48ec35bdf13f60e8f2ae&language=en-US&page=1"

export default function Movies (){
     const [movies, setMovies]=useState([]);
      
     useEffect(()=>{
         fetch(MOVIES_API)
         .then((res)=>res.json())
         .then((data)=>{
             setMovies(data.results)
         })
     },[]

     );


    return (
       <>
       <NavBar/>
        <div className='movie-container'>
            {movies.length > 0 && movies.map((movie)=>(<MovieCard key={movie.id} {...movie}/>))}
        </div>
        </>
    )
}