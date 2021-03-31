import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit'; // import above
// import { loginAPI } from '../../api/user';

// #region Actions
// export const startLogin = createAsyncThunk(
//   'user/startLogin',
//   async (credentials, { getState, requestId }) => {
//     //Login on server to get JWT
// });
// #endregion Actions

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: null,
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    login: (state, action) => {
      state.info = action.payload,
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.error = null;
    },
    logout: (state) => {
      state.info = null; // storage (auth.token) or null
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.error = null;
    },
  },
  extraReducers: {
    // [startLogin.pending]: (state, action) => {
      
    // },
    // [startLogin.fulfilled]: (state, action) => {
    //   // set session credential on storage (auth.token)
    // },
    // [startLogin.rejected]: (state, action) => {
      
    // },
  },
});
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
