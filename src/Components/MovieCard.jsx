import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  // console.log(movie);
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="card">
          <div className="poster">
            <img
              src={`https://image.tmdb.org/t/p/w500/`+movie.poster_path}
              alt="move app img"
            />
          </div>
          <div className="details">
            <h2>
              {movie.original_title} <br />
              <span>{movie.release_date}</span>
            </h2>
            <div className="rating">
              <i className="fas fa-star" aria-hidden="true" />
              <i className="fas fa-star" aria-hidden="true" />
              <i className="fas fa-star" aria-hidden="true" />
              <i className="fas fa-star" aria-hidden="true" />
              <i className="far fa-star" aria-hidden="true" />
              <span>{movie.vote_average}</span>
            </div>
            <div className="tags">
              <span className="fantasy">{movie.vote_count}</span>
              <span className="mystery">Voted</span>
            </div>
            <div className="info">
              <p>
              {movie.overview}
              </p>
            </div>
            {/* <div className="cast">
      <h4>Cast</h4>
      <ul>
        <li>
          <img src="http://www.gstatic.com/tv/thumb/persons/73414/73414_v9_bb.jpg" alt='move app img'/>
        </li>
        <li>
          <img src="http://www.gstatic.com/tv/thumb/persons/25704/25704_v9_bb.jpg"  alt='move app img'/>
        </li>
        <li>
          <img src="http://www.gstatic.com/tv/thumb/persons/554/554_v9_bb.jpg"  alt='move app img'/>
        </li>
        <li>
          <img src="http://www.gstatic.com/tv/thumb/persons/8439/8439_v9_ba.jpg"  alt='move app img'/>
        </li>
      </ul>
    </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
