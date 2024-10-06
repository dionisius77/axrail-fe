import { createSlice } from "@reduxjs/toolkit";
import { User } from "_interfaces/user.interfaces";

export interface AuthStateI {
  loading: boolean;
  accessToken?: string;
  user?: User;
  error?: string;
  success: boolean;
}

const initialState: AuthStateI = {
  loading: false,
  accessToken: undefined,
  user: undefined,
  error: undefined,
  success: false,
};

type LoginInfoPayload = {
  payload: { user: User; token: string };
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveTokenAuth: (state: AuthStateI, { payload }: LoginInfoPayload) => {
      state.accessToken = payload.token;
      state.user = payload.user;
    },
    deleteTokenAuth: (state) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { saveTokenAuth, deleteTokenAuth } = authSlice.actions;

export default authSlice.reducer;

