import React from "react";
import { useLocation } from "react-router";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BuildIcon from "@material-ui/icons/Build";
import { Link } from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  buttonActive: {
    backgroundColor: fade(theme.palette.primary.light, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.25)
    },
    borderRight: "solid",
    borderRightColor: theme.palette.primary.light
  }
}));

function Item({ children, to }) {
  const location = useLocation();
  const classes = useStyles();

  return (
    <ListItem
      button
      component={Link}
      to={to}
      className={location.pathname === to ? classes.buttonActive : ""}
    >
      {children}
    </ListItem>
  );
}

export default function NavList() {
  const { t } = useTranslation();

  return (
    <>
      <Item to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={t("menu.dashboard")} />
      </Item>
      <Item to="/settings">
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary={t("menu.settings")} />
      </Item>
    </>
  );
}
