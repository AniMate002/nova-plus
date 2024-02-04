import { Link } from "react-router-dom";
import AllGames from "../gamespage/AllGames";
import FilterGames from "../gamespage/FilterGames";
import GamesSwiper from "../gamespage/GamesSwiper";
import { useEffect } from "react";


const GamesPage:React.FC = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="bg-gradient-to-tl from-violet-900 to-slate-950 min-h-[100vh] overflow-x-hidden">
            <header className="w-full uppercase text-white font-bold text-center py-20 text-5xl">
                <Link to={'/'}>nova plus</Link>
            </header>            
            <GamesSwiper />
            <FilterGames />
            <AllGames />
        </div>
    );
}
 
export default GamesPage;