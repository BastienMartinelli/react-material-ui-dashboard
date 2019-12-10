import { createMuiTheme } from "@material-ui/core/styles";
import { teal, pink } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400]
    },
    secondary: {
      main: pink[300]
    },
    error: {
      main: pink[300]
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[600]
    },
    secondary: {
      main: pink[300]
    },
    error: {
      main: pink[300]
    },
    type: "dark"
  }
});
