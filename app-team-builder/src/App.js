import React,{useState} from 'react';
import './App.css';
import logo from './logo.svg';
import Forms from "./Forms";
import TeamMembers from "./TeamMembers";
//import ReactDOM from "react";

function App() {
  const [myTeam, setMyTeam]= useState([]);
  const newMem = info => {
    const addNewMem = {
     id: Date.now(),
     name: info.name,
     email:info.email,
     role: info.role
    }
    setMyTeam([...myTeam, addNewMem])
  }
  return (
   
       <div className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <h1>Team Builder App</h1>
        <Forms newMem={newMem}/>
        <TeamMembers newMemList={myTeam}/>
        
      </div>
   
  );
  }

export default App;
