import React from "react";


const teamMeamber = props => {
    return(
    <div className="newMem">
    {props.newMemList.map(info=>{
        return(
        <div key={info.id}>
            <h3>Name: {info.Name}</h3> 
            <p>Email: {info.Email}</p>
            <p>Role: {info.Role}</p>
        </div>
        
        );
        
        
    })}
    
    
    </div>
    )
}



export default teamMeamber;