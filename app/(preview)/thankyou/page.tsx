import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { ThumbsUp } from "lucide-react";
import React from "react";

const Thankyou = () => {
  return (
    <div className=" w-full h-screen flex items-center justify-center">
      <NeonGradientCard className="max-w-sm  items-center justify-center text-center">
        <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-wide  text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
          Thankyou For Your Feedback
        </span>
      </NeonGradientCard>
    </div>
  );
};

export default Thankyou;
