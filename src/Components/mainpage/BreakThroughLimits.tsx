import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useState } from "react";
import Card from "./Card";
import PingBall from "./PingBall/PingBall";


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

        timeLine.to('.Haptik', {
            right: '40%',
        }).to('.life--game, .parallax--item', {
            opacity: 0,
            scale: 0
        }).to('.main--card', {
            opacity: 1,
            scale:1
        })

    }, [])

    function addParallax():void {
        document.addEventListener('mousemove', parallax);
        function parallax(e: MouseEvent) {
            const els:NodeListOf<HTMLDivElement> = document.querySelectorAll('.fa-solid')
            els.forEach((move: HTMLElement) => {
                let movingValue = Number(move.dataset.parallax) * 4;
                let x = e.clientX / movingValue;
                let y = e.clientY / movingValue;
                // move.style.transform = `translateX(${x}px) translateY(${y}px)`;
                // move.style.transform = 'rotate(' + x/3 + "deg)" + `translateX(${x}px) translateY(${y}px)`
                move.style.transform = `rotate3d(${x}, ${y}, ${x-y}, 30deg)` + `translateX(${x}px)`
            });
        }


    }

    return (
        <div>
            <div className="life--game flex items-center justify-center h-[100vh] flex-col">
                <p className="text-white uppercase font-bold text-[200px] tracking-widest">nova plus</p>
                <button onClick={addParallax} className="text-white game--btn uppercase py-4 px-10 outline outline-violet-800 hover:bg-violet-800 cursor-pointer relative 
                ">game</button>
            </div>
                <Card />
            <div>
                <p className="Haptik font-bold text-white first--break text-[250px] absolute right-[-1000px] top-[7%]">_remove</p>
                <p className="Haptik font-bold text-white second--break text-[250px] absolute right-full top-[35%]">#limits</p>
            </div>
            {/* <div className="parallax--items">
                <p data-parallax="10" className="parallax--item fa-solid fa-plus text-white text-[50px] left-10 top-[20%] rotate-12 absolute"></p>
                <p data-parallax="3" className="parallax--item fa-solid fa-gamepad text-white text-[100px] right-[23%] top-[30%] rotate-12 absolute"></p>
                <p data-parallax="-2" className="parallax--item fa-solid fa-puzzle-piece text-white text-[70px] right-[30%] top-[67%] rotate-12 absolute"></p>
                <p data-parallax="-5" className="parallax--item fa-solid fa-terminal text-white text-[80px] left-[30%] top-[75%] rotate-12 absolute"></p>
            </div> */}
            <PingBall />

        </div>
    );
}
 
export default BreakThroughLimits;