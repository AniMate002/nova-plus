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
        <div className=" pt-20 pb-20
        ml-[10%]
        lg:ml-[20%]
        ">
            <h3 className="news--trigger--0 Haptik tracking-wider opacity-0
            text-5xl w-[250px]
            lg:text-7xl lg:w-[400px]
            ">keep up with the latest</h3>
            <div className="relative
            pt-5
            lg:pt-20
            ">
                <NavLink  to={'/'} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={`${linkText} absolute w-[100px] h-[100px] flex items-center justify-center bg-violet-700 rounded-full hover:scale-[1.1] transition-all hover:bg-slate-800 hover:outline hover:outline-violet-800 z-20
                top-10
                lg:top-40
                `}>
                    {linkText ? '' : 'all news'}
                </NavLink>
                <div className="
                ml-[10%] mt-40
                sm:ml-20 sm:mt-0
                ">
                    <NewsSwiper />
                </div>
            </div>
        </div>
    );
}
 
export default News;