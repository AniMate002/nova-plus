import { useEffect, useState } from "react";
import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";
import ModalSingleCard from "../mainpage/ModalSingleCard/ModalSingleCard";
import WeAre from "../mainpage/WeAre";
import WordAboutUs from "../mainpage/WordAboutUs/WordAboutUs";
import WorldMap from "../mainpage/WorldMap/WorldMap";
import JoinUs from "../mainpage/JoinUs/JoinUs";
import News from "../mainpage/News/News";
import Explore from "../mainpage/Explore/Explore";
import HeaderSmallScreens from "../Overlay/HeaderSmallScreens";
import HidingHeader from "../Overlay/HidingHeader";
import { addAnimationsToMainPage } from "../../animation/pagesAnimations/mainPageAnimations";


const MainPage:React.FC = () => {
    useEffect(() => {
        addAnimationsToMainPage()
    }, [])



    return (
        <div className="all--main--page min-h-[100vh] overflow-hidden bg-gradient-to-tr from-violet-950 to-slate-950">

            <ModalSingleCard />
            <div className={`h-[100vh] first--trigger mainImage `}>
                <BreakThroughLimits />
            </div>
            <div className={`second--block min-h-[100vh] `}>
                <WeAre/>
            </div>
            <div className={`fourth--trigger min-h-[100vh]  text-white`}>
                <WorldMap />
            </div>
            <div className={`fifth-trigger min-h-[100vh]  text-white`}>
                <JoinUs />
            </div>
            <div className={`third--trigger min-h-[100vh]  text-white  border-violet-800`}>
                <WordAboutUs />
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