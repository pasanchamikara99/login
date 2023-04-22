import React from "react";
import { useState } from "react";
import {useSignup} from '../hooks/useSignup'



const signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {signup,error,isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email,password)
    
  };

  return (
    <form className="signup" onSubmit={handleSubmit} action="">
      <h3>Sign Up</h3>
      {error && <div className="error">{error}</div>}
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

      <button disabled = {isLoading}>Sign Up</button>
     
    </form>
  );
};

export default signup;
