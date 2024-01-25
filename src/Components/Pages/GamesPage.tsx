import AllGames from "../gamespage/AllGames";
import GamesSwiper from "../gamespage/GamesSwiper";


const GamesPage:React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-[100vh] overflow-x-hidden">
            <header className="w-full uppercase text-white font-bold text-center py-20 text-5xl">nova plus</header>            
            <GamesSwiper />
            <AllGames />
        </div>
    );
}
 
export default GamesPage;