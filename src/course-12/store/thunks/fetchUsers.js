import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// pending, fulfilled, and rejected are actions that are generated by the createAsyncThunk function from the Redux Toolkit.
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  await pause(1000);
  return response.data;
});

// Helper funciton for development
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { pause };