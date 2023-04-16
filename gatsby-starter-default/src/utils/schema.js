import {
  object as yObject,
  string as yString,
  number as yNumber,
  date as yDate,
  bool as yBool,
} from "yup";
import format from "date-fns/format";
import {
  DIALING_CODES,
  ID_TYPES,
  DATE_FORMAT_WITHOUT_CONNECT,
} from "../utils/constant";

import {
  PASSWORD_REGEX,
  WHATSAPP_ACCOUNT_REGEX,
  WECHAT_ID_REGEX,
  CN_NAME_REGEX,
  EN_NAME_REGEX,
  isHkId,
  PLACE_REGEX,
} from "./regex";

export const oriSchema = (t) => {
  const selectErrorText = (field) =>
    t("validation.please_select", { field: `$t(form.${field})` });
  const emptyErrorText = (field) =>
    t("validation.cannot_be_empty", { field: `$t(form.${field})` });

  return yObject({
    nameEn: yString()
      .nullable()
      .matches(
        new RegExp(EN_NAME_REGEX),
        t("validation.please_enter_correct_format_of", {
          field: "$t(form.en_name)",
        })
      )
      .required(emptyErrorText("en_name")),
    nameCn: yString()
      .nullable()
      .matches(
        new RegExp(CN_NAME_REGEX),
        t("validation.please_enter_correct_format_of", {
          field: "$t(form.zh_name)",
        })
      )
      .when("identifyType", (arg, schema) => {
        // When id type is passport,nameCn no required
        return arg === 3
          ? schema.notRequired()
          : schema.required(emptyErrorText("zh_name"));
      }),
    gender: yNumber().nullable().required(selectErrorText("gender")),
    identifyType: yNumber().nullable().required(selectErrorText("id_type")),
    identifyId: yString()
      .nullable()
      .when(["identifyType", "birthday"], (arg1, arg2, schema) => {
        const activeIdType = ID_TYPES.find((idType) => idType.value === arg1);
        // When identify type is China mainland should matches birthday.
        if (arg1 === 0 && arg2)
          return schema
            .matches(
              new RegExp(activeIdType?.regex),
              t("validation.please_enter_correct_format_of", {
                field: `$t(${activeIdType?.label})`,
              })
            )
            .matches(
              format(arg2, DATE_FORMAT_WITHOUT_CONNECT),
              t("validation.inconsistent", { field: "$t(form.birthday)" })
            );
        if (arg1 === 1)
          return schema.test(
            "",
            t("validation.please_enter_correct_format_of", {
              field: `$t(${activeIdType?.label})`,
            }),
            (value, context) => {
              return isHkId(value);
            }
          );
        return schema.matches(
          new RegExp(activeIdType?.regex),
          t("validation.please_enter_correct_format_of", {
            field: `$t(${activeIdType?.label})`,
          })
        );
      })
      .required(emptyErrorText("id_number")),
    placeOfIssuance: yString()
      .nullable()
      .matches(
        new RegExp(PLACE_REGEX),
        t("validation.please_enter_correct_format_of", {
          field: `$t(form.place_of_issue)`,
        })
      )
      .when("identifyType", (arg, schema) => {
        // When id type is passport,nameCn no required
        return arg === 0 || arg === 3
          ? schema.required(emptyErrorText("place_of_issue"))
          : schema.notRequired();
      }),
    birthday: yDate().nullable().required(emptyErrorText("birthday")),
    userStatus: yBool().nullable(),
    joinClub: yBool().isTrue(t("validation.must_be_checked")),
    verificationType: yString().nullable(),
    email: yString()
      .nullable()
      .when("verificationType", (arg, schema) => {
        // When verification type is not email and not empty,email no required
        return !arg || arg === "email"
          ? schema
              .email(
                t("validation.please_enter_correct_format_of", {
                  field: "$t(form.email)",
                })
              )
              .required(emptyErrorText("email"))
          : schema.notRequired();
      }),
    phone: yString()
      .nullable()
      .when(["verificationType", "dialingCode"], (arg1, arg2, schema) => {
        const activeDialingCode = DIALING_CODES.find(
          (dialingCode) => dialingCode.value === arg2
        );
        // When verification type is not phone and not empty,phone no required
        return !arg1 || arg1 === "phone"
          ? schema
              .matches(
                new RegExp(activeDialingCode?.regex),
                t("validation.please_enter_correct_format_of", {
                  field: "$t(form.mobile_phone)",
                })
              )
              .required(emptyErrorText("mobile_phone"))
          : schema.notRequired();
      }),
    dialingCode: yString()
      .nullable()
      .when("verificationType", {
        is: "phone",
        then: yString().required(selectErrorText("dialingCode")),
      }),
    code: yString()
      .nullable()
      .length(
        4,
        t("validation.please_enter_correct_format_of", {
          field: `$t(form.v_code)`,
        })
      )
      .required(emptyErrorText("v_code")),
    password: yString()
      .nullable()
      .matches(
        new RegExp(PASSWORD_REGEX),
        t("validation.password_match", { field: "$t(form.password)" })
      )
      .required(emptyErrorText("password")),
    newPassword: yString()
      .nullable()
      .matches(
        new RegExp(PASSWORD_REGEX),
        t("validation.password_match", { field: "$t(form.new_password)" })
      )
      .required(emptyErrorText("new_password"))
      .test(
        t("validation.inconsistent", { field: "$t(form.password)" }),
        t("validation.new_password_match", { field: "$t(form.password)" }),
        // When password is not empty, newPassword should not equal to password
        (value, testContext) =>
          testContext.parent.password
            ? testContext.parent.password !== value
            : true
      ),
    confirmPassword: yString()
      .nullable()
      .required(emptyErrorText("confirm_password"))
      .test(
        t("validation.consistent", { field: "$t(form.password)" }),
        t("validation.inconsistent", { field: "$t(form.password)" }),
        // When newPassword is not empty, newPassword should equal to confirmPassword, or password should equal to confirmPassword
        (value, testContext) =>
          testContext.parent.newPassword
            ? testContext.parent.newPassword &&
              testContext.parent.newPassword === value
            : testContext.parent.password === value
      ),
    whatsAppId: yString()
      .nullable()
      .matches(
        new RegExp(WHATSAPP_ACCOUNT_REGEX),
        t("validation.please_enter_correct_format_of", {
          field: "WhatsApp $t(form.account)",
        })
      ),
    weChatId: yString()
      .nullable()
      .matches(
        new RegExp(WECHAT_ID_REGEX),
        t("validation.please_enter_correct_format_of", {
          field: "$t(form.wechat) $t(form.account)",
        })
      ),
  });
};
