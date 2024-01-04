'use client'
import React, { useState, ChangeEvent, useReducer, useMemo, useCallback } from "react";


export default function Message(props:any){

  const maxCharacters = 300;

  const characterCount = props.text.length;
  
  return(
    <div className="max-w-xs">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
         Description
      </label>
      <textarea
        value={props.text}
        onChange={props.onChange}
        required
        maxLength={300}
        id="description"
        placeholder="Enter your message"
        rows= {5} // Adjust rows based on the number of lines
        cols = {100}
        className="message bg-transparent border border-gray-300 p-2 rounded-md w-full"
        name ="message"
      />
      <p className="text-sm text-gray-500">{`${characterCount}/${maxCharacters} characters`}</p>
    </div>
    )
}

