import { Button, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { onGameDataSnapshot } from "../backend/onGameDataSnapshot";
import { writeUserData } from "../backend/writeUserData";
import { GameData } from "../types/GameData";

interface State {
  name: string;
  id: string;
}

export const BuzzerParticipant: React.FunctionComponent = () => {
  const location = useLocation();
  const state = location.state as State;
  const [gameData, setGameData] = useState<GameData>({locked: true});
  useEffect(() => {
    const unsubscribe = onGameDataSnapshot(state.id, setGameData);
  },[]);
  const color = gameData.locked ? "gray" : "blue";
  const text = gameData.locked ? "Locked" : "Buzz in!";
  return (
    <div>
      <Typography sx={{width: "100%", height:"5vh", textAlign:"center", 
      fontSize:"3vh"}}>
        {state.name}
      </Typography>
      <Button sx={{width:"100%", height:"80vh", fontSize: "10vh", color: color}} onClick={() => {
        if(!gameData.locked){
          writeUserData(state.name, state.id, true)
        }
      }}> 
        {text}
      </Button>
    </div>
  );
}
