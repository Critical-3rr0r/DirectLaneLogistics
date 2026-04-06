"use client"
import { motion } from "framer-motion";
import Image from "next/image";
export default function Logo(){
    return(
    <div className="self-center mt-5 bg-linear-to-b dark:from-gray-900/10 dark:to-gray-900 pb-10 w-full flex flex-col items-center">
        <motion.div initial={{opacity: 0}} animate={{opacity: 100}} transition={{duration: 1.5}}>
            <Image src={"/images/DirectLaneLogo.png"} width={750} height={750} alt="company logo"/>
        </motion.div>
    </div>

    )
}