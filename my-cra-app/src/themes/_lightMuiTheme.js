import { createTheme } from "@material-ui/core/styles";
// Use createMuiTheme here is good for theme object key suggestion

const theme = createTheme({
  components: {
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        borderRadius: 8,
        backgroundColor: "#fff",
        "&:hover $notchedOutline": {
          borderColor: "#0F123F",
        },
      },
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent",
        },
      },
    },
    MuiTabs: {
      root: {
        color: "#0F123F",
        fontSize: "24px",
        fontWeight: "bolder",
      },

      indicator: {
        backgroundColor: "#0F123F",
      },
    },
    MuiButton: {
      root: {
        borderRadius: 8,
      },
      contained: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
      containedPrimary: {
        "&:hover": {
          backgroundColor: "#0F123F",
          opacity: 0.9,
        },
      },
    },
    MuiDialogTitle: {
      root: {
        backgroundColor: "#0F123F",
        color: "#fff",
      },
    },
    MuiDialogActions: {
      root: {
        padding: 16,
      },
    },
    MuiDialogContentText: {
      root: {
        color: "#333333",
      },
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#0F123F",
      light: "#3066F2",
    },
    secondary: {
      main: "#F2512D",
    },
    // success: {
    //   main: '#CDFFCD',
    //   dark: '#007F00',
    // },
    // warning: {
    //   main: '#FFECCC',
    //   dark: '#965E00',
    // },
    // error: {
    //   main: '#FFE0E0',
    //   dark: '#D30000',
    // },
    // info: {
    //   main: '#E0FFF8',
    //   dark: '#113162',
    //   light: 'rgba(218, 235, 255, 0.2)',
    // },
    text: {
      primary: "#333333",
      contrast: "#fff",
    },
    background: {
      footer: "rgba(218, 235, 255, 0.2)",
      container: "#F6F9FA",
    },
    divider: "rgba(37, 33, 59, 0.3)",
    tonalOffset: 0.4,
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont,"Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell","Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 1164,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
