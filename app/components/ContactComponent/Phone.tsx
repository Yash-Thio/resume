import React from 'react'

function Phone(props:any) {
  return (
    <div>
              <label className="sr-only" htmlFor="phone">Phone</label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                required
                value={props.text}
                onChange={props.onChange}
                name="phone"
              />
            </div>
  )
}

export default Phone