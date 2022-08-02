import { logoutUser } from "./userSlice";
import customFetch, { checkForUnauthorizedResponse } from "../../util/axios";
import { clearValues } from "../job/jobSlice";
import { clearAllJobsState } from "../alljobs/alljobsSlice";

export const registerUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.post(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const updateUserThunk = async (url, user, thunkAPI) => {
  try {
    const resp = await customFetch.patch(url, user);
    return resp.data;
  } catch (error) {
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
export const clearStoreThunk = async (messegae, thunkAPI) => {
  try {
    thunkAPI.dispatch(logoutUser(messegae));
    thunkAPI.dispatch(clearValues());
    thunkAPI.dispatch(clearAllJobsState());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
