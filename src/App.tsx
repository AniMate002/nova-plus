import { useEffect, useLayoutEffect } from "react";
import MainPage from "./Components/Pages/MainPage";
import Lenis from '@studio-freight/lenis'
import Border from "./Components/Overlay/Border";
import Header from "./Components/Overlay/Header";
import HeaderSmallScreens from "./Components/Overlay/HeaderSmallScreens";
import HidingHeader from "./Components/Overlay/HidingHeader";
import { Outlet, useHref, useLocation } from "react-router-dom";



const App:React.FC = () => {   
    const url = useLocation()   
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        // alert(JSON.stringify(url))
    }, [url.pathname, url.search])
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