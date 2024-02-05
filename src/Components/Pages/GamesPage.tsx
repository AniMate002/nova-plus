import { Link } from "react-router-dom";
import AllGames from "../gamespage/AllGames";
import FilterGames from "../gamespage/FilterGames";
import GamesSwiper from "../gamespage/GamesSwiper";
import { useEffect, useState } from "react";
import GamesSideBar from "../gamespage/GamesSideBars/GamesSideBar";
import { useAppDispatch } from "../../redux/hook";
import { logInUser } from "../../redux/userReducer";
import { hideGamesSideBar, showGamesSideBar } from "../../animation/GamesSideBarAnimations/GamesSideBarAnimations";


const GamesPage:React.FC = () => {
    const [isOpenSidebar, setIsOpensidebar] = useState<boolean>(false)
    const dispatch = useAppDispatch()

    useEffect(() => {
        window.scrollTo(0,0)
        // dispatch(logInUser({email: 'john@mail.com', password: 'changeme'}))
    },[])

    const menuClickHandler = () => {
        if(!isOpenSidebar){
            showGamesSideBar()
            setIsOpensidebar(true)
        }else{
            hideGamesSideBar()
            setIsOpensidebar(false)
        }
    }

    return (
        <div className="bg-gradient-to-tl from-violet-900 to-slate-950 min-h-[100vh] overflow-x-hidden">
            <header className="w-full uppercase text-white font-bold text-center pt-20 pb-6 text-5xl">
                <Link to={'/'}>nova plus</Link>
            </header>    
            <button onClick={menuClickHandler} className="hover:scale-[1.1] transition-all duration-200 text-center text-white mx-auto mb-10 w-[50px] h-[50px] flex items-center justify-center bg-gradient-to-tl from-slate-700 to-slate-800 rounded-full">
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