
interface EquipmentProps{
    equipment: string[],
    freight: string[]
}

export default function EquipmentAndFreight({equipment, freight}: EquipmentProps){
    return(
        <div className="flex flex-row gap-75 justify-center p-10 text-3xl">
            <div className="flex flex-col gap-10 w-125 items-center bg-slate-400/50 dark:bg-slate-950 p-10 rounded-lg shadow-lg shadow-orange-800/50 border-2 border-orange-600/75">
                <h3 className="text-5xl underline text-orange-600">Equipment</h3>
                <ul className="self-start list-disc pl-10">
                    {equipment.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex flex-col gap-10 w-125 items-center bg-slate-400/50 dark:bg-slate-950 p-10 rounded-lg shadow-lg shadow-orange-800/50 border-2 border-orange-600/75">
                <h3 className="text-5xl underline text-orange-600">Freight Types</h3>
                <ul className="self-start list-disc pl-10">
                    {freight.map((item, index) => {
                        return(
                            <li key={index}>{item}</li>
                        )
                    })
                    }
                </ul>
            </div>
        </div>
    )
}