import { useState } from "react";
import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";
import ModalSingleCard from "../mainpage/ModalSingleCard/ModalSingleCard";
import WeAre from "../mainpage/WeAre";
import { gsap } from "gsap";
import WordAboutUs from "../mainpage/WordAboutUs/WordAboutUs";


const MainPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Border />
            <Header />
            <ModalSingleCard />
            <div className="h-[100vh] first--trigger mainImage bg-black">
                <BreakThroughLimits />
            </div>
            <div className="second--block min-h-[100vh] bg-black">
                <WeAre/>
            </div>
            <div className="min-h-[100vh] bg-black text-white">
                <WordAboutUs />
            </div>
        </div>
    );
}
 
export default MainPage;