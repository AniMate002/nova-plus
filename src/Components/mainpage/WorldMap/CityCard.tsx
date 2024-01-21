import { useEffect } from "react";
import { cityI } from "../../../redux/worldMapReducer";
import { gsap } from "gsap";


interface CityCardI extends cityI {}

const CityCard:React.FC<CityCardI> = ({name, left, top, image, description}) => {
    function showCityCard():void{
        gsap.to(`.city--card--${name}`, {
            opacity: 1,
        })
    }
    function hideCityCard(){
        gsap.to(`.city--card--${name}`, {
            opacity: 0,
        })
        // alert("f")
    }
    return (
        <div className={`${left} ${top} absolute z-40`}>
            <div className={`city--card--${name} absolute h-[300px] w-[600px] z-50 bg-white top-5 flex justify-between flex-row opacity-0`}>
                <div className="w-[40%] overflow-hidden">
                    <img src={image} alt={image} className="min-w-max h-[300px] ml-[-50%]"/>
                </div>
                <div className="p-10 w-[60%] h-full">
                    <h3 className="text-violet-800 font-bold Haptik text-xl">{name}</h3>
                    <p className="text-slate-700 text-sm mt-4">{description}</p>
                    <p className="uppercase text-violet-800 mt-4">Nova plus</p>
                </div>
            </div>
            <div onMouseEnter={showCityCard} onMouseLeave={hideCityCard} className=' w-[40px] h-[40px] absolute  z-50'>
                <button className="bg-white fading--spot rounded-lg w-[10px] h-[10px]"></button>
            </div>
        </div>
    );
}
 
export default CityCard;