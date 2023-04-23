import React from "react";
import { useState } from "react";
import {useSignup} from '../hooks/useSignup'
import { Link } from "react-router-dom";



const signup = () => {
  const [firstname, setfName] = useState("");
  const [lastname, setlName] = useState("");
  const [mobilenumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setCpassword] = useState("");
  const {signup,error,isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(firstname,lastname,mobilenumber,email,password,confirmpassword)
    
  };

  return (
    <form className="signup" onSubmit={handleSubmit} action="">
      <h3>Sign Up</h3>
      {error && <div className="error">{error}</div>}
      <label htmlFor="">First Name</label>
      <input
        type="text"
        name=""
        onChange={(e) => setfName(e.target.value)}
        value={firstname}
      />
      <label htmlFor="">Last Name</label>
      <input
        type="text"
        name=""
        onChange={(e) => setlName(e.target.value)}
        value={lastname}
      />
       <label htmlFor="">Mobile Number</label>
      <input
        type="text"
        name=""
        onChange={(e) => setMobileNumber(e.target.value)}
        value={mobilenumber}
      />
      <label htmlFor="">Email</label>
      <input
        type="email"
        name=""
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <label htmlFor="">Password</label>
      <input
        type="password"
        name=""
        onChange={(e) => setCpassword(e.target.value)}
        value={confirmpassword}
      />

      <button disabled = {isLoading}>Sign Up</button>

      <br></br>
      <br></br>
      
      <div>  
            <Link className="link" to="/">Already Registred ?  <span>Login</span></Link>
      </div>
     
    </form>
  );
};

export default signup;
