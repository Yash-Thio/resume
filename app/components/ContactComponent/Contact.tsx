'use client'
import React, { useState, ChangeEvent, useReducer, useMemo, useCallback } from "react";

import { initializeApp } from "firebase/app";
import firebaseConfig from "@/app/firebaseConfig";
import {getFirestore, collection, addDoc } from "firebase/firestore"

import Message from './Message'
import Email from './Email'
import Name from './Name'
import Btn from "./Send";

export default function Contact() {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const [formData, setFormData] = React.useState(
    {message: "", name: "", email:""}
  )

  async function handleClick(event:any){

    event.preventDefault();

    if (formData.message && formData.name && formData.email) {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
          name : formData.name,
          email : formData.email,
          message : formData.message 
      })
      alert("message sent successfully")
    } catch (error:any) {
      console.log(error.message)
    }
  }
  else{
    alert("Message not sent. Please fill all the input fields")
  }
  }
 
  function handleMessageChange(event:any){
    setFormData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }
  
  function handleNameChange(event:any){
    setFormData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }
  
  function handleEmailChange(event:any){
    setFormData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <form className = "Contact h-screen flex flex-wrap gap-4 justify-center items-center space-x-4" id = 'contact'>
        <Message text={formData.message} onChange={handleMessageChange}/>
        <div className="space-y-4 pb-4">
        <Email text={formData.email} onChange={handleEmailChange} />
        <Name text={formData.email} onChange={handleNameChange} />
        </div>
        <Btn click={handleClick} />
    </form>
  )
}

