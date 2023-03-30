import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.light,
      },
      borderRadius: 0,
      width: theme.spacing(6),
      height: theme.spacing(6),
      color: theme.palette.secondary.contrastText,
    },
    icon: {
      transform: 'rotate(180deg)',
    },
  }),
)

const GoBackButton = () => {
  const classes = useStyles()
  const history = useHistory()

  return (
    <IconButton className={classes.root} aria-label="go-back" onClick={() => history.goBack()}>
      <ArrowRightAltIcon className={classes.icon} fontSize="large" />
    </IconButton>
  )
}

export default GoBackButton
