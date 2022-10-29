import { collapseClasses, IconButton, Grid, Paper, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";
import { BuzzData } from "../types/BuzzData";
import RefreshIcon from "@mui/icons-material/Refresh";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useLocation } from "react-router-dom";
import { onUserDataSnapshot } from "../backend/onUserDataSnapshot";
import { clearEntries } from "../backend/clearEntries";
import { writeLock } from "../backend/writeLock";

interface State {
  name: string;
  id: string;
}

export const AdminPage:React.FunctionComponent = () => {
  const [data, setData] = useState<BuzzData[]>([]);
  const [locked, setLocked] = useState<boolean>(true);
  let text:string = "";
  const location = useLocation();
  const state = location.state as State;
  useEffect(() => {
    const unsubscribe = onUserDataSnapshot(state.id, setData);
  }, []);
  const userData = data.filter((d) => d.buzzed);
  const names = userData.map((d) => d.name);
  const listData = names.map((n) => <li key={n}>{n}</li>);
  const updateLock = async () => {
    await writeLock(state.id, !locked);
    setLocked(!locked);
  }
  const gridItems = names.map((n) =>
          <Grid item key={n} xs={3}>
            <Paper style={{height: "3vw", fontSize: "2vw", display: "flex", alignItems: "center", justifyContent: "center", margin: "2vw"}}>
              {n}
            </Paper>
          </Grid>);
  return (
    <>
      <div style={{backgroundColor: "#00AA88", height: "100vh", width: "100vw"}}>
      <Typography variant="h2" style={{backgroundColor: "#00AA88", textAlign: "center", color: "white", height: "10vh"}}>
        AcaBuzzer
      </Typography>
      <Grid container spacing={12}>
        <Grid item xs={6}>
          <h1 style={{textAlign:"left", float: "left"}}>{state.name + "'s Lobby"}</h1>
        </Grid>
        <Grid item xs={6}>
          <h1 style={{float: "right", paddingRight: "5px"}}>{"Game Pin:" + state.id}</h1>
        </Grid>
      </Grid>
      <Button startIcon={<RefreshIcon/>} variant="contained" style={{marginRight: "2vw"}} onClick={() => clearEntries(state.id, names)}>Reset Entries</Button>
      <Button startIcon={locked ? <LockIcon/> : <LockOpenIcon/>} variant="contained" style={{backgroundColor: (locked ? "gray" : "blue")}} onClick={() => updateLock()}>{locked ? "locked" : "unlocked" }</Button>      
      {gridItems}
      </div>
    {listData}
  </>
  );
}
