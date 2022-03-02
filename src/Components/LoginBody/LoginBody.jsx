import React, { useState } from "react";
import "./login.css";
import membersDataServices from '../../Service/user-services'
import authServices from "../../Service/auth-services";
import {Spinner} from 'react-bootstrap'
import VerifyOtp from "../../Modals/VerifyOtp";


function LoginBody() {

  const [memNumber,setMemNumber]=useState(null)
  const [message,setMessage]=useState(null)
  const [verify,setVerify]=useState(false)
  const [spinner,setSpinner]=useState(false)
  const findMember= async(e)=>{
      // const data= await membersDataServices.getAllmembers()
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      if(e.target.value.length===10){

        setSpinner(true)
        let member=await membersDataServices.getMember(parseInt(e.target.value))
        if(member.length!=0){
          setMessage(null)
          setMemNumber(e.target.value)
        }else{
          console.log('no data found')
          setMessage('Invalid Membership number')
        }
          setSpinner(false)
        
      }else{
        setSpinner(false)
        setMessage('Pleas Enter A valid Membership number')
      }
    
  }
  const manageSubmit=(e)=>{
    
    setSpinner(true)
    setMessage(null)
    authServices.requestOTP()
    if(memNumber){
      // axios.post(`/submit-login`,{member:memNumber}).then((res)=>{
      //   if(res.data.status){
      //     setSpinner(false)
      //     setMessage(res.data.message)
      //     setVerify(true)
          
      //   }else{
      //     setMessage(res.data.message)
      //     setSpinner(false)
      //   }
      // })
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
