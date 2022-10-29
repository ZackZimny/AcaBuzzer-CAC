import { Typography, Paper, Button, TextField } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorCode, validateNameAndID } from '../backend/validateName';
import { writeUserData } from '../backend/writeUserData';


export const ParticipantNamePage: FunctionComponent = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    let formObject = Object.fromEntries(formData.entries());
    const name = formObject.name.toString();
    const id = formObject.id.toString();
    const error = await validateNameAndID(name, id);
    console.log({name: name, id: id});
    console.log(error);
    switch (error) {
      case ErrorCode.IncorrectId:
        setError("The ID is not correct.");
        return;
      case ErrorCode.IncorrectName:
        setError("The name has already been used.");
        return;
    }
    await writeUserData(name, id, false);
    const state = {state: {id: id, name: name}}
    navigate('/participant', state);
  };

  return (<>
    <Typography variant="h2" style={{textAlign: "center", backgroundColor: "#003399", color: "white", height: "10vh"}}>
      AcaBuzzer
    </Typography>
    <div style={{backgroundColor: "#003399", color: "white", height: "90vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <div>
        <Paper style={{padding: "5vw"}}>
          <Typography variant="h2" style={{textAlign: "center"}}>
            Player Login
          </Typography>
          <form style={{padding: "5vw"}} onSubmit={handleSubmit}>
          <div style={{padding: "3vw"}}><TextField name="name" label="Name"/></div>
          <div style={{padding: "3vw"}}><TextField name="id" label="ID"/></div>
          <Button size="large" variant="contained" style={{width: "100%", textAlign: "center", backgroundColor: "#22aa66"}} type="submit">
            Log In
          </Button>
          <Typography style={{color: "red"}}>{error}</Typography>
          </form>
        </Paper>
      </div>
    </div>
    </>
  );
}
