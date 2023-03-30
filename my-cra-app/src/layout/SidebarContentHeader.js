import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { useTranslation } from 'react-i18next'
import { MOBILE_HEADER_HEIGHT, CUSTOM_BREAKPOINTS } from '../utils/constant'
import classnames from 'classnames'
// import BookingTips from '../components/BookingTips'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      paddingBottom: theme.spacing(3),
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.down(CUSTOM_BREAKPOINTS.md)]: {
        paddingBottom: theme.spacing(0),
      },
      [theme.breakpoints.down('xs')]: {
        paddingBottom: theme.spacing(1),
      },
    },
    mobileRoot: {
      position: 'fixed',
      top: theme.spacing(MOBILE_HEADER_HEIGHT),
      left: theme.spacing(0),
      right: theme.spacing(0),
      zIndex: 2,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }),
)

const SidebarContentHeader = (props) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <Box className={classnames(classes.root)}>
      <Typography variant="h6" color="primary">
        <Box display="flex" alignItems="center" fontWeight="bold">
          {t(props.title)}
          {/* {props.path === '/profile/order' && <BookingTips />} */}
        </Box>
      </Typography>
    </Box>
  )
}
export default SidebarContentHeader
