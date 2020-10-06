import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "user",
  initialState: {
      isAuthenticated:false
  },
  reducers: {
    loginSuccess: (state, action) => {
      return {
        ...state,
        ...action.payload,
          isAuthenticated:true
      };
    },
    logoutSuccess:(state, action)  => {
        return {
            isAuthenticated:false
        };
    },
  },
});



export const { loginSuccess, logoutSuccess } = slice.actions;

export default slice.reducer;