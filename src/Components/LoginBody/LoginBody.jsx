import React, { useState } from "react";
import "./login.css";
import axios from '../../Constants/axios'

function LoginBody() {
  const [member,setMember]=useState(false)
  const [memNumber,setMemNumber]=useState(null)
  const [message,setMessage]=useState(null)
  const findMember=(e)=>{
  
      if(e.target.value.length===11){
        axios.post(`/check-member`,{member:e.target.value}).then((res)=>{
          console.log(res.data)
        })

        setMessage(null)
      }else{
        setMessage('Pleas Enter A valid Membership number')
      }
    
  }
  const manageSubmit=()=>{
    setMember(true)
    
  }
  const submitOTP=()=>{

  }
  return (
    <>
    {member?<div className="login_body">
      <div className="login_body_parent">
        <input
          maxLength="6"
          type="text"
          placeholder="Enter OTP  "
          required
          className="form-control"
        />
      </div>
      <div className="login_body_parent">
        <button onClick={submitOTP}>Submit</button>
      </div>
    </div>:<div className="login_body">
      <div className="login_body_parent">
        <input
          maxLength="11"
          onChange={findMember}
          type="text"
         
          placeholder="Enter your Membership Number "
          required
          className="form-control"
        />
      </div>
      {message&&<p className="login-message">{message}</p>}
      <div className="login_body_parent">
       
        <button onClick={manageSubmit}>Submit</button>
      </div>
    </div>}
    
    </>
  );
}

export default LoginBody;