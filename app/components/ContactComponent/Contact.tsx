'use client'
import React, { useState, ChangeEvent, useReducer, useMemo, useCallback } from "react";

import { initializeApp } from "firebase/app";
import firebaseConfig from "@/app/firebaseConfig";
import {getFirestore, collection, addDoc } from "firebase/firestore"

import Message from './Message'
import Email from './Email'
import Name from './Name'
import Phone from "./Phone";
import Btn from "./Send";

export default function Contact() {
  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)

  const [formData, setFormData] = React.useState(
    {message: "", name: "", email:"", phone:""}
  )

  async function handleClick(event:any){

    event.preventDefault();

    if (formData.message && formData.name && formData.email && formData.phone) {
    try {
      const docRef = await addDoc(collection(db, "posts"), {
          name : formData.name,
          email : formData.email,
          message : formData.message, 
          phone : formData.phone
      })
      setFormData({
        message: "",
        name: "",
        email: "",
        phone: "",
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
 
  function handleChange(event:any){
    setFormData((prevData)=>{
      return{
        ...prevData,
        [event.target.name] : event.target.value
      }
    })
  }

  return (
    <section className="Contact" id = 'contact'>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Aspiring software developer here! I thrive on turning ideas into code magic. With a
              solid web development background, I bring creativity, problem-solving, and a team
              spirit to the table. Let&#39;s build something amazing together!
           </p>

           <div className="mt-8">
              <a href="" className="text-2xl font-bold text-pink-600"> +91 933 0383 184 </a>

              <address className="mt-2 not-italic">Uniworld City, Tower- Garden 3, Flat Number- 403,
              <br/> New Town Action Area 3, Kolkata, West Bengal- 700160 </address>

            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="" className="space-y-4 text-black text-lg">
          
              <Name text={formData.name} onChange={handleChange} />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <Email text={formData.email} onChange={handleChange} />

                <Phone text={formData.phone} onChange={handleChange} />

              </div>

              <Message text={formData.message} onChange={handleChange}/>

              <Btn click={handleClick} />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

