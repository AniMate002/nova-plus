import { useState } from "react";
import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";
import ModalSingleCard from "../mainpage/ModalSingleCard/ModalSingleCard";
import WeAre from "../mainpage/WeAre";
import { gsap } from "gsap";
import WordAboutUs from "../mainpage/WordAboutUs/WordAboutUs";
import WorldMap from "../mainpage/WorldMap/WorldMap";


const MainPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Border />
            <Header />
            <ModalSingleCard />
            <div className="h-[100vh] first--trigger mainImage bg-black">
                <BreakThroughLimits />
            </div>
            <div className="second--block min-h-[100vh] bg-slate-950">
                <WeAre/>
            </div>
            <div className="min-h-[100vh] bg-slate-950 text-white border-b-8 border-t-8 border-violet-800">
                <WordAboutUs />
            </div>
            <div className="min-h-[100vh] bg-slate-950 text-white">
                <WorldMap />
            </div>
        </div>
    );
}
 
export default MainPage;