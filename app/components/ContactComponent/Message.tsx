'use client'
import React, { useState, ChangeEvent, useReducer, useMemo, useCallback } from "react";

// the character length does not work and remove the scroll bar and implement sctolling in alternate method or just fix the box size to accomodate 500 characters.

export default function Message(){

  const maxCharacters = 300;
  const [text, setText] = useState("");

  const handleTextChange = useCallback((event : any) => {
    const newText = event.target.value;
    setText(newText);
  }, []);

  const characterCount = text.length;
  
  return(
    <div className="max-w-xs">
      <label htmlFor="description" className="block text-sm font-medium text-gray-700">
         Description
      </label>
      <textarea
        value={text}
        onChange={handleTextChange}
        required
        maxLength={300}
        id="description"
        placeholder="Enter your message"
        rows= {5} // Adjust rows based on the number of lines
        cols = {100}
        className="message bg-transparent border border-gray-300 p-2 rounded-md w-full"
      />
      <p className="text-sm text-gray-500">{`${characterCount}/${maxCharacters} characters`}</p>
    </div>
    )
}