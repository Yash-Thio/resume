'use client'


export default function Btn (props:any){
    return(
        <button 
        onClick = {props.click}
        className="bg-transparent border border-blue-500 p-2 rounded-md">
            Send
        </button>
    )
}