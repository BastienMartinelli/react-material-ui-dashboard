import React, { useState } from "react";
import {
  Drawer,
  Typography,
  TextField,
  makeStyles,
  Button
} from "@material-ui/core";
import PatientsStore from "../../store/PatientsStore";

const useStyles = makeStyles({
  list: {
    width: 500,
    padding: 20
  },
  fullList: {
    width: "auto"
  },
  field: {
    marginTop: 30
  }
});

function useField(initial: string) {
  const [value, setValue] = useState(initial);

  return [
    value,
    {
      value,
      onChange: e => setValue(e.target.value)
    }
  ];
}

function NewPatient({ open, onClose }) {
  const classes = useStyles();
  const { addNewPatient } = PatientsStore.useContainer();

  const [firstName, firstNameProps] = useField("");
  const [lastName, lastNameProps] = useField("");

  function handleClose() {
    if (onClose) onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    addNewPatient({
      firstName: firstName as string,
      lastName: lastName as string
    });

    handleClose();
  }

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <form className={classes.list} onSubmit={handleSubmit}>
        <Typography>Nouveau Patient</Typography>
        <TextField
          autoFocus
          label="Prénom"
          className={classes.field}
          variant="outlined"
          {...firstNameProps}
          fullWidth
        />
        <TextField
          label="Nom"
          className={classes.field}
          variant="outlined"
          {...lastNameProps}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          className={classes.field}
        >
          Créer
        </Button>
      </form>
    </Drawer>
  );
}

export default NewPatient;
