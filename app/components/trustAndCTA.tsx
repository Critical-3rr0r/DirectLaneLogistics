"use client"


export default function TrustCTA(){
    const jumpToForm = () => {
        const el = document.getElementById("signup-form");
        el?.scrollIntoView({behavior: "smooth"})
    }
    return(
        <div className="bg-slate-400/50 dark:bg-slate-950 w-250 p-10 justify-self-center flex flex-col gap-15 rounded-2xl border-2 border-orange-600">
            <div className="flex flex-col gap-5 text-3xl items-center text-center">
                <h2 className="text-4xl">DirectLane Logistics is serving the steel freight industry with specialized flatbad dispatch services</h2>
                <h3>Join DirectLane Logistics today and start hauling better paying flatbad freight today!</h3>
            </div>

            <button onClick={jumpToForm} className="text-5xl bg-orange-500 transition-all duration-300 hover:bg-orange-400 hover:scale-110 cursor-pointer w-75 p-2 self-center rounded-full text-black">Apply now!</button>
        </div>
    )
}