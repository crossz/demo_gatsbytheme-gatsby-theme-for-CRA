import { withStyles } from '@material-ui/core/styles'
import { DataGrid } from '@material-ui/data-grid'

export const EDataGrid = withStyles((theme) => ({
  root: {
    borderRadius: 0,
    borderLeft: 'none',
    borderRight: 'none',
    '& .MuiDataGrid-columnHeaderMoving': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .MuiDataGrid-columnsContainer': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
    },
  },
  cell: {
    color: theme.palette.primary.main,
  },
}))(DataGrid)
