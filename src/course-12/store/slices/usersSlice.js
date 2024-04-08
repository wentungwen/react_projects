import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUsers";
import { removeUser } from "../thunks/removeUser";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    // we track isLoading and error in the components, not here!
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(addUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })
      .addCase(removeUser.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log(action)
        state.data = state.data.filter((user) => user.id !== action.payload.id);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      });
  },
});

export const usersReducer = usersSlice.reducer;
