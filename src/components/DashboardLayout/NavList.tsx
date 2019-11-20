import React from "react";
import { useLocation } from "react-router";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import BuildIcon from "@material-ui/icons/Build";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, fade } from "@material-ui/core/styles";
import { borderColor } from "@material-ui/system";

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
  return (
    <>
      <Item to="/">
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </Item>
      <Divider />
      <Item to="/patient">
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Suivi patient" />
      </Item>
      <Item to="/patients">
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Tout mes patients" />
      </Item>
      <Divider />
      <Item to="/ciqual">
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Table CIQUAL" />
      </Item>
      <Item to="/settings">
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <ListItemText primary="Configuration" />
      </Item>
    </>
  );
}
