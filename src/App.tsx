import { useEffect, useLayoutEffect } from "react";
import MainPage from "./Components/Pages/MainPage";
import Lenis from '@studio-freight/lenis'
import Border from "./Components/Overlay/Border";
import Header from "./Components/Overlay/Header";
import HeaderSmallScreens from "./Components/Overlay/HeaderSmallScreens";
import HidingHeader from "./Components/Overlay/HidingHeader";
import { Outlet } from "react-router-dom";



const App:React.FC = () => {      
    return (
        <div>
            <Border />
            <Header />
            <HeaderSmallScreens />
            <HidingHeader />
            <Outlet />
        </div>
    );
}
 
export default App;