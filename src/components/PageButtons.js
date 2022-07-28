import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { setPage } from "../features/alljobs/alljobsSlice";
const PageButtons = () => {
  const { page, numOfPages } = useSelector((store) => store.allJobs);
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const dispatch = useDispatch();
  const prevPage = () => {
    let nextPage = page - 1;
    if (nextPage < 1) {
      nextPage = numOfPages;
    }
    dispatch(setPage(nextPage));
  };
  const nextPage = () => {
    let nextPage = page + 1;
    if (nextPage > numOfPages) {
      nextPage = 1;
    }
    dispatch(setPage(nextPage));
  };

  return (
    <Wrapper>
      <button className="prev-btn" type="button" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">
        {pages.map((pageNum) => {
          return (
            <button
              type="button"
              className={pageNum === page ? "pageBtn active" : "pageBtn"}
              onClick={() => dispatch(setPage(pageNum))}
              key={pageNum}
            >
              {pageNum}
            </button>
          );
        })}
      </div>
      <button className="next-btn" type="button" onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageButtons;
