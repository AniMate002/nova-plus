import { useEffect, useLayoutEffect } from "react";
import MainPage from "./Components/Pages/MainPage";
import Lenis from '@studio-freight/lenis'
import Border from "./Components/Overlay/Border";
import Header from "./Components/Overlay/Header";
import HeaderSmallScreens from "./Components/Overlay/HeaderSmallScreens";
import HidingHeader from "./Components/Overlay/HidingHeader";
import { Outlet, useHref, useLocation } from "react-router-dom";
import TransitionOverlay from "./Components/Overlay/TransitionOverlay";



const App:React.FC = () => {   
    const url = useLocation()   
    return (
        <div>
            <Border />
            <Header />
            <HeaderSmallScreens />
            <HidingHeader />
            <Outlet />
            <TransitionOverlay />
        </div>
    );
}
 
export default App;