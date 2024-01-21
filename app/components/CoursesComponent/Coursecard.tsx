import { createReadStream } from "fs";

export default function Coursecard (card : any){
  return (
    <div className=" Coursecard h-2/5 w-64 py-4 bg-gray-900 shadow-md rounded-xl overflow-hidden">
      <div className="pb-0 pt-2 px-4 flex flex-col items-start">
        <h4 className="font-bold text-xl hover:underline"><a href={card.courseLink} target="_blank">{card.name}</a></h4>
        <small className="text-xs text-gray-500">{card.language}</small>
        <p className="text-xs uppercase font-bold text-gray-500">{card.by}</p>
      </div>
      <div className="p-4">
        <img
          alt="image"
          className="rounded-xl object-cover h-full w-full"
          src={card.image}
        />
      </div>
    </div>
     );
};




