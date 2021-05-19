import React from 'react';

const Pagination = ({ itemsLength, itemsPerPage, handlePagination }) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(itemsLength / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination__ul">
      {pageNumbers.map((number) => {
        return (
          <li key={number} id={number} onClick={handlePagination}>
            {number}
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination
