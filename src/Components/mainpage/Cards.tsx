import { ReactNode } from 'react';
import card1 from '../../images/cards/card1.jpg'
import card2 from '../../images/cards/card2.jpg'
import card3 from '../../images/cards/card3.jpg'
import { useAppSelector } from '../../redux/hook';
import SingleCard from './SingleCard';

const Cards:React.FC = () => {
    const { cards } = useAppSelector(state => state.games)

    const renderedCards = cards.slice(0, 3).map(game => {
        return <SingleCard key={game.id} {...game} />
    })

    return (
        <div className="flex items-center justify-between w-full mt-20
        flex-col
        md:flex-row
        ">
            { renderedCards }
        </div>
    );
}
 
export default Cards;