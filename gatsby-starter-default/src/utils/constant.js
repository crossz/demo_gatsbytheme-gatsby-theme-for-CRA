import {
  MOBILE_REGEX_HK,
  MOBILE_REGEX_CN,
  MOBILE_REGEX_MO,
  ID_REGEX_CN,
  ID_REGEX_HK,
  ID_REGEX_MO,
  PASSPORT_REGEX,
} from "./regex";
// import { formatDialingCode } from './index'
export const PROMOTION_CODE = "NEW330";
export const HEADER_HEIGHT = 10;
export const MOBILE_HEADER_HEIGHT = 8;
export const FOOTER_HEIGHT = 70;
export const LABEL_WIDTH = 20;
export const MOBILE_LABEL_WIDTH = 12;
export const INPUT_WIDTH = 30;
export const MOBILE_INPUT_WIDTH = 25.375;
// 订单过期时间
export const PAY_EXPIRED_TIME = 2 * 60 * 60 * 1000;
// 验证码倒计时
export const GET_CODE_EXPIRED_TIME = 2 * 60 * 1000;
export const AVAILABLE_MONTHS = 2;
export const LATER_DISABLE_DAYS = 3;
export const SERVICE_CHARGE_RATE = 0.035;
// export const SERVICE_PHONE = formatDialingCode('852') + '3613 0533'
// export const SERVICE_PHONE_02 = formatDialingCode('852') + '3613 0536'
export const SERVICE_EMAIL = "info@take2.health";
export const SERVICE_EMAIL_02 = "customer.support@take2.health";
// export const SERVICE_WHATSAPP = formatDialingCode('852') + '5377 0823'
export const DATE_FORMAT = "yyyy-MM-dd";
export const DATE_FORMAT_WITHOUT_CONNECT = "yyyyMMdd";
export const BIRTHDAY_FORMAT = "yyyy/MM/dd";
export const OLD_BIRTHDAY_FORMAT = "MM.dd.yyyy";
export const DAY_OF_WEEK = "eeee";
export const DATE_FORMAT_WITH_WEEK = `yyyy-MM-dd(${DAY_OF_WEEK})`;
export const DATE_FORMAT_WITH_TIME = "yyyy-MM-dd HH:mm";
export const DATABASE_DATE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
export const DATABASE_DATE_TIMEZONE_TIME_FORMAT = "yyyy-MM-dd HH:mm:ssXXXX";
export const TIMEZONE = "+0800";
export const TIME_SLICE = "HH:mm";
export const WEEK_LIST = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export const CUSTOM_BREAKPOINTS = {
  md: 960,
};

export const DIALING_CODES = [
  {
    label: "form.phone_type_list.0",
    value: "852",
    regex: MOBILE_REGEX_HK,
  },
  {
    label: "form.phone_type_list.1",
    value: "086",
    regex: MOBILE_REGEX_CN,
  },
  {
    label: "form.phone_type_list.2",
    value: "853",
    regex: MOBILE_REGEX_MO,
  },
];
export const ID_TYPES = [
  {
    label: "form.id_type_list.1",
    value: 1,
    regex: ID_REGEX_HK,
  },
  {
    label: "form.id_type_list.0",
    value: 0,
    regex: ID_REGEX_CN,
  },

  {
    label: "form.id_type_list.2",
    value: 2,
    regex: ID_REGEX_MO,
  },
  {
    label: "form.id_type_list.3",
    value: 3,
    regex: PASSPORT_REGEX,
  },
];

export const PACKAGE_INFO = {
  1: {
    title: "form.npc",
    color: "rgb(235, 124, 0)",
    id: "EH_Doctor_Prophecy_Item",
    detailsId: "EH_Doctor_Prophecy_Item__Details",
  },
  2: {
    title: "form.cancer",
    color: "secondary.main",
    id: "EH_Doctor_CancerMarker_Item",
    detailsId: "EH_Doctor_CancerMarker_Item_Details",
  },
  3: {
    title: "form.physical_examination_basic",
    color: "rgb(65, 136, 158)",
    id: "EH_Doctor_StandardHealthCheck_Item",
    detailsId: "EH_Doctor_StandardHealthCheck_Item_Details",
  },
  4: {
    title: "form.physical_examination_man",
    color: "primary.main",
    id: "EH_Doctor_ComprehensiveHealthCheck_M_Item",
    detailsId: "EH_Doctor_ComprehensiveHealthCheck_M_Item_Details",
  },
  5: {
    title: "form.physical_examination_women",
    color: "primary.main",
    id: "EH_Doctor_ComprehensiveHealthCheck_F_Item",
    detailsId: "EH_Doctor_ComprehensiveHealthCheck_F_Item_Details",
  },
};
export const LOCATIONS = [
  { label: "全部地區", value: "" },
  { label: "香港島東", value: "香港島東" },
  { label: "香港島西", value: "香港島西" },
  { label: "九龍東", value: "九龍東" },
  { label: "九龍西", value: "九龍西" },
  { label: "九龍中", value: "九龍中" },
  { label: "新界東南", value: "新界東南" },
  { label: "新界北", value: "新界北" },
  { label: "新界東北", value: "新界東北" },
  { label: "新界西北", value: "新界西北" },
  { label: "新界西南", value: "新界西南" },
  { label: "離島區", value: "離島區" },
];

export const REGIONS = {
  全部地區: "common:options.regions.all",
  香港: "common:options.regions.hongkong",
  澳門: "common:options.regions.macao",
  九龍西: "common:options.regions.kowloon_west",
  九龍中: "common:options.regions.kowloon_central",
  九龍東: "common:options.regions.kowloon_east",
  香港島西: "common:options.regions.west_of_hongkong_island",
  香港島東: "common:options.regions.east_of_hongkong_island",
  新界北: "common:options.regions.new_territories_north",
  新界東南: "common:options.regions.southeast_new_territories",
  新界西北: "common:options.regions.northwest_new_territories",
  新界東北: "common:options.regions.northeast_new_territories",
  新界西南: "common:options.regions.southwest_new_territories",
  其他地區: "common:options.regions.other",
  離島區: "common:options.regions.Islands",
};

/**
 * 1.Extra Care Privacy Policy
 * 2.Extra Care 会员 T&C
 * 3.Platform 个人资料收集声明
 * 4.会员条款及细则
 * 5.私隐政策
 * 6.个人资料收集证明
 * 其中123是注册时必须勾选的，456是希望显示在网页最底部的
 */

export const AGREEMENT_ID_MAP = {
  // Extra Care Privacy Policy
  extraCarePrivacyPolicy: {
    id: 5,
    label: "glossary.policy_and_agreement_list.0",
  },
  // Extra Care 会员 T&C
  extraCareClub: {
    id: 4,
    label: "glossary.policy_and_agreement_list.1",
  },
  // Platform 个人资料收集声明
  platformPersonalInfoCollectPolicy: {
    id: 14,
    label: "glossary.policy_and_agreement_list.2",
  },
  // 会员条款及细则
  clubPolicy: {
    id: 3,
    label: "glossary.policy_and_agreement_list.3",
  },
  // 私隐政策
  privacyPolicy: {
    id: 2,
    label: "glossary.policy_and_agreement_list.4",
  },
  // 个人资料收集证明
  personalInfoCollectProve: {
    id: 1,
    label: "glossary.policy_and_agreement_list.5",
  },
  orderAgreement: {
    id: 6,
    label: "glossary.policy_and_agreement_list.6",
  },
};

export const SITE_MATE_DATA = {
  WHATSAPP:
    "https://api.whatsapp.com/send/?phone=85253770823&text=Hello%2C+I+want+to+know+more+about+Prophecy+Test%21+&app_absent=0",
  FACEBOOK: "https://www.facebook.com/take2health.ltd",
  LINKEDIN: "https://www.linkedin.com/company/take2-health",
  YOUTUBE: "https://youtu.be/BACVA3es0NI",
  PORTAL: process.env.REACT_APP_URL,
  CAMPAIGN_PAGE: "/whats-new/campaign/",
  EARLY_CANCER_DETECTION: "/our-technologies/early-cancer-detection/",
};

export const ORDER_STATUS = {
  PENDING_PAYMENT: 0, // 待支付，刚创建订单
  PAID: 1, // 已支付
  EXPIRED: 2, // 已失效
  PENDING_REFUND: 3, // 待退款（web端申请退款后状态，admin端叫待审核）
  REFUNDED: 4, // 已退款
  CANCELLED: 5, // 订单已取消
  APPROVAL_FAILED: 6, // 审核失败
  APPROVAL_SUCCEED: 7, // 审核成功
  REFUND_FAILED: 8, // 退款失败
};
export const PROMOTION_INNER = {
  url: "/whats-new/promotions/take2-rewards",
};
