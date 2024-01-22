import { useEffect, useState } from "react";
import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";
import ModalSingleCard from "../mainpage/ModalSingleCard/ModalSingleCard";
import WeAre from "../mainpage/WeAre";
import { gsap } from "gsap";
import WordAboutUs from "../mainpage/WordAboutUs/WordAboutUs";
import WorldMap from "../mainpage/WorldMap/WorldMap";
import JoinUs from "../mainpage/JoinUs/JoinUs";
import News from "../mainpage/News/News";
import Explore from "../mainpage/Explore/Explore";


const MainPage:React.FC = () => {
    useEffect(() => {
        const timeLine = gsap.timeline({
            scrollTrigger:{
                trigger: '.main-explore-trigger',
                scrub: true,
                start: '20% center',
                onEnter: () => {
                    gsap.to('.all--main--page', { duration: 1.0, backgroundColor: '#6733c8'})
                },
                onLeaveBack: () => {
                    gsap.to('.all--main--page', { duration: 1.0, backgroundColor: '#020617'})
                },
                end: '20% center',
            }
        })
    }, [])
    return (
        <div className="all--main--page min-h-[100vh] overflow-hidden bg-slate-950">
            <Border />
            <Header />
            <ModalSingleCard />
            <div className={`h-[100vh] first--trigger mainImage `}>
                <BreakThroughLimits />
            </div>
            <div className={`second--block min-h-[100vh] `}>
                <WeAre/>
            </div>
            <div className={`min-h-[100vh]  text-white border-b-8 border-t-8 border-violet-800`}>
                <WordAboutUs />
            </div>
            <div className={`min-h-[100vh]  text-white`}>
                <WorldMap />
            </div>
            <div className={`min-h-[100vh]  text-white`}>
                <JoinUs />
            </div>
            <div className={`min-h-[100vh]  text-white`}>
                <News />
            </div>
            <div className={` text-white`}>
                <Explore />
            </div>
        </div>
    );
}
 
export default MainPage;