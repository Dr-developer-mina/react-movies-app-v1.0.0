import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Nav from "./Components/Nav";
import ListMovies from "./Components/ListMovies";
import Footer from "./Components/Footer";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  //To Get Api Data
  const getMovies = async () => {
    const apiResponse = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=90f9e6ab3239b8c013b6c070c5057c9e&&language=en-US"
    );
    setMovies(apiResponse.data.results);
    setPageCount(apiResponse.data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, []);
  // console.log(movies)

  //To Search API
  const searchMovies = async (keyWord) => {
    if (keyWord === "") {
      getMovies();
    } else {
      const searchResponse = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=90f9e6ab3239b8c013b6c070c5057c9e&&query=${keyWord}&language=en-US`
      );
      setMovies(searchResponse.data.results);
      setPageCount(searchResponse.data.total_pages);

    }
  };
// to get current page number 
  const getCurrentPage = async (pageNumber) => {
    const apiResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=90f9e6ab3239b8c013b6c070c5057c9e&&language=en-US&page=${pageNumber}`
    );
    setMovies(apiResponse.data.results);
    setPageCount(apiResponse.data.total_pages);

  };

  return (
    <>
      <Nav searchMovies={searchMovies} />
      <div className="container-fluid">
        <div className="row g-1">
          <ListMovies movies={movies} getCurrentPage={getCurrentPage} pageCount={pageCount}/>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
