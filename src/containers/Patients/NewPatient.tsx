import React, { useState } from "react";
import {
  Drawer,
  Typography,
  TextField,
  makeStyles,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio
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

function useField(initial: any) {
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
  const [sexe, sexeProps] = useField(null);

  function handleClose() {
    if (onClose) onClose();
  }

  function handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    addNewPatient({
      firstName: firstName as string,
      lastName: lastName as string,
      sexe: sexe as string
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
        <FormControl component="fieldset" className={classes.field}>
          <FormLabel component="legend">Sexe</FormLabel>
          <RadioGroup aria-label="gender" name="gender1" {...sexeProps}>
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Femme"
            />
            <FormControlLabel value="male" control={<Radio />} label="Homme" />
          </RadioGroup>
        </FormControl>
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
