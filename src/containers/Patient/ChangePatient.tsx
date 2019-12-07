import React, { useState, useMemo } from "react";
import {
  Drawer,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
  TextField
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
  },
  divider: {
    marginTop: 24,
    marginBottom: 16
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

function ChangePatient({ open, onClose }) {
  const classes = useStyles();
  const {
    patients,
    changeCurrentPatient,
    getPatientsByName
  } = PatientsStore.useContainer();

  const [name, nameProps] = useField("");

  const filteredPatients = useMemo(() => {
    return getPatientsByName(name);
  }, [name]);

  function handleClose() {
    if (onClose) onClose();
  }

  const handleSelect = (id: string) => e => {
    e.preventDefault();
    e.stopPropagation();

    changeCurrentPatient(id);
    handleClose();
  };

  return (
    <Drawer anchor="right" open={open} onClose={handleClose}>
      <div className={classes.list}>
        <Typography gutterBottom>Choisir un patient</Typography>
        <TextField
          variant="outlined"
          label="Rechercher par nom"
          autoFocus
          className={classes.field}
          fullWidth
          {...nameProps}
        />
        <Divider className={classes.divider} />
        <List>
          {filteredPatients && filteredPatients.length ? (
            filteredPatients.map(patient => (
              <ListItem
                key={patient.id}
                button
                onClick={handleSelect(patient.id)}
              >
                <ListItemAvatar>
                  <Avatar>bm</Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={`${patient.firstName} ${patient.lastName}`}
                />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="Aucun patient trouvé" />
            </ListItem>
          )}
        </List>
      </div>
    </Drawer>
  );
}

export default ChangePatient;
