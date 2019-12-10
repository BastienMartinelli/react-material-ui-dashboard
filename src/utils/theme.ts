import { createMuiTheme } from "@material-ui/core/styles";
import { teal, pink } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#575A89"
    },
    secondary: {
      main: pink[500]
    },
    error: {
      main: pink[500]
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#575A89"
    },
    secondary: {
      main: pink[500]
    },
    error: {
      main: pink[500]
    },
    type: "dark"
  }
});
