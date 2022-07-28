import customFetch from "../../util/axios";
export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, searchType, sort, page, searchStatus } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&pages=${page}`;
  if (search) {
    url = url + `&search=${search}`;
  }

  try {
    const resp = await customFetch.get(url);

    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue("There was an error");
  }
};

export const getStatsThunk = async (thunkAPI) => {
  try {
    const resp = await customFetch.get("/jobs/stats");
    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
