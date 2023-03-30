import Cookies from 'js-cookie'
import { enUS, zhCN, zhTW } from 'date-fns/locale'

export const DEFAULT_LANG = 'zh-HK'

export const LANGUAGE_LIST = [
  {
    lang: 'zh-HK',
    shotLang: 'hk',
    suffix: 'Hk',
    label: '繁體中文',
    shotLabel: '繁',
    dateFns: zhTW,
  },
  {
    lang: 'zh-CN',
    shotLang: 'cn',
    suffix: 'Cn',
    label: '简体中文',
    shotLabel: '简',
    dateFns: zhCN,
  },
  {
    lang: 'en',
    shotLang: 'en',
    suffix: 'En',
    label: 'English',
    shotLabel: 'En',
    dateFns: enUS,
  },
]

export const getLang = () => {
  const curLang = Cookies.get('lang')

  const lang = curLang || DEFAULT_LANG

  return lang
}
