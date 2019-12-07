import { createMuiTheme } from "@material-ui/core/styles";

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4F6294"
    },
    secondary: {
      main: "#EF527D"
    }
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#4F6294"
    },
    secondary: {
      main: "#EF527D"
    },
    type: "dark"
  }
});
