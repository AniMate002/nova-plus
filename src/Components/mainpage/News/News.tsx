import { useState } from "react";
import { NavLink } from "react-router-dom";
import NewsSwiper from "./NewsSwiper";


const News:React.FC = () => {
    const [linkText, setLinkText] = useState<string>()
    const mouseEnterHandler = ():void => {
        setLinkText("fa-solid fa-up-right-from-square")
    }

    const mouseLeaveHandler = ():void => {
        setLinkText('')
    }
    return (
        <div className="ml-[20%] pt-20 pb-20">
            <h3 className="Haptik tracking-wider text-8xl w-[400px]">keep up with the latest</h3>
            <div className="relative pt-20">
                <NavLink  to={'/'} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={`${linkText} absolute w-[100px] h-[100px] top-40 flex items-center justify-center bg-violet-700 rounded-full hover:scale-[1.1] transition-all hover:bg-slate-800 hover:outline hover:outline-violet-800 z-20`}>
                    {linkText ? '' : 'all news'}
                </NavLink>
                <div className="ml-20">
                    <NewsSwiper />
                </div>
            </div>
        </div>
    );
}
 
export default News;