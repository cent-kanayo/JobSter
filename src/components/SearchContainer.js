import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SearchContainer";
import { FormRow, FormSelect } from "../components";
import {
  clearFilters,
  handleSearchForm,
} from "../features/alljobs/alljobsSlice";
const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { statusOptions, jobTypeOptions } = useSelector((store) => store.job);
  const allStatus = ["all", ...statusOptions];
  const jobType = ["all", ...jobTypeOptions];
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleSearchForm({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearFilters());
  };
  return (
    <Wrapper>
      <form className="form">
        <h4>Search form</h4>
        <div className="form-center">
          <FormRow
            type="text"
            name="search"
            value={search}
            handleChange={handleSearch}
          />
          <FormSelect
            labelText="status"
            type="text"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={allStatus}
          />
          <FormSelect
            labelText="type"
            type="text"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={jobType}
          />
          <FormSelect
            type="text"
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
