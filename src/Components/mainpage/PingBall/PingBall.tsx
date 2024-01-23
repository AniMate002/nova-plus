import { reverse } from "dns";
import gsap  from "gsap";
import { useEffect, useRef, useState } from "react";



const PingBall = () => {
    // const cube = useRef<null | HTMLDivElement>(null)
    const startJumb = 'start--jump'

    useEffect(() => {
        const cube:HTMLDivElement | null = document.querySelector('.main--cube')
        const thorn:HTMLDivElement | null = document.querySelector('.main--thorn')

        document.addEventListener('mousedown', function(){
            if(cube){
                jump(cube)
            }
        })

        const checkAlive = setInterval(() => {
            if(cube && thorn){
                checkPositons(cube, thorn)
            }
        }, 1)
    })

    function jump(cube: HTMLDivElement): void {
        if(!cube.classList.contains(startJumb)){
            cube.classList.add(startJumb)
        }
        setTimeout(() => {
                cube.classList.remove(startJumb)
        }, 400)
        console.log(cube)
    }

    function checkPositons(cube:HTMLDivElement, thorn: HTMLDivElement): void{
        const dinoTop = parseInt(window.getComputedStyle(cube).getPropertyValue('top'))
        const thornLeft = parseInt(window.getComputedStyle(thorn).getPropertyValue('left'))
        if(thornLeft <= 180 && thornLeft >= 100 && dinoTop >= 660){
            // alert("left: " + thornLeft + " top: " + dinoTop + "You Lost!!!")
            stopGame(cube, thorn)
        }
    }

    function stopGame(cube:HTMLDivElement, thorn: HTMLDivElement): void{
        cube.classList.remove(startJumb)
        thorn.classList.remove('main--thorn')
    }

    return (
        <div className="game--container fixed w-[90%] block h-full top-0 left-[50%] translate-x-[-50%]">
            <div className="main--cube w-[50px] h-[50px] bg-white absolute top-[80%] left-[10%]"></div>
            <div className="absolute w-[100%] h-[2px] bg-white top-[87%]"></div>
            <div className={`main--thorn absolute w-[50px] h-[50px] rotate-45 border-4 top-[84%] left-full`}></div>
        </div>
    );
}
 
export default PingBall;