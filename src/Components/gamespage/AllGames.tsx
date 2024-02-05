import { cardsType } from "../../redux/gamesReducer";
import { useAppSelector } from "../../redux/hook";
import SingleGameCard from "./SingleGameCard";



const AllGames:React.FC = () => {
    const { cards, filteredGames } = useAppSelector(state => state.games)

    const getRenderedGamesCards = (cards: cardsType) => {
        return cards.map(game => {
            return (
                <SingleGameCard key={game.id} {...game}/>
            )
        })
    }

    return (
        <div className="w-[90%] mx-auto grid  mt-20 justify-items-center 
        grid-cols-1 gap-10
        sm:grid-cols-2 sm:gap-5
        md:grid-cols-2 md:gap-20
        lg:grid-cols-3 lg:gap-5
        xl:grid-cols-3 xl:gap-20
        ">
            {filteredGames.length ? getRenderedGamesCards(filteredGames) : getRenderedGamesCards(cards)}
        </div>
    );
}
 
export default AllGames;