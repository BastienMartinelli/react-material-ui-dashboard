import React from "react";
import {
  Typography,
  Paper,
  Avatar,
  Fab,
  Divider,
  Tooltip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";

const useStyle = makeStyles({
  currentUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: 28
  },
  userPaper: {
    padding: 16,
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    marginRight: 12
  },
  userName: {
    marginLeft: 8
  }
});

function Patient() {
  const classes = useStyle();

  return (
    <>
      <Typography gutterBottom>Suivi du patient</Typography>
      <div className={classes.currentUser}>
        <Paper className={classes.userPaper}>
          <Avatar>BM</Avatar>
          <Typography className={classes.userName}>
            Bastien Martinelli
          </Typography>
        </Paper>
        <Tooltip title="Changer de patient">
          <Fab color="primary" size="small">
            <SwapHorizIcon />
          </Fab>
        </Tooltip>
      </div>
      <Divider />
    </>
  );
}

export default Patient;
