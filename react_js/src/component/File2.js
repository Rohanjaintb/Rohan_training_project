import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const[phonenumber,setphonenumber]=useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
      console.log("Name: ", name);
      console.log("Email: ", email);
      console.log("Gender: ", gender);
      console.log("Birthdate: ", birthdate);
      console.log("phonenumber:",phonenumber)
  };
  const SubmitEvent=()=>{
    alert("submitted")
     

  }
  const resetElement=()=>{
    
    setName("");
    setEmail("");
    setGender("");
    setBirthdate("");
    setphonenumber("");


  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      /> <br /> <br />

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      /> <br /> <br />

      <label htmlFor="gender">Gender:</label>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={gender === "male"}
        onChange={(event) => setGender(event.target.value)}
      /> 
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={gender === "female"}
        onChange={(event) => setGender(event.target.value)}
      /> 
      <label htmlFor="female">Female</label> <br /> <br />

      <label htmlFor="birthdate">Birthdate:</label>
      <input
        type="date"
        id="birthdate"
        name="birthdate"
        value={birthdate}
        onChange={(event) => setBirthdate(event.target.value)}
      /> <br /> <br />
      <label htmlFor="phonenumber">Phone Number</label>
        <input type="phone" name="phonenumber" id="phonenumber" value={phonenumber} onChange={(event)=>setphonenumber(event.target.value)} required />
      <br /> <br /><button type="submit" value="Submit" id="number " onClick={SubmitEvent}>Submit</button>
      
        <button type="reset" onClick={resetElement}>Reset</button>
    
    </form>
    
    </>
  );
}

export default MyForm;
