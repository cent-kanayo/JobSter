import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChartsContainer from "../../components/ChartsContainer";
import Loading from "../../components/Loading";
import StatsContainer from "../../components/StatsContainer";
import { getStats } from "../../features/alljobs/alljobsSlice";

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStats());
  }, []);

  if (isLoading) {
    return <Loading center />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
