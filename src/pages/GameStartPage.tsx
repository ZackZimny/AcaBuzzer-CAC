import { Button, Typography, Grid, Paper } from "@mui/material";
import { onSnapshot, startAfter } from "firebase/firestore";
import React, { useState } from "react";
import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { onUserDataSnapshot } from "../backend/onUserDataSnapshot";
import { BuzzData } from "../types/BuzzData";

interface State {
  id:string;
  name:string;
}

export const GameStartPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state as State;
  const [data, setData] = useState<BuzzData[]>([]);
  useEffect(() => {
    const unsubscribe = onUserDataSnapshot(state.id, setData);
    return () => unsubscribe();
  }, []);
  const gridItems = data.map((d) =>
          <Grid item key={d.name} xs={3}>
            <Paper style={{textAlign: "center", height: "3vw", fontSize: "2vw", display: "flex", alignItems: "center", justifyContent: "center"}}>{d.name}</Paper>
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
        <Button style={{ float: "right", textAlign: "center", position: "fixed", bottom: "0px", right: "0px"}} size="large" variant="contained" onClick={() => navigate("/admin", {state:{id: state.id, name: state.name}})}>Start Game</Button>
      <Grid container spacing={4}>
        {gridItems}
      </Grid>
      </div>
    </>
  )
}
