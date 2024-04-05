import { cn } from "@/lib/utils";
import React from "react";
import "./ui.css"

type bottomprops = React.HTMLAttributes<HTMLDivElement>;
export const Bottom = (props: bottomprops) => {
    return(
        <div className={cn("w-full h-14 bottomStyle absolute bottom-0 p-3")} {...props}/>        
       
    )
}