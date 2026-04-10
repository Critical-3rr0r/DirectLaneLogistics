"use client"
import {motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
export default function Hero(){
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [MCNumber, setMCNumber] = useState<string>("")
    const [equipment, setEquipment] = useState<string>("")
    const [numberOfTrucks, setNumberOfTrucks] = useState<number>(0)
    const sendEmail = async () => {
        if (name === "" || email === "" || phone === "" || MCNumber === "" || equipment === "" || numberOfTrucks === 0){
            toast.error("Please fill out the form (name, email, phone #) before submitting")
            return;
        }
        const formData = new FormData()

        formData.append("name", name)
        formData.append("email", email)
        formData.append("phone", phone)
        formData.append("MCNumber", MCNumber)
        formData.append("equipment", equipment)
        formData.append("numberOfTrucks", numberOfTrucks.toString())
        try{
            const res = await fetch("./api/mailer", {
                method: "POST",
                body: formData
            })
            if(!res.ok){
const data = await res.json()
toast.error(data.error)
                return;
            }
            toast.success("email sent! We will reach out shortly")
        }catch(err){
            toast.error("there was an error, please try again later")
        }
    }
    return(
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col md:flex-row gap-2 overflow-hidden w-full justify-center">
            <motion.h1 initial={{x: -1000}} animate={{x: 0}} transition={{duration: .5}} className="text-3xl text-center md:text-6xl font-bold">Flatbed <span className="text-orange-600">Dispatch</span></motion.h1>
            <motion.h1 initial={{x: 1000}} animate={{x: 0}} transition={{duration: 1.5, delay: .75}} className="text-3xl text-center md:text-6xl font-bold">Built for <span className="text-orange-600">Steel Haulers</span></motion.h1>
        </div>
        
        <motion.p className="text-3xl text-center mt-5" initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: .75, delay: 1.5, ease: "easeInOut"}}>Secure <span className="underline font-bold text-orange-600">high paying loads</span> and <span className="underline font-bold text-orange-600">consistent lanes</span></motion.p>

        <motion.form id="signup-form" onSubmit={(e) => {e.preventDefault(); sendEmail()}} className="flex flex-col gap-7 mt-25 bg-slate-400/50 dark:bg-gray-950 w-screen md:w-250 2xl:w-325 flex flex-col gap-2 text-xl items-center pt-5 pb-5 shadow-lg shadow-orange-800/25 rounded-lg border-t-1 border-b-1 md:border-1 border-orange-600" initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: .75, delay: 2}}>
            <h2 className="text-4xl md:text-6xl">Get Started <span className="text-orange-600 font-bold">Today!</span></h2>
            <div className="flex flex-col items-center gap-1">
                <label htmlFor="name" className="text-2xl">Name</label>
                <input name="name" type="text" placeholder="John Doe" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75" onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className="flex flex-col items-center gap-1">
                <label htmlFor="email" className="text-2xl">Email</label>
                <input name="email" type="email" placeholder="youremail@domain.com" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75" onChange={(e) => setEmail(e.target.value)}/>
            </div>

            <div className="flex flex-col items-center gap-1">
                <label htmlFor="phone" className="text-2xl">Phone Number</label>
                <input name="phone" type="phone" placeholder="(111) 111-1111" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75" onChange={(e) => setPhone(e.target.value)}/>
            </div>

            <div className="flex flex-col items-center gap-1">
                <label htmlFor="mcNumber" className="text-2xl">MC Number</label>
                <input name="mcNumber" type="text" placeholder="MC Number" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75"/>
            </div>
            
            <div className="flex flex-col items-center gap-1">
                <label htmlFor="equipment" className="text-2xl">Equipment Type</label>
                <input name="equipment" type="text" placeholder="What kind of equipment?" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75"/>
            </div>
            
            <div className="flex flex-col items-center gap-1">
                <label htmlFor="truckAmount" className="text-2xl">Number of trucks</label>
                <input name="truckAmount" type="number" placeholder="Number of trucks" className="text-center w-7/8 md:w-auto h-15 bg-orange-950/50 rounded-full shadow-md shadow-orange-600/25 text-3xl placeholder:text-white/75"/>
            </div>
            
            <button type="submit" className="bg-orange-600 text-black text-4xl mt-5 mb-5 p-2 rounded-full transition-all duration-300 hover:bg-orange-500 border-3 border-orange-950/50 shadow-orange-500/30 shadow-md hover:scale-110 cursor-pointer">Submit Carrier Info</button>
        </motion.form>
      </div>
    )
}