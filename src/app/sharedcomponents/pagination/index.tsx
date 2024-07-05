import { useState } from "react";

function usePagination({ totalPages }: { totalPages: number }) {
  const pageSize = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (number: number) => {
    setCurrentPage(number);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };


  const tableNumbering = (index: number) => {
     return (currentPage - 1) * pageSize + index + 1;
  }

  const Pagination = () => {
    return (
      <div className=" flex flex-row items-center justify-center w-fit gap-2 my-6 mx-auto">
        <button
          className="py-2 cursor-pointer hover:text-blue hover:font-medium"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        -
        <span>
          <span className="text-blue font-medium">{currentPage}</span> of <span>{totalPages}</span>
        </span>
        -
        <button
          className="py-2 cursor-pointer hover:text-blue hover:font-medium"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next Page
        </button>
      </div>
    );
  };

  return { Pagination, currentPage, pageSize, tableNumbering };
}

export default usePagination;
