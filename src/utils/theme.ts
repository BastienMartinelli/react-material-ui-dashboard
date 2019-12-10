import { createMuiTheme } from "@material-ui/core/styles";
import {
  teal,
  pink,
  deepPurple,
  grey,
  blueGrey
} from "@material-ui/core/colors";

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
      main: blueGrey[500]
    },
    secondary: {
      main: pink[400]
    },
    error: {
      main: pink[400]
    },
    type: "dark"
  }
});
