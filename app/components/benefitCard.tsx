interface BenefitCardProps {
    text: string
}

export default function BenefitCard({text} : BenefitCardProps) {
    return(
        <div className="bg-slate-400/75 text-shadow-sm dark:bg-gray-950 w-80 h-60 rounded-lg border-1 border-orange-600/60 p-4">
            <p className="transition-all duration-300 hover:scale-110 hover:underline select-none w-full h-full text-3xl text-center flex items-center justify-center text-orange-600 font-bold text-wrap">{text}</p>
        </div>
    )
}