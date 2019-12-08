import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PersonIcon from "@material-ui/icons/Person";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Menu,
  MenuItem
} from "@material-ui/core";
import Logo from "components/Logo";
import AppStore from "store/AppStore";

import InnerSearchInput from "components/InnerSearchInput";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  title: {
    flexGrow: 1
  }
}));

export default function Bar() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [showAccount, setShowAccount] = useState(false);
  const anchorRef = useRef(null);
  const { setUser } = AppStore.useContainer();

  function handleClose() {
    setShowAccount(false);
  }

  function logout() {
    setUser(null);
  }

  return (
    <AppBar
      className={classes.appBar}
      position="absolute"
      elevation={2}
      color="primary"
    >
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Logo />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          My App
        </Typography>
        <InnerSearchInput />
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <IconButton aria-label="show 17 new notifications" color="inherit">
          <Badge badgeContent={17} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <IconButton
          color="inherit"
          onClick={() => setShowAccount(prev => !prev)}
          ref={anchorRef}
        >
          <PersonIcon />
        </IconButton>
        <Menu
          anchorEl={anchorRef.current}
          open={showAccount}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>{t("menu.profile")}</MenuItem>
          <MenuItem onClick={handleClose}>{t("menu.account")}</MenuItem>
          <MenuItem onClick={logout}>{t("menu.logout")}</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
