import { useAppSelector } from "../../redux/hook";
import SingleGameCard from "./SingleGameCard";



const AllGames:React.FC = () => {
    const { cards } = useAppSelector(state => state.games)
    const renderedGamesCards = cards.map(game => {
        return (
            <SingleGameCard {...game}/>
        )
    })
    return (
        <div className="w-[90%] mx-auto grid grid-cols-3 mt-48 justify-items-center gap-20">
            {renderedGamesCards}
        </div>
    );
}
 
export default AllGames;