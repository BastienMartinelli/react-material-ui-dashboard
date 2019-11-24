import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Divider, Paper, Slide } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import SearchInput from "../../components/InnerSearchInput";
import { getAlimentByCode } from "../../api/ciqual";

const useStyles = makeStyles(theme => ({
  header: {
    padding: 20,
    display: "flex"
  },
  separator: {
    flexGrow: 1
  }
}));

export function AlimDetail({ alimCode }) {
  const classes = useStyles();
  const [aliment, setAliment] = useState();

  async function fetchAlimDetail() {
    const result = await getAlimentByCode(alimCode);
    setAliment(result);
  }

  useEffect(() => {
    if (alimCode) {
      fetchAlimDetail();
    }
  }, [alimCode]);

  return aliment ? (
    <Slide direction="left" in>
      <Paper>
        <div className={classes.header}>
          <Typography variant="h5">{aliment.alimNomFr}</Typography>
          <div className={classes.separator} />
          <SearchInput />
        </div>
        <Divider />
        <List>
          {aliment &&
            aliment.composition.map(c => (
              <ListItem key={c.constCode}>
                <ListItemText primary={c.constNomFr} secondary={c.teneur} />
              </ListItem>
            ))}
        </List>
      </Paper>
    </Slide>
  ) : null;
}

export default AlimDetail;
