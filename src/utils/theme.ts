import { createMuiTheme } from "@material-ui/core/styles";
import { green, pink, teal } from "@material-ui/core/colors";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: green["A400"]
    },
    secondary: {
      main: pink[500]
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: teal[700]
    },
    secondary: {
      main: pink[500]
    },
    type: "dark"
  }
});
