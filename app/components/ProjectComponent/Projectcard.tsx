export default function Projectcard (card : {name : string , techUsed : string, about : string }){
    return (
        <div className="container h-2/5 w-64 py-4 px-4 bg-gray-900 shadow-md rounded-xl space-y-2">
             <h2 className="font-bold text-xl pt-2">{card.name}</h2>
             <small className="text-xs text-gray-500">{card.techUsed}</small>
             <p className="pt-4 text-lg font-apple-system">{card.about}</p>
        </div>
    )
}