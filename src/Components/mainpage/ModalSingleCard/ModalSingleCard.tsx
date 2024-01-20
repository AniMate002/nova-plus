import { useEffect, useState } from "react";
import { useAppSelector } from "../../../redux/hook";
import { cardI } from "../../../redux/modalCardReducer";
import { gsap } from "gsap";



const ModalSingleCard:React.FC = () => {
    const { activeCard, cards } = useAppSelector(state => state.modalCard)
    const [cardToShow, setCardToShow] = useState<cardI>()
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
    

    return (
        <div className="modal--single--card fixed z-50 left-0 top-full h-full w-full">
            <header className="py-10 bg-violet-800 relative z-50 flex justify-around items-center text-white">
                <div className="uppercase font-bold">{cardToShow?.title}</div>
                <button onClick={closeModalSingleCard} className="text-[25px]">
                    <i className="fa-solid fa-xmark"></i>
                </button>
            </header>
            <div className='flex flex-row justify-around items-start relative z-50 mt-28 w-full'>
                <img src={cardToShow?.image} alt={cardToShow?.image} className="w-[700px] outline outline-8 outline-violet-800 rounded-sm"/>
                <div className=" text-white">
                    <h3 className="text-[40px] font-bold uppercase text-center">{cardToShow?.title}</h3>
                    <div className="block mx-auto h-[2px] w-[10%] my-6 bg-white"></div>
                    <div className="w-[600px]">{cardToShow?.description}</div>
                </div>
            </div>
            <div className="full--overlay z-10"></div>
        </div>
    );
}
 
export default ModalSingleCard;         