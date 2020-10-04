import { createSlice } from "@reduxjs/toolkit";
import User from "../../models/User";

const slice = createSlice({
  name: "user",
  initialState: Object.assign({}, new User({})),
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        ...JSON.parse(action.payload),
      };
    },
    logoutSuccess: (state, action) => {
      return { isAuthenticated: false };
    },
  },
});

export default slice.reducer;

// Actions

const { loginSuccess, logoutSuccess } = slice.actions;

export const login = ({ username, password }) => async (dispatch) => {
  try {
    // await api.post('/api/auth/login/', { username, password })
    console.log(new User({ username, password, isAuthenticated: true }));
    dispatch(
      loginSuccess(
        JSON.stringify(new User({ username, password, isAuthenticated: true }))
      )
    );
  } catch (e) {
    return console.error(e.message);
  }
};

export const logout = () => async (dispatch) => {
  try {
    // await api.post('/api/auth/logout/')
    return dispatch(logoutSuccess());
  } catch (e) {
    return console.error(e.message);
  }
};
