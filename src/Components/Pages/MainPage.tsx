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
import { createGameTimeLine, createJobsAnimation, createNewsAnimation, createWorldMapAnimation } from "../../animation/Animation";
import HeaderSmallScreens from "../Overlay/HeaderSmallScreens";
import HidingHeader from "../Overlay/HidingHeader";


const MainPage:React.FC = () => {
    useEffect(() => {
        const footerBgChanger = gsap.timeline({
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

        const weAreChanger = gsap.timeline({
            scrollTrigger:{
                trigger: '.second--block',
                scrub: true,
                start: 'center 60%',
                end: 'center 40%',
                onEnter: () => {
                    gsap.to('.we--are--trigger', {
                        opacity: 1,
                        zIndex: 100
                    })
                },
                onLeaveBack: () => {
                    gsap.to('.we--are--trigger', {
                        opacity: 0,
                        zIndex: 100
                    })
                }
            }
        })

        const gamesChanger = createGameTimeLine('60', '60', 1)
        const games2Changer = createGameTimeLine('60', '70', 2)
        const games3Changer = createGameTimeLine('60', '80', 3)

        const worldMapChanger = createWorldMapAnimation('20', '80', 1)
        const worldMap2Changer = createWorldMapAnimation('12', '82', 2)
        const worldMap3Changer = createWorldMapAnimation('18', '82', 3)
        const worldMap4Changer = createWorldMapAnimation('18', '82', 4)
        // const worldMap5Changer = createWorldMapAnimation('18', '82', 5)

        const jobsTimeLine = createJobsAnimation('10', 1)
        const jobs2TimeLine = createJobsAnimation('13', 2)
        const jobs3TimeLine = createJobsAnimation('16', 3)
        const jobs4TimeLine = createJobsAnimation('19', 4)
        const jobs5TimeLine = createJobsAnimation('23', 5)
        const jobs6TimeLine = createJobsAnimation('27', 6)
        const jobs7TimeLine = createJobsAnimation('30', 7)
        const jobs8TimeLine = createJobsAnimation('34', 8)
        const jobs9TimeLine = createJobsAnimation('39', 9)
        const jobs10TimeLine = createJobsAnimation('43', 10)

        const newsTimLine = createNewsAnimation('20', 0)
        for(let i = 1; i < 10; i++){
            createNewsAnimation('30', i)
        }
    }, [])



    return (
        <div className="all--main--page min-h-[100vh] overflow-hidden bg-slate-950">
            <Border />
            <Header />
            <HeaderSmallScreens />
            <HidingHeader />
            <ModalSingleCard />
            <div className={`h-[100vh] first--trigger mainImage `}>
                <BreakThroughLimits />
            </div>
            <div className={`second--block min-h-[100vh] `}>
                <WeAre/>
            </div>
            <div className={`third--trigger min-h-[100vh]  text-white  border-violet-800`}>
                <WordAboutUs />
            </div>
            <div className={`fourth--trigger min-h-[100vh]  text-white`}>
                <WorldMap />
            </div>
            <div className={`fifth-trigger min-h-[100vh]  text-white`}>
                <JoinUs />
            </div>
            <div className={`sixth--trigger min-h-[100vh]  text-white`}>
                <News />
            </div>
            <div className={` text-white`}>
                <Explore />
            </div>
        </div>
    );
}
 
export default MainPage;