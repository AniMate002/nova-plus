import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Border:React.FC = () => {
    gsap.registerPlugin(ScrollTrigger) 
    useLayoutEffect(() => {
        const timeLine = gsap.timeline({
            scrollTrigger: {
                trigger: '.first--trigger',
                start: 'bottom 70%',
                end: 'bottom 30%',
                scrub: true,
                // markers: {
                //     startColor: 'white',
                //     endColor: 'white'
                // },
            }
        })
        timeLine
        .to('.main--border', {
            outlineOffset: -30,
            outline: '30px solid #5b21b6',
        }).to('.main--header', {
            top: '8px',
        }).to('.go--up--button', {
            opacity: 1
        }).to('.social--neworks', {
            left: '7px'
        })
    }, [])
    return (
        <div className="main--border fixed z-40 w-[100%] min-h-[100vh] outline outline-[25px] outline-offset-[-40px] outline-violet-800 pointer-events-none">
        </div>
    );
}
 
export default Border;