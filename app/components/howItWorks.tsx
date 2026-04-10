

export default function HowItWorks(){
    return(
        <div className="flex flex-col items-center text-4xl gap-10 mt-20 mb-20 bg-slate-400/50 dark:bg-slate-950 w-screen md:w-150 justify-self-center p-10 rounded-xl border-t-2 border-b-2 md:border-2 border-orange-600 shadow-lg shadow-orange-800/50">
            <h2 className="text-6xl text-orange-600 font-bold italic">How it works!</h2>
            <ul className="list-decimal flex flex-col gap-10 font-semibold">
                <li>Submit your information!</li>
                <li>Sign the dispatch agreement!</li>
                <li>Get loads booked quickly!</li>
            </ul>
        </div>
    )
}