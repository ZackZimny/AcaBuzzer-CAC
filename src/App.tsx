
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AdminPage } from './pages/AdminPage';
import { BuzzerParticipant } from './pages/BuzzerParticipant';
import { CreateGamePage } from './pages/CreateGamePage';
import { GameStartPage } from './pages/GameStartPage';
import { HomePage } from './pages/HomePage';
import { ParticipantNamePage } from './pages/ParticipantNamePage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/participant" element={<BuzzerParticipant/>} />
          <Route path="/participant-login" element={<ParticipantNamePage/>} />
          <Route path="/create-game" element={<CreateGamePage />} />
          <Route path="/game-start" element={<GameStartPage />} />
          <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
