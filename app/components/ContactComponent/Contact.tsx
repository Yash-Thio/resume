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

  async function handleClick(){
    try {
      const docRef = await addDoc(collection(db, "posts"), {
          name : formData.name,
          email : formData.email,
          message : formData.message 
      })
      console.log("Document written with ID: ", docRef.id)
  } catch (error:any) {
      console.error(error.message)
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
    <div className = "Contact h-screen flex justify-center items-center" id = 'contact'>
        <Message text={formData.message} onChange={handleMessageChange}/>
        <Email text={formData.email} onChange={handleEmailChange} />
        <Name text={formData.email} onChange={handleNameChange} />
        <Btn click={handleClick} />
    </div>
  )
}

