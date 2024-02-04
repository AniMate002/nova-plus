import { useState } from "react";
import { useAppSelector } from "../../../redux/hook";



const OverviewGames:React.FC = () => {
    const { cards } = useAppSelector(state => state.games)
    const [currImage, setCurrImage] = useState(cards[0].image)
    const renderedTitles = cards.map(card => {
        return (
            <div key={card.id} onMouseEnter={() => setCurrImage(card.image)} className={`flex items-center gap-4 cursor-pointer  opacity-[0.5] hover:opacity-[1] hover:scale-[1.1] transition-all duration-200 ${currImage === card.image ? 'opacity-[1] scale-[1.1]' : ''}`}>
                <div className="h-[1px] w-[40px] bg-slate-300"></div>
                <div className="relative">
                    {card.title}
                    <div className={`h-[1px] w-[400px] top-1/2 translate-y-[-50%] bg-slate-300 absolute left-[110%] ${currImage === card.image ? '' : 'hidden'}`}></div>
                </div>   
            </div>
        )
    })
    return (
        <div className="overview--games--trigger text-white pt-20 flex  justify-between items-center w-[80%] mx-auto max-w-[1500px]">
            <div className="text-white uppercase font-thin">
                <h3>Products we created</h3>
                <div className="text-slate-300 mt-20 flex flex-col gap-4 text-md overview--games--list--trigger relative left-[-10%] opacity-0 z-20">
                    {renderedTitles}
                </div>
            </div>
            <img src={currImage} alt={currImage} className="w-[65%] overview--images--list--trigger relative right-[-10%] opacity-0 z-10" />
        </div>
    );
}
 
export default OverviewGames;