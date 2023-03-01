import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connect: false,
  firstName: null,
  lastName: null,
  token: null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setLogin: (state, action) => {
      const { connect, token } = action.payload;
      state.connect = connect;
      state.token = token;
      sessionStorage.setItem("token", token);
    },
    checkSession: (state, action) => {
      state.token = action.payload;
      state.connect = true;
    },
    setDataUser: (state, action) => {
      const { firstName, lastName } = action.payload;
      state.firstName = firstName;
      state.lastName = lastName;
    },
    setLogout: (state) => {
      state.connect = false;
      state.firstName = null;
      state.lastName = null;
      state.token = null;
      sessionStorage.removeItem("token");
    },
  },
});

export default userSlice.reducer;
export const { setLogin, setDataUser, checkSession,setLogout } = userSlice.actions;