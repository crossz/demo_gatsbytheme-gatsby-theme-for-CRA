import store from 'store'
const PREFIX = 'platform_'
const SUFFIX = '_deadtime'

export const APP_AUTH = {
  REDIRECT_AFTER_SIGNIN: 'REDIRECT_AFTER_SIGNIN',
  URL_SIGNIN: '/signin',
}

// import history from '../utils/history'

const formatKey = (key) => `${PREFIX}${key}`

/**
 * 设置
 * @param {string} key 关键字
 * @param {*} value 值
 * @param {number} expires 过期时间
 */
export const setStore = (key, value, expires) => {
  store.set(formatKey(key), value)

  if (expires) {
    store.set(formatKey(key + SUFFIX), Date.parse(new Date()) + expires * 1000)
  }
}

/**
 * 获取
 * @param {string} key 关键字
 */
export const getStore = (key) => {
  return store.get(formatKey(key))
}

/**
 * 是否过期
 * @param {string} key 关键字
 */
export const isExpired = (key) => {
  return (getExpiration(key) || 0) - Date.parse(new Date()) <= 2000
}

/**
 * 获取到期时间
 * @param {string} key 关键字
 */
const getExpiration = (key) => {
  return getStore(key + SUFFIX)
}

/**
 * 移除Token
 * @param {string} key 关键字
 */
export const removeToken = (key) => {
  store.remove(formatKey(key))
  removeExpiration(key)
}

/**
 * 移除Token
 * @param {string} key 关键字
 */
export const removeStore = (key) => {
  store.remove(formatKey(key))
}

/**
 * 移除Token到期时间
 * @param {string} key 关键字
 */
export const removeExpiration = (key) => {
  store.remove(formatKey(key + SUFFIX))
}

// 清空登陆态
export const userRemove = () => {
  removeToken('token')
  removeToken('refreshToken')
  removeToken('userInfo')
}
