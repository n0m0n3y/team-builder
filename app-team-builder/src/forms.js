import React, { useState } from "react";


const Forms = props => {
  console.log("this is props",props)
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
        <label htmlFor="Name">Name:</label>
        <input
        type="text"
        name="Name"
        onChange={handleChanges}
        placeholder="New Team Members Name"
        value={myTeam.title}
        />
        <lable htmlFor="Email">Email:</lable>
        <textarea 
        type="text"
        name="Email"
        placeholder="Members Email"
        onChange ={handleChanges}
        value={myTeam.email}
        />
        <lable htmlFor="Role">Role:</lable>
        <textarea 
        type="text"
        name="Role"
        placeholder="Members Role"
        onChange ={handleChanges}
        value={myTeam.role}
        />
        <button type ="submit">ADD MEMBER</button>
        </form>
);
};
  export default Forms;