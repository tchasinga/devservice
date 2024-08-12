import React from "react";
import AnimatedGridPattern from "../Animation/magicui/animated-grid-pattern";
import { cn } from "../../lib/utils.ts";

export default function Keeper() {
    return (
        <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden  bg-background p-20 md:shadow-xl">
          <p className="z-10 whitespace-pre-wrap text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
            Animated Grid Pattern
          </p>
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
            )}
          />
        </div>
      );
}
