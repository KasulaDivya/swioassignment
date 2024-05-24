import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase.js';


function Main() {
  const [data,setData]=useState({
    Name:"",
    Amount:""
  
  })
  const nameFunction=(e)=>{
    setData({...data,Name:e.target.value})
  }
  const amountFunction=(e)=>{
    setData({...data,Amount:e.target.value})
  }

  const makePayment=async(event)=>{
    event.preventDefault();

    const stripe=await loadStripe ("pk_test_51PJ7TISDGm3VSLieZjdiglnFNGoufmHigYgOAldLO0Vo4V9AGBsNyr6EAmhi4JzUSYz3wRtnF8VdKnmzAgZDS9gL0069bLlznC")



    // Store data in Firebase Firestore
    try {
      const docRef = await addDoc(collection(db, "payments"), {
        name: data.Name,
        amount: data.Amount,
        timestamp: new Date()
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
       const body={
        product:data
       }
       const headers={
        "Content-Type":"application/json"
       }
       const response=await fetch("https://swioassig.onrender.com/api/create-checkout-session",{
        method:"POST",
        headers:headers,
        body:JSON.stringify(body)
       })
const session=await response.json();

const result= stripe.redirectToCheckout({
  sessionId:session.id

})
if(result.error){
  console.log(result.error)
}

  }



  return (
    <center>
    <form onSubmit={makePayment}>
   <label id='hii'>Name</label><br/>
   <input type='text' id='hii' onChange={nameFunction}/><br/>
   <label id='hii'>Amount</label><br/>
   <input type='number' onChange={amountFunction} id='hii'/><br/>
   <button type="submit " style={{backgroundColor:'orange',padding:'1rem',marginTop:'2rem',borderRadius:'1rem',marginLeft:'3rem'}}>payment</button>

      </form>
      
      </center>
  
  )
}

export default Main;