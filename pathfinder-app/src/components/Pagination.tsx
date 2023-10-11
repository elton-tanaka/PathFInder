import React from "react";

type PaginationProps = {
  attractionsPerPage: number;
  totalAttractions: number;
  paginate: (pageNumber: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({
  attractionsPerPage,
  totalAttractions,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalAttractions / attractionsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container d-flex justify-content-center">
      <ul className="pagination pagination-lg">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
