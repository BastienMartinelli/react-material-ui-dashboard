import React from "react";
import { InputBase } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.light, 0.6),
    "&:hover": {
      backgroundColor: fade(theme.palette.primary.light, 0.8)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    },
    height: 35
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

type InnerSearchInputProps = {
  className?: string;
  style?: React.CSSProperties;
} & React.ComponentProps<typeof InputBase>;

export function SearchInput(props: InnerSearchInputProps) {
  const { className, style, placeholder } = props;

  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={clsx(classes.search, className)} style={style}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        placeholder={`${t("search")}...` || placeholder}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ "aria-label": "search" }}
        {...props}
      />
    </div>
  );
}

export default SearchInput;
