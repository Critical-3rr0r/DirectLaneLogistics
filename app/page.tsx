import Logo from "./components/logo";
import Hero from "./components/hero";
import BenefitCard from "./components/benefitCard";
import InfiniteScroll from "./components/benefitScroll";
import EquipmentAndFreight from "./components/equipment";
import HowItWorks from "./components/howItWorks";
import TrustCTA from "./components/trustAndCTA";
import Image from "next/image";
export default function Home() {
  const benefits = [  
    "No forced dispatch",
    "Dedicated dispatcher",
    "Higher paying steel loads",
    "Backhaul planning",
    "Broker paperwork handled",
    "Driver loyalty program",
    "Factoring availability"
  ]
  const equipment = [
    "Flatbed",
    "Step Deck",
    "RGNs",
    "Oversize/weight/dimensions"
  ]
  const freight = [
    "Steel coils",
    "Steel beams",
    "Pipe",
    "Steel Plates",
    "Machinery"
  ]
  return (
    <div className="flex flex-col min-h-screen items-center bg-zinc-50 font-sans dark:bg-gray-950">
      <Logo />
      <div className="w-full dark:bg-gray-900 flex flex-col pt-10 z-1">
        <Image src={"/images/Truck.png"} height={500} width={1500} priority alt="Truck Background" objectFit="cover" className="-z-1 w-full h-350 self-center mask-b-from-0% mask-b-to-100% mask-t-from-25% mask-t-to-100% top-0 absolute"/>
        <Hero />
        <div className="flex flex-col gap-10 mt-35">
          <h2 className="text-6xl text-center pb-10">What you get with <span className="text-orange-600 font-bold">DirectLane</span></h2>
          <div className="flex flex-row gap-15 justify-center flex-wrap border-b-3 border-orange-600/75 pb-10">
            <InfiniteScroll items={benefits} />
          </div>
        </div>
        <div className="mt-15">
          <div className="absolute w-full h-50 -z-1">
            <Image width={1500} height={150} src={"/images/Inspect.png"} alt="Man inspecting steel coils loaded on flatbed" objectFit="cover" className="-z-1 w-full h-350 self-center mask-b-from-0% mask-b-to-75% mask-t-from-25% mask-t-to-100%"/>
          </div>

          <EquipmentAndFreight equipment={equipment} freight={freight} />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <TrustCTA />
        </div>
        <footer className="flex flex-col justify-center h-25 ml-10 text-xl text-black/50 dark:text-white/50">
          <h3>©DirectLane Logictics, LLC - 2026</h3>
        </footer>
      </div>
    </div>
  );
}
