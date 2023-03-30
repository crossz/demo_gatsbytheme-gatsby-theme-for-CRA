import React, { useMemo, useState } from "react";
import { matchPath } from "react-router";
import { useNavigate, useLocation } from "react-router-dom";
import { createStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import { useTranslation } from "react-i18next";
import { Tooltip } from "@material-ui/core";
// import { SITE_MATE_DATA } from '../utils/constant'

const showTabRoutes = [
  {
    path: "/",
  },
  {
    path: "/doctor",
  },
  {
    path: "/faq",
  },
  {
    path: "/product-cancer-screening",
  },
  {
    path: "/product-prophecy",
  },
  {
    path: "/product-health-check-package",
  },
  { path: "/clinic/:id" },
];

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      height: "100%",
      [theme.breakpoints.down("xs")]: {
        height: "auto",
        margin: theme.spacing(0, -2),
      },
    },
    scroller: {
      display: "flex",
      [theme.breakpoints.down("xs")]: {
        display: "block",
      },
    },
    tab2: {
      color: "red",
    },
    tabRoot: {
      fontSize: theme.typography.body1.fontSize,
      fontWeight: theme.typography.fontWeightBold,
      minWidth: "auto",
      textTransform: "capitalize",
      padding: ({ language }) => theme.spacing(0, language === "en" ? 1 : 3),
      [theme.breakpoints.down("md")]: {
        maxWidth: theme.spacing(20),
        fontSize: theme.typography.body2.fontSize,
        padding: ({ language }) =>
          theme.spacing(0, language === "en" ? 1 : 1.5),
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: ({ language }) =>
          language === "en"
            ? theme.typography.caption.fontSize
            : theme.typography.body2.fontSize,
      },
      [theme.breakpoints.down("xs")]: {
        padding: 0,
        flexBasis: "auto",
        whiteSpace: "nowrap",
      },
    },
    selected: {
      color: theme.palette.primary.main,
    },
    textColorInherit: {
      color: theme.palette.primary.main,
    },
    textColorInherit2: {
      color: theme.palette.primary.main,
      "&.Mui-selected": {
        opacity: 0.7,
      },
    },
    indicator: {
      display: "none",
      backgroundColor: theme.palette.primary.main,
    },
    tooltip: {
      textTransform: "capitalize",
      background: "#fff",
      border: "1px solid #f1f1f1",
    },
    labelButton: {
      textTransform: "capitalize",
    },
  })
);

const HomeTabs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();

  const tabRoutes = [
    {
      label: "glossary.appointment_of_clinic",
      path: "/",
    },
    {
      label: "glossary.appointment_of_doctor",
      path: "/doctor",
    },
    // {
    //   label: 'glossary.know_screening',
    //   path: `${process.env.REACT_APP_WEBSITE_URL}/${i18n.language}${SITE_MATE_DATA.EARLY_CANCER_DETECTION}`,
    // },
    {
      label: "glossary.product_info",
    },
    {
      label: "glossary.faq",
      path: "/faq",
    },
  ];
  const [active, setActive] = useState(true);
  const classes = useStyles({ language: i18n.language, active: active });
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [button, setButton] = useState("");
  // const isProphecy = useRouteMatch("/product-prophecy");
  // const isCancerScreening = useRouteMatch("/product-cancer-screening");
  // const isHealthCheck = useRouteMatch("/product-health-check-package");

  const curTab = useMemo(() => {
    setButton(0);
    setActive(true);
    // if (isProphecy) {
    //   setButton(0);
    //   setActive(true);
    // } else if (isCancerScreening) {
    //   setButton(1);
    //   setActive(true);
    // } else if (isHealthCheck) {
    //   setButton(2);
    //   setActive(true);
    // } else {
    //   setActive(false);
    //   setButton("");
    // }

    // const index = tabRoutes.findIndex((item) =>
    //   matchPath(pathname, { path: item.path, exact: true })
    // );
    return 0;
  }, [pathname]);

  // const showTab = useMemo(() => {
  //   const isTabRoutes = showTabRoutes.find((item) =>
  //     matchPath(pathname, { path: item.path, exact: true })
  //   );
  //   return isTabRoutes;
  // }, [pathname]);

  const handleChange = (e, newValue) => {
    // if (newValue === 2) return window.open(tabRoutes[newValue]?.path, '_blank')
    if (newValue !== 2) {
      return navigate(tabRoutes[newValue]?.path);
    }
  };
  const buttons = [
    {
      name: t("glossary.prophecy"),
      path: "/product-prophecy",
      id: "EH_ProductInfo_Prophecy_Subtab",
    },
    {
      name: t("form.cancer"),
      path: "/product-cancer-screening",
      id: "EH_ProductInfo_CancerScreening_Subtab",
    },
    {
      name: t("form.health_check.product_name"),
      path: "/product-health-check-package",
      id: "EH_ProductInfo_HealthCheckPackage_Subtab",
    },
  ];
  return (
    <Tabs
      classes={{
        scroller: classes.scroller,
        indicator: classes.indicator,
      }}
      className={classes.root}
      value={curTab}
      onChange={handleChange}
      variant={matches ? "fullWidth" : "scrollable"}
      scrollButtons="off"
    >
      {tabRoutes.map((tabRoute, i) => {
        return (
          <Tab
            classes={{
              root: classes.tabRoot,
              selected: classes.selected,
              textColorInherit: active
                ? classes.textColorInherit2
                : classes.textColorInherit,
            }}
            onClick={() => {
              setActive(false);
              setButton("");
            }}
            key={i}
            label={t(tabRoute.label)}
          />
        );
      })}
    </Tabs>
  );
};

export default HomeTabs;
