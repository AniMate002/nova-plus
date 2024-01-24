import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useState } from "react";
import Card from "./Card";
import PingBall from "./PingBall/PingBall";
import { changeSpeed, checkPositons, givePoints, jump, makeThornMove } from "./PingBall/GameLogic";
import { showGame } from "../../animation/Animation";


const BreakThroughLimits:React.FC = () => {
    const [isParallax, setIsParallax] = useState<boolean>(false)
    useLayoutEffect(() => {
        const timeLine = gsap.timeline({
            scrollTrigger:{
                trigger: '.first--trigger',
                pin: true,
                scrub: true,
                start: 'bottom bottom',
                end: 'bottom top',
                // markers: {
                //     endColor: 'white',
                //     startColor: 'white',
                // }
            }
        })

        timeLine.to('.move--text--break', {
            right: '40%',
        }).to('.life--game, .parallax--item', {
            opacity: 0,
            scale: 0
        }).to('.main--card', {
            opacity: 1,
            scale:1
        })

    }, [])



    const [points, setPoints] = useState<number>(0)
    const [aliveCube, setAliveCube] = useState<boolean>(true)

    function startGame (){


        showGame()        


        const cube:HTMLDivElement | null = document.querySelector('.main--cube')
        const thorn:HTMLDivElement | null = document.querySelector('.main--thorn')

        setPoints(0)
        setAliveCube(true)
        const givingPoints = givePoints(points, setPoints)


        if(thorn){
            makeThornMove(thorn)
        }

        document.addEventListener('mousedown', function CubeEvent(){
            if(cube){
                jump(cube)
            }
        })

        const checkAlive = setInterval(() => {
            if(cube && thorn){
                checkPositons(cube, thorn, givingPoints, setAliveCube)
            }
        }, 1)
    }

    useEffect(() => {
        const thorn:HTMLDivElement | null = document.querySelector('.main--thorn')
        if(thorn){
            changeSpeed(thorn, points)
        }
    }, [points])


    return (
        <div>
            <div className="life--game flex items-center justify-center h-[100vh] flex-col">
                <p className="text-white uppercase font-bold  tracking-widest select-none text-center
                text-[50px]
                md:text-[100px]
                2xl:text-[200px]
                ">nova plus</p>
                <button onClick={startGame} className="select-none text-white game--btn uppercase py-4 px-10 outline outline-violet-800 hover:bg-violet-800 cursor-pointer relative 
                ">{aliveCube ? "start" : "restart"}</button>
            </div>
                {/* <Card /> */}
            <div>
                <p className="move--text--break Haptik font-bold text-white first--break absolute right-[-1000px] 
                text-[50px] top-[20%]
                sm:text-[100px]
                md:text-[125px]
                lg:text-[160px]
                2xl:text-[250px] 2xl:top-[7%]
                ">_remove</p>
                <p className="move--text--break Haptik font-bold text-white second--break absolute right-full
                text-[50px] top-[30%]
                sm:text-[100px] vsm:top-[25%]
                md:text-[125px] md:top-[35%]
                lg:text-[160px] lg:top-[40%]
                2xl:text-[250px] xl:top-[35%]
                ">#limits</p>
            </div>
            <PingBall points={points}/>

        </div>
    );
}
 
export default BreakThroughLimits;