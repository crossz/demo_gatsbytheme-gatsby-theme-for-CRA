import React from "react";
import {
  // makeStyles, createStyles, useMediaQuery,
  Box,
  //  Button
} from "@material-ui/core/";
// import { matchPath } from 'react-router'
import {
  Route,
  Routes,

  // Switch,
  // useLocation,
  //  useHistory
} from "react-router-dom";
import { baseRoutes, authRoutes } from "./routesConfig";
// import classnames from 'classnames'
import NoFound from "../crapages/404";
// import MobileNoFound from 'src/mobile/pages/404'
// import MobileErrorStatus from 'src/mobile/components/ErrorStatus'
// import ProfileSidebar from 'src/layout/ProfileSidebar'
// import { HEADER_HEIGHT, MOBILE_HEADER_HEIGHT, FOOTER_HEIGHT } from 'src/utils/constant'
// import ProfileCard from 'src/components/ProfileCard'
import Layout from "../layout/Layout";
// import SidebarContentHeader from 'src/layout/SidebarContentHeader'
// import MobileHeader from 'src/mobile/layout/Header'
// import MobileFooter from '../mobile/components/Footer'
// import MobileFooter from 'src/mobile/layout/Footer'
// import MobileLayout from 'src/mobile/layout'
// import TemAuthRedirect from 'src/pages/auth/TemAuthRedirect'
// import { useTranslation } from 'react-i18next'
// import { ReactComponent as HomeIcon } from 'src/mobile/assets/icons/home.svg'

// const useStyles = makeStyles((theme) =>
//   createStyles({
//     root: {
//       position: 'relative',
//       minHeight: `calc(100vh - ${theme.spacing(FOOTER_HEIGHT)}px)`,
//     },
//     button: {
//       marginBottom: theme.spacing(1.75),
//     },
//     content: {
//       flexGrow: 1,
//       padding: 0,
//       paddingTop: theme.spacing(HEADER_HEIGHT + 8),
//       // paddingBottom: theme.spacing(8),
//       [theme.breakpoints.down('md')]: {
//         paddingTop: theme.spacing(MOBILE_HEADER_HEIGHT + 10),
//       },
//       [theme.breakpoints.down('xs')]: {
//         paddingTop: theme.spacing(MOBILE_HEADER_HEIGHT + 12),
//       },
//     },
//     sidebarContent: {
//       paddingLeft: theme.spacing(8),
//       [theme.breakpoints.down('md')]: {
//         paddingLeft: theme.spacing(3),
//         paddingRight: theme.spacing(3),
//       },
//       [theme.breakpoints.down('xs')]: {
//         paddingTop: theme.spacing(MOBILE_HEADER_HEIGHT),
//         paddingLeft: 0,
//         paddingRight: 0,
//       },
//     },
//     userRoutesContent: {
//       display: 'flex',
//       margin: theme.spacing(0, 5.5),
//       [theme.breakpoints.down('md')]: {
//         margin: theme.spacing(0, 0),
//       },
//       [theme.breakpoints.down('xs')]: {
//         margin: theme.spacing(0, 2),
//       },
//     },
//     mobileMain: {
//       position: 'relative',
//       flexGrow: 1,
//       display: 'flex',
//       flexDirection: 'column',
//     },
//   }),
// )

const AppRouter = () => {
  // const classes = useStyles();
  // const { pathname } = useLocation();
  // const isMobile = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true })
  // const hideFooter = ['/doctor', '/clinic', '/profile/order'].find((path) =>
  //   matchPath(pathname, { path: path, exact: true }),
  // )

  // const { t } = useTranslation()
  // const history = useHistory()

  // const handleGoHome = (params) => {
  //   history.push('/')
  // }
  return (
    <Layout>
      <Box>
        <Routes>
          {baseRoutes.map((route, i) => (
            <Route
              exact={!route.exact}
              path={route.path}
              key={i}
              element={<route.component />}
            />
          ))}
          {/* {userRoutes.map((route, i) => (
            <Route
              exact={!route.exact}
              path={route.path}
              key={i}
              component={() => (
                <Box className={classes.userRoutesContent}>
                  <ProfileSidebar />
                  <main className={classnames(classes.content, classes.sidebarContent)}>
                    <Button
                      className={classes.button}
                      onClick={handleGoHome}
                      variant="outlined"
                      color="primary"
                      size="small"
                      startIcon={<HomeIcon />}
                    >
                      {t('common.go_back_homepage')}
                    </Button>
                    <SidebarContentHeader {...route} />
                    <ProfileCard />
                    <route.component />
                  </main>
                </Box>
              )}
            />
          ))} */}
          {authRoutes.map((route, i) => (
            <Route
              exact={!route.exact}
              path={route.path}
              key={i}
              element={<route.component />}
            />
          ))}
          <Route
            path="*"
            element={<NoFound />}
            // component={() => (
            //   <main className={classes.content}>
            //     <NoFound />
            //   </main>
            // )}
          />
        </Routes>
      </Box>
    </Layout>
  );
};

export default AppRouter;
