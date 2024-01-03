export default function Projectcard (card : {name : string , about : string }){
    return (
        <div className="container">
             <h3>{card.name}</h3>
             <h3>{card.about}</h3>
        </div>
    )
}