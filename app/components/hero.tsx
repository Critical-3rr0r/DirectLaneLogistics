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
        <div className="flex flex-row gap-2 overflow-hidden w-full justify-center">
            <motion.h1 initial={{x: -1000}} animate={{x: 0}} transition={{duration: .5}} className="text-6xl font-bold">Flatbed <span className="text-orange-600">Dispatch</span></motion.h1>
            <motion.h1 initial={{x: 1000}} animate={{x: 0}} transition={{duration: 1.5, delay: .75}} className="text-6xl font-bold">Built for <span className="text-orange-600">Steel Haulers</span></motion.h1>
        </div>
        
        <motion.p className="text-3xl mt-5" initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: .75, delay: 1.5, ease: "easeInOut"}}>Secure <span className="underline font-bold text-orange-600">high paying loads</span> and <span className="underline font-bold text-orange-600">consistent lanes</span></motion.p>

        <motion.form id="signup-form" onSubmit={(e) => {e.preventDefault(); sendEmail()}} className="mt-10 bg-slate-400/50 dark:bg-gray-950 w-200 flex flex-col gap-2 text-xl items-center pt-5 pb-5 shadow-lg shadow-orange-800/25 rounded-lg border-1 border-orange-600" initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: .75, delay: 2}}>
            <h2 className="text-4xl">Get Started <span className="text-orange-600 font-bold underline">Today!</span></h2>
            <label htmlFor="name" className="text-2xl" >Name</label>
            <input name="name" type="text" placeholder="John Doe" className="text-center" onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor="email">Email</label>
            <input name="email" type="email" placeholder="youremail@domain.com" className="text-center" onChange={(e) => setEmail(e.target.value)}></input>
            <label htmlFor="phone">Phone Number</label>
            <input name="phone" type="phone" placeholder="(111) 111-1111" className="text-center" onChange={(e) => setPhone(e.target.value)}></input>
            <label htmlFor="mcNumber">MC Number</label>
            <input name="mcNumber" type="text" placeholder="MC Number" className="text-center"></input>
            <label htmlFor="equipment">Equipment Type</label>
            <input name="equipment" type="text" className="text-center" placeholder="What kind of equipment?"></input>
            <label htmlFor="truckAmount">Number of trucks</label>
            <input name="truckAmount" className="text-center" type="number" placeholder="Number of trucks"></input>
            <button type="submit" className="bg-orange-600 text-black p-2 rounded-full transition-all duration-300 hover:bg-orange-500 hover:scale-110 cursor-pointer">Send Email!</button>
        </motion.form>
      </div>
    )
}