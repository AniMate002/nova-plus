import { cardsType } from "../../redux/gamesReducer";
import { useAppSelector } from "../../redux/hook";
import SingleGameCard from "./SingleGameCard";



const AllGames:React.FC = () => {
    const { cards, filteredGames } = useAppSelector(state => state.games)

    const getRenderedGamesCards = (cards: cardsType) => {
        return cards.map(game => {
            return (
                <SingleGameCard {...game}/>
            )
        })
    }

    return (
        <div className="w-[90%] mx-auto grid grid-cols-3 mt-20 justify-items-center gap-20">
            {filteredGames.length ? getRenderedGamesCards(filteredGames) : getRenderedGamesCards(cards)}
        </div>
    );
}
 
export default AllGames;