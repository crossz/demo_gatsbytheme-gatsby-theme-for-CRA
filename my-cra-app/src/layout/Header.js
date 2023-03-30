import React, { useState, useEffect } from "react";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
// import IconButton from "@material-ui/core/IconButton";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import { Menu, MenuItem } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import classnames from "classnames";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from 'src/store/slices/authSlice'
import { Link, NavLink, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeTabs from "../components/HomeTabs";
// import LanguageButton from 'src/components/LanguageButton'
// import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT } from 'src/utils/constant'
import { authRoutes, userRoutes } from "../routers/routesConfig";
// import { ReactComponent as IconDownArrow } from 'src/assets/icons/icon_down_arrow.svg'
// import SignOutButton from 'src/components/dialogButton/SignOutButton'
// import { encryptPhone, encryptEmail } from 'src/utils'
// import MobileProfileSidebar from 'src/layout/MobileProfileSidebar'
// import BookingTips from 'src/components/BookingTips'
// import { useImageTranslation } from '../hooks'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: theme.palette.background.paper,
      boxShadow: "none",
      // height: theme.spacing(HEADER_HEIGHT),
      paddingTop: theme.spacing(2),
      boxSizing: "content-box",
      [theme.breakpoints.down("xs")]: {
        paddingTop: theme.spacing(0),
        // height: theme.spacing(MOBILE_HEADER_HEIGHT),
      },
    },
    rightButton: {
      marginLeft: "auto",
      whiteSpace: "nowrap",
    },
    logo: {
      display: "block",
      width: 113,
      marginRight: theme.spacing(10),
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        width: 85.5,
      },
    },
    iconColor: {
      color: theme.palette.primary.light,
    },
    headerContent: {
      display: "flex",
      alignItems: "center",
      flexGrow: 1,
      height: theme.spacing(8),
      position: "relative",
    },
    space: {
      marginRight: theme.spacing(2),
    },
    divider: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: theme.palette.divider,
    },
    profile: {
      borderRadius: 50,
      whiteSpace: "nowrap",
      "&:hover": {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
      },
    },
    endDownArrow: {
      "& path": {
        stroke: theme.palette.primary.contrastText,
      },
    },
    link: {
      cursor: "pointer",
      lineHeight: 2,
      padding: theme.spacing(0.75, 3),
      marginLeft: theme.spacing(4),
      color: theme.palette.primary.main,
      borderRadius: theme.spacing(5),
      fontSize: theme.typography.body1.fontSize,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        fontWeight: theme.typography.fontWeightBold,
      },
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(1),
        padding: theme.spacing(0.5, 2),
        fontSize: theme.typography.caption.fontSize,
      },
    },
    activeLink: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      fontWeight: theme.typography.fontWeightBold,
    },
    menuLink: {
      color: theme.palette.primary.main,
    },
    userNameButton: {
      maxWidth: theme.spacing(12.5),
      fontSize: theme.typography.body2.fontSize,
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    languageWrapper: {
      marginLeft: theme.spacing(4),
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(1),
      },
    },
  })
);

const Header = () => {
  const classes = useStyles();
  // const dispatch = useDispatch();
  // const history = useHistory();
  const { t } = useTranslation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  // const isTable = useMediaQuery(theme.breakpoints.down("sm"));
  // const { userInfo } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = useState(null);
  // const [tImage] = useImageTranslation()

  const HeaderLine = (params) => {
    return <Divider className={classes.divider} />;
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
  };

  // const handleSignOut = () => {
  //   dispatch(signOut())
  //   history.push('/')
  // }

  // useEffect(() => {
  //   setAnchorEl(null);
  // }, [userInfo]);

  const handleSignIn = (params) => history.push("/signin");
  const handleSignUp = (params) => history.push("/signup");

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <AppBar className={classes.root} position="fixed" color="primary">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <div className={classes.headerContent}>
            {!matches && <HomeTabs />}

            <Typography
              className={classnames(classes.rightButton, "uppercase")}
              component="div"
            >
              <>
                {/* <Box className={classes.languageWrapper} component="span">
                    <LanguageButton />
                  </Box> */}
              </>
            </Typography>
          </div>
        </Toolbar>
        {matches && (
          <>
            <HomeTabs />
            {/* <MobileProfileSidebar open={Boolean(anchorEl)} onClose={handleClose} /> */}
          </>
        )}
        <NavLink
          className={classes.link}
          // activeClassName={classes.activeLink}
          to="/signin"
          replace
          style={{
            margin: 0,
          }}
        >
          {t("common.sign_in")}
        </NavLink>
      </Container>
    </AppBar>
  );
};

export default Header;
