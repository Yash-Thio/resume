export default function Coursecard (card : {name : string , language : string , image : string , key : number}){
  return (
    <div className="h-88 w-64 py-4 bg-gray-900 shadow-md rounded-xl overflow-hidden">
      <div className="pb-0 pt-2 px-4 flex flex-col items-start">
        <p className="text-xs uppercase font-bold text-gray-500">Daily Mix</p>
        <small className="text-xs text-gray-500">12 Tracks</small>
        <h4 className="font-bold text-xl">Frontend Radio</h4>
      </div>
      <div className="overflow-visible py-2">
        <img
          alt="Card background"
          className="object-cover w-full h-40 rounded-xl"
          src=""
        />
      </div>
    </div>
  );
};



