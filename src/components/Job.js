import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import moment from "moment";
import {
  FaLocationArrow,
  FaCalendarAlt,
  FaBriefcase,
  FaRegCalendarAlt,
} from "react-icons/fa";
import JobInfo from "./JobInfo";
import {
  showLoading,
  closeLoading,
  getAllJobs,
} from "../features/job/alljobsSlice";
const Job = ({
  _id,
  company,
  status,
  jobLocation,
  jobType,
  position,
  createdAt,
}) => {
  const dispatch = useDispatch();
  const date = moment(createdAt).format("MMM Do, YYYY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />

          <div className={`status ${status}`}>{status}</div>
        </div>
        <footer>
          <div className="actions">
            <Link
              to="/add-job"
              className="btn edit-btn"
              onClick={() => console.log("editing")}
            >
              edit
            </Link>
            <button
              className="btn delete-btn"
              onClick={() => console.log("delete item")}
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;