import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ getCurrentPage, pageCount }) => {
  const handlePageClick = (data) => {
    getCurrentPage(data.selected + 1);
  };
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        marginPagesDisplayed={0}
        pageCount={pageCount > 500 ? 499 : 3}
        previousLabel="< Previous"
        containerClassName={"pagination justify-content-center my-3"}
        pageClassName={"page-item bg-info"}
        previousClassName={"page-item"}
        nextClassName={"page-item"}
        pageLinkClassName={"page-link bg-info"}
        nextLinkClassName={"page-link bg-info"}
        previousLinkClassName={"page-link bg-info"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link bg-info"}
        activeClassName={"active"}
      />
    </>
  );
};

export default Pagination;
