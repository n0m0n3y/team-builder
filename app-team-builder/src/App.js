import React,{useState} from 'react';
import './App.css';
import Forms from "./Forms";
import TeamMembers from "./TeamMembers";

function App() {
  const [myTeam, setMyTeam]= useState([]);
  const newMem = info => {
    const addNewMem = {
     id: Date.now(),
     name: info.name,
     email: info.email,
     role: info.role
    }
    setMyTeam([...myTeam, addNewMem])
  }
  return (
   
       <div className="App-header">
        <h1>Team Builder App</h1>
        <Forms newMem={newMem}/>
        <TeamMembers newMemList={myTeam}/>
        
      </div>
   
  );
  }

export default App;
