import React from "react";
import "./Paginations.styles.scss";

export default function Pagination({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  prevPage,
  lastPage,
  nextPage,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="nav">
      <ul>
        <button disabled={currentPage === 1} onClick={() => prevPage()}>
          <ion-icon name="arrow-back-circle-outline"></ion-icon>
        </button>
        {pageNumbers.map((number) => (
          <a href="!#" className="page link" onClick={() => paginate(number)}>
            <li className="page-item" key={number}>
              {number}
            </li>
          </a>
        ))}
        <button disabled={currentPage === lastPage} onClick={() => nextPage()}>
          <ion-icon name="arrow-forward-circle-outline"></ion-icon>
        </button>
      </ul>
    </div>
  );
}
