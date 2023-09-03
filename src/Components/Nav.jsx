import React from "react";

const Nav = ({ searchMovies }) => {
  const onSearch = (word) => {
    searchMovies(word);
  };
  // console.log(searchMovies);
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand text-info fs-2 fw-bolder p-2">Movies World <i className="fa-solid fa-film"></i></a>
          <form className="d-flex" role="search">
            <input
              onChange={(e) => onSearch(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            {/* <button className="btn btn-outline-info" type="submit">
              Search
            </button> */}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
