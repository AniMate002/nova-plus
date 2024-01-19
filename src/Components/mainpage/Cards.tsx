import card1 from '../../images/cards/card1.jpg'
import card2 from '../../images/cards/card2.jpg'
import card3 from '../../images/cards/card3.jpg'
import SingleCard from './SingleCard';

const Cards:React.FC = () => {
    return (
        <div className="flex flex-row items-center justify-between w-full mt-20">
            <SingleCard card={card1} cardNumber={1} title={'Apex Vanguard'}/>
            <SingleCard card={card2} cardNumber={2} title={'Starlight Seraph'}/>
            <SingleCard card={card3} cardNumber={3} title={'Celestial Citadel'}/>
        </div>
    );
}
 
export default Cards;