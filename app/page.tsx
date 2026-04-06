import Logo from "./components/logo";
import Hero from "./components/hero";
import BenefitCard from "./components/benefitCard";
import InfiniteScroll from "./components/benefitScroll";
import EquipmentAndFreight from "./components/equipment";
import HowItWorks from "./components/howItWorks";
import TrustCTA from "./components/trustAndCTA";

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
      <div className="w-full dark:bg-gray-900 flex flex-col pt-10 pb-25">
        <Hero />
        <div className="flex flex-col gap-10 mt-15">
          <h2 className="text-6xl text-center border-b-3 pb-10 border-orange-600">What we offer!</h2>
          <div className="flex flex-row gap-15 justify-center flex-wrap border-b-3 border-orange-600 pb-10">
            <InfiniteScroll items={benefits} />
          </div>
        </div>
        <div>
          <EquipmentAndFreight equipment={equipment} freight={freight} />
        </div>
        <div>
          <HowItWorks />
        </div>
        <div>
          <TrustCTA />
        </div>
      </div>
    </div>
  );
}
