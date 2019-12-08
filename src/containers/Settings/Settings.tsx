import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  Paper,
  ListItemAvatar,
  Avatar
} from "@material-ui/core";
import NightIcon from "@material-ui/icons/NightsStay";
import DayIcon from "@material-ui/icons/WbSunny";
import { makeStyles } from "@material-ui/core/styles";
import AppStore from "../../store/AppStore";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles({
  list: {
    width: 400
  }
});

function Settings() {
  const classes = useStyles();
  const { t } = useTranslation();
  const { toggleDarkMode, darkMode } = AppStore.useContainer();

  return (
    <>
      <Typography gutterBottom>{t("settings.title")}</Typography>
      <Paper className={classes.list}>
        <List>
          <ListItem button onClick={toggleDarkMode}>
            <ListItemAvatar>
              <Avatar>{darkMode ? <NightIcon /> : <DayIcon />}</Avatar>
            </ListItemAvatar>
            <ListItemText primary={t("settings.darktheme")} />
            <ListItemSecondaryAction>
              <Switch onChange={toggleDarkMode} checked={darkMode} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </>
  );
}

export default Settings;
