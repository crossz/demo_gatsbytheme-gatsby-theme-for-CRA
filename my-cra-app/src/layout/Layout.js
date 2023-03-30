import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import Header from "./Header";
// import Footer from "./Footer";
// import GlobalButtons from './GlobalButtons'
// import PromotionBar from './PromotionBar'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    },
    container: {
      flexGrow: 1,
    },
  })
);

const Layout = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container disableGutters className={classes.container} maxWidth="xl">
        {props.children}
      </Container>
      {/* <GlobalButtons /> */}
      {/* <Footer /> */}
      {/* <PromotionBar /> */}
    </div>
  );
};

export default Layout;
