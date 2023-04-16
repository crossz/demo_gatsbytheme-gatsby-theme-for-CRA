import { Post, Get } from "../../server";

const signIn = async (params) => await Post(`/signIn`, { ...params });
const signUp = async (params) => await Post(`/signUp`, { ...params });
const getBackPassword = async (params) =>
  await Post(`/forgetPassword`, { ...params });
const changePassword = async (params) =>
  await Post(`/auth/changePassword`, { ...params });
const getUserInfo = async (params) =>
  await Get(`/auth/users/info`, { ...params });
const updateUserInfo = async (params) =>
  await Post(`/auth/users/update`, { ...params });
const updatePhone = async (params) =>
  await Post(`/auth/updatePhone`, { ...params });
const updateEmail = async (params) =>
  await Post(`/auth/updateEmail`, { ...params });
const setLanguage = async (params) =>
  await Post(`/auth/users/setLanguage`, { ...params });

export const API = {
  signIn,
  signUp,
  getBackPassword,
  changePassword,
  getUserInfo,
  updateUserInfo,
  updatePhone,
  updateEmail,
  setLanguage,
};
