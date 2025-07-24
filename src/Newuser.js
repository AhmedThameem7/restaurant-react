import React from "react";
import "./Newuser.css";
import { useState } from "react";
import user from "./images/User.svg";
function Newuser() {
  const [name, setName] = useState("");
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");

  const [nameerr, setNameerr] = useState("");
  const [mailerr, setMailerr] = useState("");
  const [passworderr, setPassworderr] = useState("");
  const [phoneerr, setPhoneerr] = useState("");
  const [addresserr, setAddresserr] = useState("");

  const handleuser = (e) => {
    e.preventDefault();
    let correct = true;
    if (name === "") {
      setNameerr("please enter your name");
      correct = false;
    } else {
      setNameerr("");
      correct = true;
    }
    if (mail === "") {
      setMailerr("please Enter your Email Id");
      correct = false;
    } else {
      setMailerr("");
    }
    if (password === "") {
      setPassworderr("please Enter your Password");
      correct = false;
    } else if (password.length < 8) {
      setPassworderr("Password must be more than 8 characters");
      correct = false;
    } else {
      setPassworderr("");
    }
    if (phone === "") {
      setPhoneerr("please Enter your phone number");
      correct = false;
    } else {
      setPhoneerr("");
    }
    if (address === "") {
      setAddresserr("please Enter your Address");
      correct = false;
    } else {
      setAddresserr("");
    }
    if (correct) {
      const newuser={
        name:name,
        email:mail,
        password:password,
        phone:phone,
        address:address
      }
      localStorage.setItem("user",JSON.stringify(newuser));
      alert("New user registered Successfully");
      setName('')
      setmail('')
      setpassword('')
      setphone('')
      setaddress('')
    }
  };
  return (
    <div className="newuser">
      <form className="userform" onSubmit={handleuser}>
        <h3 className="regh3">Register New User!</h3>
        <img src={user} className="userimg"></img>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          name="name" 
          className="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {nameerr && <div>{nameerr}</div>} <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          className="email"
          value={mail}
          onChange={(e)=>setmail(e.target.value)}
        />
        {mailerr && <div>{mailerr}</div>}{" "}
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          name="password" 
          className="password" 
          value={password}
          onChange={(e)=>setpassword(e.target.value)}
        />
        {passworderr && <div>{passworderr}</div>}{" "}
        <label htmlFor="phone">Phone:</label>
        <input 
          type="tel" 
          name="phone" 
          className="phone" 
          value={phone}
          onChange={(e)=>setphone(e.target.value)}
        />
        {phoneerr && <div>{phoneerr}</div>}{" "}
        <label htmlFor="address">Address:</label>
        <textarea 
          name="address" 
          className="address"
          value={address}
          onChange={(e)=>setaddress(e.target.value)} 
        />
        {addresserr && <div>{addresserr}</div>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Newuser;
