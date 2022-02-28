import React, { useState } from "react";
import "./login.css";
import axios from '../../Constants/axios'
import {Spinner} from 'react-bootstrap'
import VerifyOtp from "../../Modals/VerifyOtp";


function LoginBody() {

  const [memNumber,setMemNumber]=useState(null)
  const [message,setMessage]=useState(null)
  const [verify,setVerify]=useState(false)
  const [spinner,setSpinner]=useState(false)
  const findMember=(e)=>{
  
      if(e.target.value.length===11){
        setSpinner(true)
        axios.post(`/check-member`,{member:e.target.value}).then((res)=>{
          
          if(!res.data.status){
            setMessage(res.data.message)
          }else{
            setMessage(null)
            setMemNumber(e.target.value)
          }
          setSpinner(false)
        })
      }else{
        setSpinner(false)
        setMessage('Pleas Enter A valid Membership number')
      }
    
  }
  const manageSubmit=(e)=>{
    
    setSpinner(true)
    setMessage(null)
    if(memNumber){
      axios.post(`/submit-login`,{member:memNumber}).then((res)=>{
        if(res.data.status){
          setSpinner(false)
          setMessage(res.data.message)
          setVerify(true)
          
        }else{
          setMessage(res.data.message)
          setSpinner(false)
        }
      })
    }else{
      setMessage('Pleas Enter A valid Membership number')
    setSpinner(false)
    }
    
    
  }
  
  return (
    <>

    <div className="login_body">
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
      {spinner?"":<div>{message&&<p className="login-message">{message}</p>}</div>}
      
      <div className="login_body_parent">
       {spinner?<Spinner animation="border" variant="primary" />:<button onClick={manageSubmit}>Submit</button>} 
      </div>
    </div>
    {verify&&<VerifyOtp  setVerify={setVerify}/>}
    
    </>
  );
}

export default LoginBody;
