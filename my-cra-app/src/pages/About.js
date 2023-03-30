import React from "react";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
// import { useTranslation } from "react-i18next";

// import Loading from '../components/Loading'

const useStyles = makeStyles((theme) =>
  createStyles({
    homepageBanner: {
      display: "block",
      maxWidth: "100%",
      // maxHeight: `calc(100vh - ${theme.spacing(26)}px)`,
      margin: "0 auto",
      cursor: "pointer",
      borderRadius: 24,
      backgroundColor: "pink",
    },
    rightButton: {
      marginLeft: "auto",
      background: "#fff",
    },
    tabsRoot: {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
  })
);

const About = () => {
  const classes = useStyles();
  // const { t } = useTranslation();
  return (
    <Box className={classes.homepageBanner}>
      <Typography component="div">hello about</Typography>
    </Box>
  );
  // return <Loading title={t('validation.can_not_find_this_page')} status="fulfilled" />
};

export default About;
