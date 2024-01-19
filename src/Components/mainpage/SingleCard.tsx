import { Tilt } from 'react-tilt'
import { singleCardOptions } from '../../tiltOptions';
import { gsap } from "gsap";
import { useRef } from 'react';


interface ISigleCard {
    card: string,
    cardNumber: number,
    title: string
}

const SingleCard:React.FC<ISigleCard> = ({card, cardNumber, title}) => {
    function singleCardHoverHandler ():void {
        gsap.to(`.hidden--content--single--card${cardNumber}`, {
            opacity: 1,
        })
    }

    function singleCardLeaveHandler ():void {
        gsap.to(`.hidden--content--single--card${cardNumber}`, {
            opacity: 0
        })
    }

    return (
        <Tilt options={singleCardOptions} className='w-[34%] hover:z-50'>
            <div onMouseEnter={singleCardHoverHandler} onMouseLeave={singleCardLeaveHandler} className='w-full relative hover:outline hover:outline-8 hover:outline-violet-600 hover:outline-offset-[-20px] hover:scale-[1.06]'>
                <img src={card} alt='card1'/>
                <div className={`absolute top-0 left-0 w-full h-full hidden--content--single--card${cardNumber} opacity-[0] `}>
                    <div className='bg-black w-full h-full opacity-[0.6] text-center'></div>
                    <div>
                        <h3 className='absolute top-0 uppercase font-semibold flex items-center w-full h-full justify-center'>{title}</h3>
                        <button className="fa-regular fa-compass absolute top-[54%] text-[20px] left-[50%] translate-x-[-50%]"></button>
                    </div>
                </div>
            </div>
        </Tilt>

    );
}
 
export default SingleCard;