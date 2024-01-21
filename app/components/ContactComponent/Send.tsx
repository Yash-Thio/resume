'use client'


export default function Btn (props:any){
    return(
        <div className="mt-4">
            <button
              type="submit"
              onClick = {props.click}
              className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send
            </button>
          </div>
    )
}