import { ReactNode } from 'react';
import card1 from '../../images/cards/card1.jpg'
import card2 from '../../images/cards/card2.jpg'
import card3 from '../../images/cards/card3.jpg'
import { useAppSelector } from '../../redux/hook';
import SingleCard from './SingleCard';

const Cards:React.FC = () => {
    const { cards } = useAppSelector(state => state.modalCard)

    const renderedCards = cards.map(card => {
        return <SingleCard key={card.id} {...card} />
    })

    return (
        <div className="flex flex-row items-center justify-between w-full mt-20">
            { renderedCards }
        </div>
    );
}
 
export default Cards;