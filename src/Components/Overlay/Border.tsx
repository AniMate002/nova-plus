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
        timeLine.from('.main--border', {
            outlineOffset: -40,
            outline: '25px solid #5b21b6',
            duration: 2000,
        })
        .to('.main--border', {
            outlineOffset: -30,
            outline: '30px solid #5b21b6',
            duration: 2000,

        }).from('.main--header', {
            top: '48px',
            duration: 2000
        })
        .to('.main--header', {
            top: '8px',
            duration: 2000
        })
    }, [])
    return (
        <div className="main--border fixed z-40 w-[100%] min-h-[100vh] outline outline-[25px] outline-offset-[-40px] outline-violet-800">
        </div>
    );
}
 
export default Border;