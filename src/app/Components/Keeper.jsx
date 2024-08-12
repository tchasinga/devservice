import React from "react";
import AnimatedGridPattern from "../Animation/magicui/animated-grid-pattern";
import { cn } from "../../lib/utils.ts";
import Navbars from "./Ui/Navbars";

export default function Keeper() {
    return (
        <div className="relative  min-h-screen w-full  overflow-hidden ">
            <Navbars/>
          <AnimatedGridPattern
            numSquares={230}
            maxOpacity={0.2}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%]",
            )}
          />
        </div>
      );
}
