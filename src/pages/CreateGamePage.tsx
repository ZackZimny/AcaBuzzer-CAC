import { Typography, Paper, Button, TextField } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createGameData } from '../backend/createGameData';


export const CreateGamePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let formObject = Object.fromEntries(formData.entries());
    const name = formObject.name.toString();
    const id = await createGameData(name);
    const state = {state: {id: id, name: name}}
    navigate('/game-start', state);
  };

  return (<>
    <Typography variant="h2" style={{backgroundColor: "#22aa66", textAlign: "center", color: "white", height: "10vh"}}>
      AcaBuzzer
    </Typography>
    <div style={{backgroundColor: "#22aa66", color: "white", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div>
        <Paper style={{padding: "5vw"}}>
          <Typography variant="h2" style={{textAlign: "center"}}>
            Host Login
          </Typography>
          <form onSubmit={handleSubmit}>
          <div style={{padding: "3vw"}}><TextField name="name" label="Name"/></div>
          <Button size="large" variant="contained" style={{width: "100%", textAlign: "center", backgroundColor: "#2266aa"}} type="submit">
            Log In
          </Button>
          </form>
        </Paper>
      </div>
    </div>
    </>
  );
}
