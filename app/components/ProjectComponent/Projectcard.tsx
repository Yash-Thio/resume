export default function Projectcard (card:any){

    const tech = card.techUsed.map((x:string)=>(
        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
            {x}
        </div>
    ))
    return (

        
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
                <div className="container w-full p-4 bg-white dark:bg-gray-800">
                    <p className="font-medium text-indigo-500 text-md">
                        
                    </p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-indigo-500">
                        {card.name}
                    </p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        {card.about}
                    </p>
                    <div className="flex flex-wrap items-center mt-4 justify-starts gap-y-2">
                        {tech}
                    </div>
                </div>
            </a>
        </div>

    )
}