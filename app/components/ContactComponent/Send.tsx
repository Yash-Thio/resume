'use client'


export default function Btn (props:any){
    return(
        <button 
        onClick = {props.click}
        className=" button-89 ">
            Send Message
        </button>
    )
}