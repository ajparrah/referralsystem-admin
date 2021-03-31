import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit'; // import above
import { loginAPI } from '../../api/userAPI';

// #region Actions
export const startLogin = createAsyncThunk(
  'user/startLogin',
  async (credentials, { getState, requestId }) => {
    const { currentRequestId, loading } = getState().user;
    if (loading !== 'pending' || requestId !== currentRequestId) {
      return;
    }
    const { user, token } = await loginAPI(credentials);
    return {
      ...user,
      token,
    };
  },
);
// #endregion Actions

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: localStorage.getItem('userLogged') || null,
    loading: 'idle',
    currentRequestId: undefined,
    error: null,
  },
  reducers: {
    logout: (state) => {
      localStorage.setItem('userLogged');
      state.info = null;
      state.loading = 'idle';
      state.currentRequestId = undefined;
      state.error = null;
    },
    resetError: (state, action) => {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [startLogin.pending]: (state, action) => {
      const { meta } = action;
      if (state.loading === 'idle') {
        state.loading = 'pending';
        state.error = null;
        state.currentRequestId = meta.requestId;
      }
    },
    [startLogin.fulfilled]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.info = action.payload;
        state.currentRequestId = undefined;
        localStorage.setItem('userLogged', action.payload);
      }
    },
    [startLogin.rejected]: (state, action) => {
      const { requestId } = action.meta;
      if (state.loading === 'pending' && state.currentRequestId === requestId) {
        state.loading = 'idle';
        state.error = action.error.message;
        state.currentRequestId = undefined;
      }
    },
  },
});
export const { logout, resetError } = userSlice.actions;
export default userSlice.reducer;
