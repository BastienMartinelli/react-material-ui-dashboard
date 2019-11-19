import React from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import SearchInput from "../../components/SearchInput";

const useStyle = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 28
  },
  separator: {
    flexGrow: 1
  }
});

function Patients() {
  const classes = useStyle();

  return (
    <>
      <Typography gutterBottom>Tout mes patients</Typography>
      <div className={classes.header}>
        <SearchInput placeholder="Rechercher" />
        <div className={classes.separator} />
        <Button variant="contained" color="primary" startIcon={<AddIcon />}>
          Nouveau
        </Button>
      </div>
      <Divider />
    </>
  );
}

export default Patients;
