import React from 'react'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListAltIcon from '@material-ui/icons/ListAlt'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import PersonIcon from '@material-ui/icons/Person'
// import AssignmentIndIcon from '@material-ui/icons/AssignmentInd'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { HEADER_HEIGHT, CUSTOM_BREAKPOINTS } from '../utils/constant'

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      paddingTop: theme.spacing(8),
      position: 'sticky',
      top: theme.spacing(HEADER_HEIGHT + 8),
      backgroundColor: theme.palette.primary.main,
      width: theme.spacing(25),
      flexShrink: 0,
      marginTop: theme.spacing(HEADER_HEIGHT + 8),
      marginBottom: theme.spacing(8),
      minHeight: theme.spacing(40),
      maxHeight: theme.spacing(78.75),
      [theme.breakpoints.down('md')]: {
        width: 'auto',
      },
      [theme.breakpoints.down(CUSTOM_BREAKPOINTS.md)]: {
        paddingTop: theme.spacing(4),
      },
    },
    list: {
      color: theme.palette.primary.contrastText,
    },
    listItem: {
      display: 'block',
      marginBottom: theme.spacing(1),
      color: theme.palette.primary.contrastText,
      '& .MuiListItemIcon-root': {
        minWidth: theme.spacing(5),
        color: theme.palette.primary.contrastText,
        [theme.breakpoints.down('md')]: {
          minWidth: 'auto',
        },
      },
      '& .MuiButtonBase-root': {
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(1),
        },
      },
    },
    activeListItem: {
      '& .MuiButtonBase-root': {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: theme.spacing(1),
      },
    },
  }),
)

const ProfileSideBar = () => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <Box className={classes.root}>
      <List className={classes.list} component="nav" aria-label="profile sidebar">
        <NavLink className={classes.listItem} to="/profile/order" activeClassName={classes.activeListItem}>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={t('glossary.appointment_order')} />
          </ListItem>
        </NavLink>
        {/* <NavLink className={classes.listItem} to="/profile/report" activeClassName={classes.activeListItem}>
        <ListItem button>
          <ListItemIcon>
            <AssignmentIndIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="电子报告" />
        </ListItem>
      </NavLink> */}
        <NavLink className={classes.listItem} to="/profile/account" activeClassName={classes.activeListItem}>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary={t('glossary.account_setting')} />
          </ListItem>
        </NavLink>
      </List>
    </Box>
  )
}

export default ProfileSideBar
