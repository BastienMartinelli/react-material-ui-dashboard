import React, { useState } from "react";
import {
  Typography,
  Paper,
  Avatar,
  Fab,
  Divider,
  Tooltip,
  ButtonGroup,
  Button,
  IconButton
} from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import SwapHorizIcon from "@material-ui/icons/SwapHoriz";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyle = makeStyles(theme => ({
  currentUser: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    marginRight: 8
  },
  userPaper: {
    padding: 12,
    maxWidth: 400,
    display: "flex",
    alignItems: "center",
    marginRight: 12
  },
  userName: {
    marginLeft: 12,
    marginRight: 8
  },
  separator: {
    flexGrow: 1
  },
  buttonActive: {
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.25)
    }
  },
  divider: {
    marginBottom: 16
  }
}));

function Patient() {
  const classes = useStyle();
  const [activeInfo, setActiveInfo] = useState(0);

  return (
    <>
      <Typography gutterBottom>Suivi du patient</Typography>
      <div className={classes.currentUser}>
        <Paper className={classes.userPaper}>
          <Avatar>BM</Avatar>
          <Typography className={classes.userName}>
            Bastien Martinelli
          </Typography>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </Paper>
        <Tooltip title="Changer de patient">
          <Fab color="primary" size="small">
            <SwapHorizIcon />
          </Fab>
        </Tooltip>
      </div>
      <Divider className={classes.divider} />
      <Typography gutterBottom variant="h5">
        Informations
      </Typography>
      <ButtonGroup aria-label="informations">
        <Button
          className={activeInfo === 0 ? classes.buttonActive : ""}
          onClick={() => setActiveInfo(0)}
        >
          Général
        </Button>
        <Button
          className={activeInfo === 1 ? classes.buttonActive : ""}
          onClick={() => setActiveInfo(1)}
        >
          Médical
        </Button>
        <Button
          className={activeInfo === 2 ? classes.buttonActive : ""}
          onClick={() => setActiveInfo(2)}
        >
          Social
        </Button>
      </ButtonGroup>
    </>
  );
}

export default Patient;
