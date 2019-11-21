import React, { useState } from "react";
import { Typography, Button, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import SearchInput from "../../components/SearchInput";
import NewPatient from "./NewPatient";

const useStyle = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20
  },
  separator: {
    flexGrow: 1
  }
});

function Patients() {
  const classes = useStyle();
  const [openNewPatient, setOpenNewPatient] = useState(false);

  return (
    <>
      <NewPatient
        open={openNewPatient}
        onClose={() => setOpenNewPatient(false)}
      />
      <Typography gutterBottom>Tous mes patients</Typography>
      <div className={classes.header}>
        <SearchInput placeholder="Rechercher" />
        <div className={classes.separator} />
        <Button
          onClick={() => setOpenNewPatient(true)}
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
        >
          Nouveau
        </Button>
      </div>
      <Divider />
    </>
  );
}

export default Patients;
