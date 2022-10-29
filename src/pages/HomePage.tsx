import { Button, Grid, Paper, styled, Typography, Box } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
import "../components/RotatingColor.css"


//Navigations: /create-game for admin and /participant-login for participant
const Home: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
  <div className="rotating-color">
  <div style={{backgroundColor: "#115588", color: "#FFF"}}>
    <Typography variant="h1" style={{textAlign: "center"}}>
      AcaBuzzer
    </Typography>
  </div>
  <Grid container>
    <Grid item style={{float: "left", width:"50%"}}>
      <Paper>
        <Typography variant="h3" style={{textAlign: "center", paddingBottom: "5px"}}>
          Player Login
        </Typography>
        <Box textAlign='center'>
        <Button onClick={() => navigate("/participant-login")} variant="contained" style={{width: "100%", paddingTop: "5px"}}>
          Login
        </Button>
        </Box>
      </Paper>
    </Grid> 
    <Grid item style={{float: "left", width:"50%"}}>
      <Paper>
        <Typography variant="h3" style={{textAlign: "center", paddingBottom: "5px"}}>
          Admin Login
        </Typography>
        <Box textAlign='center'>
        <Button onClick={() => navigate("/create-game")} variant="contained" style={{width: "100%", paddingTop: "5px", backgroundColor:"#11AA88"}}>
          Login
        </Button>
        </Box>
      </Paper>
    </Grid>
  </Grid>
  </div>);
}

export const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
  <>
  <div className="rotating-color" style={{height: "65vh"}}>
    <Typography variant="h1" style={{width: "100vw", textAlign: 'center', paddingTop: "10vw", color:"white", fontWeight: "bold"}}>
      Welcome to AcaBuzzer
    </Typography>
    <Typography variant="h3" style={{width: "100vw", textAlign: 'center', paddingTop: "5vw", fontSize: "3.5vw", color:"white"}}>
      Your one stop destination to hosting an online buzzer game.
    </Typography>
  </div>
      <Typography variant="h2" style={{width: "100vw", textAlign: "center", paddingTop: "1vw"}}>
        Log In
      </Typography>
      <Typography style={{width: "100%", textAlign: "center", paddingTop: "10px"}}>
        Use the login on the left to join a game, and the login on the right to create a game.
      </Typography>
    <Grid container style={{display: "flex", justifyContent: "center", paddingTop: "30px"}}>
      <Grid item style={{textAlign: "center", display: "inline-block", marginLeft: "30px"}}>
        <Button onClick={() => navigate("/participant-login")} variant="contained" size="large">
          Player Login
        </Button>
      </Grid>
      <Grid item style={{float: "left"}}>
        <Button onClick={() => navigate("/create-game")} variant="contained" style={{display: "flex", justifyContent: "center", marginLeft: "30px", backgroundColor: "#11AA88"}} size="large">
          Host Login
        </Button>
      </Grid>
    </Grid>
  </>
  );
    
}
