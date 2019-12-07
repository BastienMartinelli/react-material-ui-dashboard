import React, { useState, useMemo } from "react";
import {
  Typography,
  Button,
  Divider,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  Table,
  TableBody
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddIcon from "@material-ui/icons/Add";

import SearchInput from "../../components/SearchInput";
import NewPatient from "./NewPatient";
import PatientsStore from "../../store/PatientsStore";

const useStyle = makeStyles({
  header: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20
  },
  separator: {
    flexGrow: 1
  },
  root: {
    width: "100%",
    overflowX: "auto",
    marginTop: 20
  },
  table: {
    minWidth: 650
  }
});

function Patients() {
  const classes = useStyle();
  const [openNewPatient, setOpenNewPatient] = useState(false);
  const { getPatientsByName } = PatientsStore.useContainer();
  const [name, setName] = useState("");

  function handleNameChange(e) {
    setName(e.target.value || "");
  }

  const filteredPatients = useMemo(() => {
    return getPatientsByName(name);
  }, [name]);

  return (
    <>
      <NewPatient
        open={openNewPatient}
        onClose={() => setOpenNewPatient(false)}
      />
      <Typography gutterBottom>Tous mes patients</Typography>
      <div className={classes.header}>
        <SearchInput
          placeholder="Rechercher"
          onChange={handleNameChange}
          value={name}
        />
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
      <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>Prénom</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPatients && filteredPatients.length ? (
              filteredPatients.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.firstName}
                  </TableCell>
                  <TableCell>{row.lastName}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell component="th" scope="row">
                  {"Aucun patient trouvé"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </>
  );
}

export default Patients;
