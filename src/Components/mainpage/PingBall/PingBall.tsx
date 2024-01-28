import { reverse } from "dns";
import gsap  from "gsap";
import { useEffect, useRef, useState } from "react";
import { checkPositons, jump } from "./GameLogic";

interface PingBallI {
    points: number
}

const PingBall:React.FC<PingBallI> = ({points}) => {


    return (
        <div className="game--container opacity-0 fixed w-[90%] block h-full top-0 left-[50%] translate-x-[-50%] pointer-events-none">
            <div className="main--cube bg-white absolute top-[80%] left-[10%]
            w-[10px] h-[10px]
            min-[530px]:w-[20px] min-[530px]:h-[20px]
            md:w-[30px] md:h-[30px]
            lg:w-[50px] lg:h-[50px]
            "></div>
            <div className="absolute w-[100%] h-[2px] bg-white 
            top-[82%]
            min-[530px]:top-[83%]
            md:top-[84%]
            lg:top-[87%]
            "></div>
            <div className={`main--thorn absolute rotate-45 border-4  left-full
            w-[20px] h-[20px] top-[81%]
            min-[530px]:top-[82%]
            md:top-[82%] md:w-[30px] md:h-[30px]
            lg:w-[50px] lg:h-[50px] lg:top-[84%]
            `}></div>
            <div className="absolute bottom-14 left-[50%] translate-x-[-50%] text-white text-xl">Points: {points}</div>
        </div>
    );
}
 
export default PingBall;