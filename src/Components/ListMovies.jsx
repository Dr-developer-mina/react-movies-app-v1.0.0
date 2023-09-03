import React from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const ListMovies = ({ movies , getCurrentPage , pageCount}) => {
  //   console.log(movies);

  return (
    <>
      <div className="row my-3 g-1">
        {movies.length > 0 ? (
          movies.map((movie) => {
            return <MovieCard movie={movie} key={movie.id} />;
          })
        ) : (
          <h1 className="text-danger m-5 text-center">No Movies To Show !!</h1>
        )}
      </div>
      <Pagination getCurrentPage={getCurrentPage} pageCount={pageCount}/>

    </>
  );
};

export default ListMovies;
