'use client'
import React, { useState, ChangeEvent, useReducer, useMemo, useCallback } from "react";


export default function Message(props:any){

  const maxCharacters = 300;

  const characterCount = props.text.length;
  
  return(
    <div>
            <label className="sr-only" htmlFor="message">Message</label>

            <textarea
              className="w-full rounded-lg border-gray-200 p-3 text-sm"
              placeholder="Message"
              rows={8}
              maxLength={300}
              id="message"
              value={props.text}
              onChange={props.onChange}
              required
              name ="message"
            ></textarea>
            <p className="text-sm text-black text-right">{`${characterCount}/${maxCharacters} characters`}</p>
          </div>
    )
}

