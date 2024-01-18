import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";


const BreakThroughLimits:React.FC = () => {
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
        })

    }, [])
    return (
        <div>
            <div>
                <p className="Haptik font-bold text-white first--break text-[250px] absolute right-[-1000px] top-[15%]">_remove</p>
                <p className="Haptik text-white second--break text-[250px] absolute right-full top-[35%]">#limits</p>
            </div>
            <p data-parallax="2" className="fa-solid fa-plus text-white text-[100px] left-10 top-[20%] rotate-12 absolute"></p>
            <p data-parallax="3" className="fa-solid fa-cube text-white text-[100px] right-16 top-[30%] rotate-12 absolute"></p>
            <p data-parallax="-2" className="fa-solid fa-circle-half-stroke text-white text-[100px] right-[30%] top-[67%] rotate-12 absolute"></p>
            <p data-parallax="-4" className="fa-solid fa-terminal text-white text-[100px] left-[30%] top-[75%] rotate-12 absolute"></p>


        </div>
    );
}
 
export default BreakThroughLimits;