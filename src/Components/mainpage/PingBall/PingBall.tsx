import { reverse } from "dns";
import gsap  from "gsap";
import { useEffect, useRef, useState } from "react";
import { checkPositons, jump } from "./GameLogic";

interface PingBallI {
    points: number
}

const PingBall:React.FC<PingBallI> = ({points}) => {

    useEffect(() => {
       
    })


    return (
        <div className="game--container opacity-0 fixed w-[90%] block h-full top-0 left-[50%] translate-x-[-50%] pointer-events-none">
            <div className="main--cube w-[50px] h-[50px] bg-white absolute top-[80%] left-[10%]"></div>
            <div className="absolute w-[100%] h-[2px] bg-white top-[87%]"></div>
            <div className={`main--thorn absolute w-[50px] h-[50px] rotate-45 border-4 top-[84%] left-full`}></div>
            <div className="absolute bottom-14 left-[50%] translate-x-[-50%] text-white text-xl">Points: {points}</div>
        </div>
    );
}
 
export default PingBall;