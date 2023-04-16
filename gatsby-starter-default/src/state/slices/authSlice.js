import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API } from "../api";
import { getStore, setStore, userRemove } from "../../utils/auth";

// 登陆
export const signIn = createAsyncThunk(
  "auth/signIn",
  async (params, thunkAPI) => {
    const response = await API.signIn(params);
    return response.data;
  }
);
// 注册
export const signUp = createAsyncThunk(
  "auth/signUp",
  async (params, thunkAPI) => {
    const response = await API.signUp(params);
    return response.data;
  }
);
// 找回密码
export const getBackPassword = createAsyncThunk(
  "auth/getBackPassword",
  async (params, thunkAPI) => {
    const response = await API.getBackPassword(params);
    return response.data;
  }
);
// 修改密码
export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (params, thunkAPI) => {
    const response = await API.changePassword(params);
    return response.data;
  }
);

// 获取用户信息
export const getUserInfo = createAsyncThunk(
  "auth/getUserInfo",
  async (params, thunkAPI) => {
    const response = await API.getUserInfo();
    return response.data;
  }
);
// 编辑用户信息
export const updateUserInfo = createAsyncThunk(
  "auth/updateUserInfo",
  async (params, thunkAPI) => {
    const response = await API.updateUserInfo(params);
    return response.data;
  }
);
// 设置用户语言
export const setLanguage = createAsyncThunk(
  "auth/setLanguage",
  async (params, thunkAPI) => {
    await API.setLanguage(params);
    return params?.language;
  }
);
// 更新手机号
export const updatePhone = createAsyncThunk(
  "auth/updatePhone",
  async (params, thunkAPI) => {
    const response = await API.updatePhone(params);
    return response.data;
  }
);
// 更新邮箱
export const updateEmail = createAsyncThunk(
  "auth/updateEmail",
  async (params, thunkAPI) => {
    const response = await API.updateEmail(params);
    return response.data;
  }
);

const initialState = {
  userInfo: getStore("userInfo") || null,
  errorStatus: null,
  signInStatus: "",
  signUpStatus: "",
  userInfoStatus: "",
  updateUserInfoStatus: "",
  getBackPasswordStatus: "",
  changePasswordStatus: "",
  updatePhoneStatus: "",
  updateEmailStatus: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signOut(state) {
      userRemove();
      state.userInfo = null;
    },
    changeUserInfo(state, action) {
      state.userInfo = { ...state.userInfo, ...action.payload };
      setStore("userInfo", state.userInfo);
    },
    setErrorStatus(state, action) {
      state.errorStatus = action.payload;
    },
  },
  extraReducers: (builder) => {
    // 登陆
    builder.addCase(signIn.pending, (state, action) => {
      state.signInStatus = "pending";
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.signInStatus = "fulfilled";
      const { token, refreshToken, expire, refreshExpire } = action.payload;
      setStore("token", token, expire);
      setStore("refreshToken", refreshToken, refreshExpire);
    });
    builder.addCase(signIn.rejected, (state, action) => {
      state.signInStatus = "rejected";
    });
    // 注册
    builder.addCase(signUp.pending, (state, action) => {
      state.signUpStatus = "pending";
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.signUpStatus = "fulfilled";
      const { token, refreshToken, expire, refreshExpire } = action.payload;
      setStore("token", token, expire);
      setStore("refreshToken", refreshToken, refreshExpire);
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.signUpStatus = "rejected";
    });
    // 找回密码
    builder.addCase(getBackPassword.pending, (state, action) => {
      state.getBackPasswordStatus = "pending";
    });
    builder.addCase(getBackPassword.fulfilled, (state, action) => {
      state.getBackPasswordStatus = "fulfilled";
    });
    builder.addCase(getBackPassword.rejected, (state, action) => {
      state.getBackPasswordStatus = "rejected";
    });
    // 修改密码
    builder.addCase(changePassword.pending, (state, action) => {
      state.changePasswordStatus = "pending";
    });
    builder.addCase(changePassword.fulfilled, (state, action) => {
      state.changePasswordStatus = "fulfilled";
    });
    builder.addCase(changePassword.rejected, (state, action) => {
      state.changePasswordStatus = "rejected";
    });
    // 获取用户信息
    builder.addCase(getUserInfo.pending, (state, action) => {
      state.userInfoStatus = "pending";
    });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      if (!action.payload) return;
      state.userInfo = action.payload;
      state.userInfoStatus = "fulfilled";
      setStore("userInfo", action.payload);
    });
    builder.addCase(getUserInfo.rejected, (state, action) => {
      state.userInfoStatus = "fulfilled";
    });
    // 更新用户信息
    builder.addCase(updateUserInfo.pending, (state, action) => {
      state.updateUserInfoStatus = "pending";
    });
    builder.addCase(updateUserInfo.fulfilled, (state, action) => {
      state.updateUserInfoStatus = "fulfilled";
      if (!action.payload) return;
      state.userInfo = action.payload;
      setStore("userInfo", action.payload);
    });
    builder.addCase(updateUserInfo.rejected, (state, action) => {
      state.updateUserInfoStatus = "rejected";
    });
    // 设置用户语言
    builder.addCase(setLanguage.fulfilled, (state, action) => {
      state.userInfo.language = action.payload;
      setStore("userInfo", state.userInfo);
    });
    // 更新手机号
    builder.addCase(updatePhone.pending, (state, action) => {
      state.updatePhoneStatus = "pending";
    });
    builder.addCase(updatePhone.fulfilled, (state, action) => {
      state.updatePhoneStatus = "fulfilled";
      const { arg } = action.meta;
      state.userInfo = { ...state.userInfo, ...arg };
    });
    builder.addCase(updatePhone.rejected, (state, action) => {
      state.updatePhoneStatus = "rejected";
    });
    // 更新邮箱
    builder.addCase(updateEmail.pending, (state, action) => {
      state.updateEmailStatus = "pending";
    });
    builder.addCase(updateEmail.fulfilled, (state, action) => {
      state.updateEmailStatus = "fulfilled";
      const { arg } = action.meta;
      state.userInfo = { ...state.userInfo, ...arg };
    });
    builder.addCase(updateEmail.rejected, (state, action) => {
      state.updateEmailStatus = "rejected";
    });
  },
});

export const { signOut, changeUserInfo, setErrorStatus } = authSlice.actions;
export default authSlice.reducer;
