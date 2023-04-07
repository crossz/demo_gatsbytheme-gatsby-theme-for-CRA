import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import CircularProgress from "@material-ui/core/CircularProgress";
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { omit } from "lodash";
// import { DIALING_CODES } from "../../utils/constant";
import { signIn } from "../../store/slices/authSlice";
import { oriSchema } from "../../utils/schema";
// import { useTranslateFormErrors } from "../../hooks";
// import DialingCodeSelector from "../../components/DialingCodeSelector";
import TagManager from "react-gtm-module";
// import FocusError from "../../components/FocusError";
// import useRedirectAfterLogin from "../../hooks/useRedirectAfterLogin";
import { useImageTranslation } from "../../hooks";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
      // backgroundColor: "pink",
      // width: 100,
      // height: 100,
    },
    bannerWrapper: {
      // flexGrow: 1,
      width: "50%",
      marginRight: theme.spacing(3),
      [theme.breakpoints.down("xs")]: {
        marginRight: 0,
        marginTop: theme.spacing(-12),
        marginBottom: theme.spacing(3),
      },
    },
    banner: {
      display: "block",
      width: "100%",
    },
    paper: {
      width: theme.spacing(45),
      marginLeft: "auto",
      marginRight: theme.spacing(4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexShrink: 0,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
      },
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    autoMinWidth: {
      minWidth: "auto",
    },
    select: {
      fontSize: theme.typography.body1.fontSize,
      padding: theme.spacing(1, 0),
      "&:focus": {
        backgroundColor: theme.palette.background.paper,
      },
    },
    title: {
      marginBottom: theme.spacing(1),
      width: "100%",
      textAlign: "left",
    },
  })
);

const initialValues = {
  verificationType: "email",
  email: "",
  password: "",
  dialingCode: "086",
  phone: "",
};

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  console.log(dispatch);
  // const redirectAfterLogin = useRedirectAfterLogin();
  const { t } = useTranslation();
  const signInStatus = "";
  const userInfoStatus = "";
  // const { signInStatus, userInfoStatus } = useSelector((state) => state.auth);
  const schema = oriSchema(t).pick([
    "verificationType",
    "email",
    "dialingCode",
    "phone",
    "password",
  ]);
  // console.log(schema);
  const [tImage] = useImageTranslation();

  return (
    <Container className={classes.root} component="main">
      <Box className={classes.bannerWrapper}>
        <img
          className={classes.banner}
          src={tImage("signin_banner", "jpg")}
          alt="sign in banner"
        />
      </Box>
      <div className={classes.paper}>
        <Box className={classes.title}>
          <Typography component="div">
            <Box fontSize="h5.fontSize" fontWeight="bold">
              {t("tips.welcome_back")}
            </Box>
          </Typography>
        </Box>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={async (values) => {
            if (signInStatus === "pending" || userInfoStatus === "pending")
              return;
            const omitKeys =
              values.verificationType === "email"
                ? ["verificationType", "phone", "dialingCode"]
                : ["verificationType", "email"];
            const pureValues = omit(values, omitKeys);
            console.log(pureValues);
            console.log(signIn);
            await dispatch(signIn(pureValues)).unwrap();
            await dispatch(getUserInfo()).unwrap();
            TagManager.dataLayer({
              dataLayer: {
                event: "signinComplete",
              },
            });
            // return location.state?.shouldGoBack ? history.goBack() : history.replace('/doctor')
            // return redirectAfterLogin({ redirectUrl: "/doctor" });
          }}
        >
          {(props) => {
            const {
              values,
              handleSubmit,
              setFieldValue,
              handleChange,
              errors,
              touched,
              setFieldTouched,
            } = props;
            const isError = (field) => touched[field] && Boolean(errors[field]);
            const errorText = (field) => touched[field] && errors[field];

            // useTranslateFormErrors(errors, touched, setFieldTouched);

            return (
              <form className={classes.form} onSubmit={handleSubmit}>
                <FormControl component="fieldset">
                  <Typography variant="subtitle1" color="inherit">
                    {t("form.sign_in_type")}
                  </Typography>
                  {/* <RadioGroup
                    name="verificationType"
                    value={values.verificationType}
                    onChange={handleChange}
                    row
                  >
                    <FormControlLabel
                      value="email"
                      control={<Radio />}
                      label={t("form.email")}
                    />
                    <FormControlLabel
                      value="phone"
                      control={<Radio />}
                      label={t("form.mobile_phone")}
                    />
                  </RadioGroup> */}
                </FormControl>
                {values.verificationType === "phone" ? (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="phone"
                    label={t("form.mobile_phone")}
                    name="phone"
                    placeholder={t("validation.please_enter", {
                      field: `$t(form.mobile_phone)`,
                    })}
                    value={values.phone}
                    onChange={handleChange}
                    error={isError("phone")}
                    helperText={errorText("phone")}
                    // InputProps={{
                    //   startAdornment: (
                    //     <DialingCodeSelector
                    //       value={values.dialingCode}
                    //       onChange={(dialingCode) =>
                    //         setFieldValue("dialingCode", dialingCode)
                    //       }
                    //     />
                    //   ),
                    // }}
                  />
                ) : (
                  <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="email"
                    label={t("form.email")}
                    name="email"
                    autoComplete="email"
                    placeholder={t("validation.please_enter", {
                      field: `$t(form.email)`,
                    })}
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <PersonIcon color="disabled" />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                )}
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  label={t("form.password")}
                  type="password"
                  id="password"
                  placeholder={t("validation.please_enter", {
                    field: `$t(form.password)`,
                  })}
                  value={values.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">
                  //       <LockIcon color="disabled" />
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
                <Box>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    {signInStatus === "pending" ||
                    userInfoStatus === "pending" ? (
                      <CircularProgress color="inherit" size={24} />
                    ) : (
                      t("common.sign_in")
                    )}
                  </Button>
                </Box>
                <Grid container>
                  <Grid item xs>
                    <Link to="/forgot-password" variant="caption" replace>
                      <Box color="primary.main">
                        {t("are_you_sure.forget_your_password")}
                      </Box>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="caption" replace>
                      <Box color="primary.main">
                        {t("are_you_sure.do_not_have_an_account", {
                          action: "$t(common.sign_up)",
                        })}
                      </Box>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            );
          }}
        </Formik>
      </div>
    </Container>
  );
};

export default SignIn;
