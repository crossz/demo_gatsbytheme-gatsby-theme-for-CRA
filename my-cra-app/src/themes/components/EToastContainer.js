import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { MOBILE_HEADER_HEIGHT } from '../../utils/constant'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& .Toastify__toast': {
        borderRadius: theme.spacing(1.5),
        minHeight: theme.spacing(7),
        [theme.breakpoints.down('xs')]: {
          borderRadius: 0,
          minHeight: theme.spacing(MOBILE_HEADER_HEIGHT),
        },
      },
      '& .Toastify__toast-body': {
        // wordBreak: 'break-all',
        wordBreak: 'break-word',
      },
      '& .Toastify__toast--error': {
        background: theme.palette.error.main,
      },
      '& .Toastify__toast--info': {
        background: theme.palette.info.main,
      },
      '& .Toastify__toast--success': {
        background: theme.palette.success.main,
      },
      '& .Toastify__toast--warning': {
        background: theme.palette.warning.main,
      },
      '& .Toastify__close-button ': {
        opacity: 0.8,
      },
    },
  }),
)

export const EToastContainer = (props) => {
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <ToastContainer
      position={matches ? 'top-center' : 'top-right'}
      className={classes.root}
      {...props}
      autoClose={5000}
    />
  )
}
