import { withStyles, makeStyles, InputBase, FormLabel, Select } from '@material-ui/core'
import { INPUT_WIDTH, MOBILE_INPUT_WIDTH, LABEL_WIDTH, MOBILE_LABEL_WIDTH } from '../../utils/constant'

export const EInputBase = withStyles((theme) => ({
  root: {
    'label + &': {},
    borderRadius: theme.spacing(1),
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey[300]}`,
    fontSize: theme.typography.body2.fontSize,
    padding: theme.spacing(0.5, 1.5),
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:hover': {
      borderColor: theme.palette.primary.main,
    },
    minWidth: theme.spacing(INPUT_WIDTH),
    [theme.breakpoints.down('xs')]: {
      minWidth: theme.spacing(MOBILE_INPUT_WIDTH),
      fontSize: theme.typography.overline.fontSize,
    },
  },
  focused: {
    boxShadow: ` ${theme.palette.primary.main} 0 0 0 1px`,
    borderColor: theme.palette.primary.main,
  },
  disabled: {
    '&:hover': {
      borderColor: theme.palette.grey[300],
    },
  },
  error: {
    borderColor: theme.palette.error.main,
    boxShadow: 'none',
    '&:hover': {
      borderColor: theme.palette.error.main,
    },
  },
}))(InputBase)

export const EFormLabel = withStyles((theme) => ({
  root: {
    marginTop: theme.spacing(1.5),
    minWidth: theme.spacing(LABEL_WIDTH),
    fontWeight: 'bolder',
    fontSize: theme.typography.body2.fontSize,
    color: theme.palette.primary.main,
    [theme.breakpoints.down('xs')]: {
      minWidth: theme.spacing(MOBILE_LABEL_WIDTH),
      fontSize: theme.typography.overline.fontSize,
    },
  },
}))(FormLabel)

const useStyles = makeStyles((theme) => ({
  selectRoot: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  selectInputBaseRoot: {
    paddingRight: theme.spacing(3),
  },
}))

const menuProps = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: -12,
  },
  transformOrigin: {
    vertical: -8,
    horizontal: 'left',
  },
  getContentAnchorEl: null,
}

export const ESelect = (props) => {
  const classes = useStyles()
  return (
    <Select
      classes={{
        root: classes.selectRoot,
      }}
      MenuProps={menuProps}
      input={<EInputBase classes={{ root: classes.selectInputBaseRoot }} />}
      displayEmpty
      {...props}
    >
      {props.children}
    </Select>
  )
}
