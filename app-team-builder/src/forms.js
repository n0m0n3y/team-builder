import React, { useState } from "react";


const Forms = props => {
  //const [addNewMember] = useState([]);
  //console.log("this is props",props)
   const  [myTeam, setMyTeam]= useState({
    name:"",
    email:"",
    role:"",
  });
const handleChanges = e => {
   setMyTeam({...myTeam, [e.target.name]: e.target.value});
   console.log(myTeam);
};
const submitForm = e => {
    e.preventDefault();
  //.push(props.)
   props.newMem(myTeam);
   
    setMyTeam({name:"", email:"", role:""});
};
return (
    <form onSubmit={submitForm}>
        <label htmlFor="name">  Name:  </label>
        <input
        id=""
        type="text"
        name="name"
        onChange={handleChanges}
        placeholder="New Team Members Name"
        value={myTeam.name}
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