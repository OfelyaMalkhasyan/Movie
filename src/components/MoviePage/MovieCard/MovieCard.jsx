import React from 'react'
import "./MovieCard.css";

export default function MovieCard ({title, overview, vote_average,poster_path}){
    const imgUrl='https://www.themoviedb.org/t/p/w220_and_h330_face'+poster_path
    return (
        <div className='movie'>
            <img src={imgUrl} alt={title} />
            <div className='movie-info'>
                <h3>{title}</h3>
                <h3>{vote_average}</h3>
                
                <div className='movie-over'>
                    <h3>{overview}</h3>
                    
                  </div>
            </div>
        </div>
    )
}

