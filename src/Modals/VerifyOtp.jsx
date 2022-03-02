import React, { useEffect, useState } from 'react'
import {Modal} from "react-bootstrap"
import './verify.css'

function VerifyOtp({setVerify}) {
    const [smShow, setSmShow] = useState(true)
    const [otp,setOtp]=useState(null)
    const [message,setMessage]=useState()
    const manageSubmit=(e)=>{
        if(otp){
            if(otp.length===6){
                // axios.post('/verify-otp', {otp:otp}).then((res)=>{
                //   console.log(res.data)
                // })
            }else{
                setMessage('Enter Valid OTP')
            }
        }else{
            setMessage('Enter  OTP')
        }
    }
   
  return (
    <div>
        <Modal
        size="sm"
        show={smShow}
        onHide={() =>{
            setSmShow(false)
            setVerify(false)
        }}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Verify Your Mobile
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="otp-body">
                <div className="otp-inner-div">
                <input type="number" onChange={(e)=>{
                    setOtp(e.target.value)
                }} placeholder='Enter OTP' />
                </div>
                <div className="otp-inner-div">
                <button onClick={manageSubmit}>Verify</button>
                </div>
                
            </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default VerifyOtp