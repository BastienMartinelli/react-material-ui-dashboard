import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Grid, Paper, ListSubheader } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Badge from "@material-ui/core/Badge";

import AlimDetail from "./AlimDetail";
import SearchInput from "../../components/SearchInput";
import { getAlimentsByName } from "../../api/ciqual";

const useStyles = makeStyles({
  title: {
    marginBottom: 20
  },
  divider: {
    marginTop: 4
  },
  detailContainer: {
    padding: 20
  },
  detailTitle: {
    flexGrow: 1
  },
  searchContainer: {
    padding: 20
  },
  list: {
    marginTop: 20,
    paddingTop: 8
  },
  results: {
    marginTop: 8,
    marginRight: 8
  },
  paper: {}
});

export function Menu() {
  const classes = useStyles();
  const [name, setName] = React.useState("");
  const [results, setResults] = useState();
  const [selectedAlim, setSelectedAlim] = React.useState(null);

  async function fetchAliments() {
    const result = await getAlimentsByName(name, 10);
    setResults(result);
  }

  useEffect(() => {
    if (name && name.length > 2) {
      fetchAliments();
    }
  }, [name]);

  function handleNameChange(e) {
    setName(e.target.value || "");
  }

  return (
    <>
      <Typography>Table CIQUAL</Typography>
      <Grid container spacing={4}>
        <Grid item md={4}>
          <Typography variant="h5" gutterBottom className={classes.title}>
            Aliments par noms
          </Typography>
          <SearchInput
            placeholder="Rechercher par nom"
            value={name}
            onChange={handleNameChange}
          />
          <Paper className={classes.paper}>
            <List
              className={classes.list}
              subheader={
                <ListSubheader>
                  <Badge
                    color="secondary"
                    badgeContent={results && results.length}
                  >
                    <Typography className={classes.results}>
                      Résultats:
                    </Typography>
                  </Badge>
                </ListSubheader>
              }
            >
              {results &&
                results.map(a => (
                  <ListItem
                    key={a.alimCode}
                    button
                    onClick={() => setSelectedAlim(a.alimCode)}
                    selected={a.alimCode === selectedAlim}
                  >
                    <ListItemText primary={a.alimNomFr} />
                  </ListItem>
                ))}
            </List>
          </Paper>
        </Grid>
        <Grid item md={7}>
          <AlimDetail alimCode={selectedAlim} />
        </Grid>
      </Grid>
    </>
  );
}

export default Menu;
