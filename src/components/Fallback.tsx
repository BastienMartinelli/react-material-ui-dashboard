import React from "react";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

export default function Fallback() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress size={60} disableShrink />
    </div>
  );
}
