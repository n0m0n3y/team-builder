import React,{useState} from 'react';
import './App.css';
import Forms from "./forms";
import TeamMeambers from "./teamMembers";

function App() {
  const [myTeam, setMyTeam]= useState([]);
  const newMem = info => {
    setMyTeam([...myTeam, info])

  }
  
  return (
    <div className="App">
      <div className="App-header">
        <h1>Team Builder App</h1>
        <Forms newMem={newMem}/>
        <TeamMeambers newMemList={myTeam}/>
        
      </div>
    </div>
  );
}

export default App;
