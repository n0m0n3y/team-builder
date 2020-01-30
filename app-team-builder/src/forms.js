import React, { useState } from "react";


const Forms = props => {
  //console.log("this is props",props)
   const  [myTeam, setMyTeam]= useState({
    Name:"",
    Email:"",
    Role:"",
  });
const handleChanges = e => {
   setMyTeam({...myTeam, [e.target.name]: e.target.value});
   console.log(myTeam);
};
const submitForm = e => {
    e.preventDefault();
 
   props.addNewMember(myTeam);
    setMyTeam({Name:"", Email:"", Role:""});
};
return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">  Name:  </label>
        <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="New Team Members Name"
        value={myTeam.title}
        />
        <lable htmlFor="email">  Email:  </lable>
        <input
        id="email"
        type="text"
        name="email"
        placeholder="Members Email"
        onChange ={handleChanges}
        value={myTeam.email}
        />
        <lable htmlFor="role"> Role:  </lable>
        <input 
        id="role"
        type="text"
        name="role"
        placeholder="Members Role"
        onChange ={handleChanges}
        value={myTeam.role}
        />
        
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding:"5%"
        }}>
        <button  className ="submit" type ="submit">ADD MEMBER</button>
        </div>
        </form>
);
};
  export default Forms;