import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { cardI, setActiveCard } from "../../../redux/modalCardReducer";
import { gsap } from "gsap";



const ModalSingleCard:React.FC = () => {
    const { activeCard, cards } = useAppSelector(state => state.modalCard)
    const [cardToShow, setCardToShow] = useState<cardI>()
    const dispatch = useAppDispatch()
    useEffect(() => {
        const foundCard = cards.find(card => card.id === activeCard)
        setCardToShow(foundCard)
    }, [activeCard])

        
    function closeModalSingleCard(){
        gsap.to('.modal--single--card', {
            opacity: 0,
            top: '100%',
            
        })
    }
    
    const arrorClickHandler = (next: number):void => {
        if(next === 1 && activeCard === 3){
            dispatch(setActiveCard(1))
        }else if(next === -1 && activeCard === 1){
            dispatch(setActiveCard(3))
        }else{
            dispatch(setActiveCard(activeCard + next))
        }
    }

    return (
        <div className="modal--single--card fixed z-50 left-0 top-full h-full w-full">
            <header className="py-10 bg-violet-800 relative z-50 flex justify-around items-center text-white">
                <div className="uppercase font-bold">{cardToShow?.title}</div>
                <button onClick={closeModalSingleCard} className="text-[25px]">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>
            <div className='flex flex-row justify-around items-start relative z-50 mt-28 w-full'>
                <div className="flex gap-5">
                    <button onClick={() => arrorClickHandler(-1)} className="text-white transition-all hover:text-violet-800 text-5xl hover:scale-[1.1]"><i className="fa-solid fa-chevron-left"></i></button>
                    <img src={cardToShow?.image} alt={cardToShow?.image} className="w-[700px] outline outline-8 outline-violet-800 rounded-sm"/>
                    <button onClick={() => arrorClickHandler(1)} className="text-white transition-all hover:text-violet-800 text-5xl hover:scale-[1.1] "><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className=" text-white">
                    <h3 className="text-[40px] font-bold uppercase text-center">{cardToShow?.title}</h3>
                    <div className="block mx-auto h-[2px] w-[10%] my-6 bg-white"></div>
                    <div className="text-center"><i className="fa-solid fa-star"></i>{cardToShow?.stars}</div>
                    <div className="w-[600px] mt-4">{cardToShow?.description}</div>
                    <div className="w-full mt-10 flex gap-4">
                        <button className="text-white px-8 py-4 bg-violet-800 rounded-xl">Buy now</button>
                        <button className="bg-white px-8 py-4 text-violet-800 rounded-xl font-semibold">Rate</button>
                    </div>
                </div>
            </div>
            <div className="full--overlay z-10"></div>
        </div>
    );
}
 
export default ModalSingleCard;         