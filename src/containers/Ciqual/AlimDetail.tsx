import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Divider, Paper, Slide, Switch } from "@material-ui/core";
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
  const [filter, setFilter] = useState("");
  const [noNull, setNoNull] = useState(false);

  async function fetchAlimDetail() {
    const result = await getAlimentByCode(alimCode);
    setAliment(result);
  }

  useEffect(() => {
    if (alimCode) {
      fetchAlimDetail();
    }
  }, [alimCode]);

  const filteredComp =
    aliment &&
    aliment.composition
      .filter(c => c.constNomFr.toUpperCase().includes(filter.toUpperCase()))
      .filter(c => (noNull ? c.teneur !== "-" && c.teneur !== "0" : true));

  return aliment ? (
    <Slide direction="left" in>
      <Paper>
        <div className={classes.header}>
          <Typography variant="h5">{aliment.alimNomFr}</Typography>
          <div className={classes.separator} />
          <Switch checked={noNull} onChange={() => setNoNull(prev => !prev)} />
          <SearchInput
            value={filter}
            onChange={e => setFilter(e.target.value || "")}
          />
        </div>
        <Divider />
        <List>
          {filteredComp &&
            filteredComp.map(c => (
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
