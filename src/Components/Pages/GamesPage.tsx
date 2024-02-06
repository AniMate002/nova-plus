import { Link } from "react-router-dom";
import AllGames from "../gamespage/AllGames";
import FilterGames from "../gamespage/FilterGames";
import GamesSwiper from "../gamespage/GamesSwiper";
import { useEffect, useState } from "react";
import GamesSideBar from "../gamespage/GamesSideBars/GamesSideBar";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { logInUser, toggleSideBar } from "../../redux/userReducer";
import { hideGamesSideBar, showGamesSideBar } from "../../animation/GamesSideBarAnimations/GamesSideBarAnimations";
import TransitionOverlay from "../Overlay/TransitionOverlay";
import GamesAuthModal from "../gamespage/GamesSideBars/GamesAuthModal";


const GamesPage:React.FC = () => {
    const { sideBar } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    const menuClickHandler = () => {
        sideBar ? hideGamesSideBar() : showGamesSideBar()
        dispatch(toggleSideBar())
    }

    return (
        <div className="bg-gradient-to-tl from-violet-900 to-slate-950 min-h-[100vh] overflow-x-hidden">
            <GamesAuthModal />
            <header className="w-full uppercase text-white font-bold text-center pt-20 pb-6 text-5xl">
                <Link to={'/'}>nova plus</Link>
            </header>    
            <button type="button" onClick={menuClickHandler} className="hover:scale-[1.1] transition-all duration-200 text-center text-white mx-auto mb-10 w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-tl from-slate-700 to-slate-800 rounded-full
            shadow-lg shadow-slate-900 active:scale-[0.9]">
                <i className="fa-solid fa-bars"></i>    
            </button>        
            <GamesSwiper />
            <FilterGames />
            <AllGames />
            <GamesSideBar />
        </div>
    );
}
 
export default GamesPage;