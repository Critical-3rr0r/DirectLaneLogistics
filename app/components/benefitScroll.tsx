"use client"
import { useEffect, useRef } from "react";
import BenefitCard from "./benefitCard";

export default function InfiniteScroll({ items }: { items: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrame: number;
    let scroll = 0;

    const speed = 0.45; // pixels per frame, adjust for speed

    const animate = () => {
      scroll += speed;
      if (scroll >= container.scrollWidth / 2) scroll = 0; // loop
      container.style.transform = `translateX(-${scroll}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-10"
        style={{ display: "inline-flex" }}
      >
        {[...items, ...items].map((item, idx) => (
            <BenefitCard key={idx} text={item}/>
        ))}
      </div>
    </div>
  );
}