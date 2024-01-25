import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { cardI, setActiveCard } from "../../../redux/gamesReducer";
import { gsap } from "gsap";



const ModalSingleCard:React.FC = () => {
    const { activeCard, cards } = useAppSelector(state => state.games)
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
            <div className='flex justify-around  relative z-50  w-full
            flex-col items-center gap-4 mt-20
            sm:mt-14
            lg:flex-row lg:items-start lg:gap-0 lg:mt-28
            '>
                <div className="flex gap-5">
                    <button onClick={() => arrorClickHandler(-1)} className="text-white transition-all hover:text-violet-800 hover:scale-[1.1]
                    hidden
                    sm:inline-block sm:text-2xl
                    xl:text-5xl
                    "><i className="fa-solid fa-chevron-left"></i></button>
                    <img src={cardToShow?.image} alt={cardToShow?.image} className=" outline  outline-violet-800 rounded-sm
                    w-[300px] outline-2
                    sm:w-[500px]
                    lg:w-[570px] lg:outline-4
                    xl:w-[700px] xl:outline-8
                    "/>
                    <button onClick={() => arrorClickHandler(1)} className="text-white transition-all hover:text-violet-800  hover:scale-[1.1]
                    hidden
                    sm:inline-block sm:text-2xl
                    xl:text-5xl
                    "><i className="fa-solid fa-chevron-right"></i></button>
                </div>
                <div className=" text-white">
                    <h3 className="font-bold uppercase text-center
                    text-[20px]
                    lg:text-[40px]
                    ">{cardToShow?.title}</h3>
                    <div className="block mx-auto h-[2px] w-[10%] my-6 bg-white"></div>
                    <div className="text-center"><i className="fa-solid fa-star"></i>{cardToShow?.stars}</div>
                    <div className=" mt-4
                    text-[12px] w-[300px]
                    sm:w-[500px]
                    lg:text-md lg:w-[400px]
                    xl:text-base xl:w-[600px]

                    ">{cardToShow?.description}</div>
                    <div className="w-full mt-10 flex gap-4 items-center">
                        <button className="text-white bg-violet-800 rounded-xl
                        px-4 py-4 text-[12px]
                        lg:px-8 lg:py-4 lg:text-base
                        ">Buy now</button>
                        <button className="bg-white text-violet-800 rounded-xl font-semibold
                        px-6 py-4 text-[12px]
                        lg:px-8 lg:py-4 lg:text-base
                        ">Rate</button>
                    </div>
                </div>
            </div>
            <div className="full--overlay z-10"></div>
        </div>
    );
}
 
export default ModalSingleCard;         