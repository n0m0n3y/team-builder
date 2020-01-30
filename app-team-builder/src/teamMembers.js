import React from "react";


const TeamMembers = props => {
    return (
    <div className="newMem">
    {props.newMemList.map(info =>(
      
        <div key={info.id}>
            <h1>Name: {info.name}</h1> 
            <p>Email: {info.email}</p>
            <p>Role: {info.role}</p>
        </div>
        
        
        
        
    ))}
    
    
    </div>
    )
}

  
  


export default TeamMembers;