import { useEffect, useState } from "react";
import bgImage1 from '../../images/screenshots/scr1.jpg'
import bgImage2 from '../../images/screenshots/scr2.jpg'
import bgImage3 from '../../images/screenshots/scr3.jpg'
import bgImage4 from '../../images/screenshots/scr4.jpg'
import bgImage5 from '../../images/screenshots/scr5.jpg'
import bgImage6 from '../../images/screenshots/scr6.jpg'
import bgImage7 from '../../images/screenshots/scr7.jpg'
import bgImage8 from '../../images/screenshots/scr8.jpg'
import Cards from "./Cards";




const WeAre:React.FC = () => {
    const [scr, setScr] = useState(bgImage1)
    const [width, setWidth] = useState(100)
    function changeScreenShot(){
        let scroll: number = document.documentElement.scrollTop
        const screenshotContainer: HTMLDivElement | null = document.querySelector('.screenshot--container')
        if(screenshotContainer){
            screenshotContainer.style.width = (scroll/10) + 'px'
            if(scroll < 1500){
                setScr(bgImage1)
            }
            if(scroll >= 1500){
                setScr(bgImage2)
            }
            if(scroll >= 1600 && scroll < 1700){
                setScr(bgImage3)
            }
            if(scroll >= 1700 && scroll < 1800){
                setScr(bgImage4)
            }
            if(scroll >= 1800 && scroll < 1900){
                setScr(bgImage5)
            }
            if(scroll >= 1900 && scroll < 2000){
                setScr(bgImage6)
            }
            if(scroll >= 2000 && scroll < 2100){
                setScr(bgImage7)
            }
            if(scroll >= 2100){
                setScr(bgImage8)
            }
        }
    }
    useEffect(() => {
        const progress: HTMLDivElement | null = document.querySelector('.progress--rotate');
        if (progress) {
            window.addEventListener('scroll', function (e) {
                progress.style.transform = 'rotate(' + window.document.documentElement.scrollTop + 'deg)';
                changeScreenShot()
            });
        }
    }, []);
    
    return (
        <div className="border-t-4 border-violet-800  text-white relative ">
            <p className="uppercase ml-[20%] mt-[12%] text-[30px]">we are a</p>
            <p className="leading-10 mt-2 ml-[20%] text-[170px] font-bold">creative</p>
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className="h-56 absolute right-[25%] top-28">
                <circle className="progress--rotate" cx="400" cy="400" fill="none"
                    r="200" stroke-width="50" stroke="#6733c8"
                    stroke-dasharray="700 1400"
                    stroke-linecap="round" />
            </svg>
            <div className="ml-[20%] text-[170px] flex items-center">game 
                <div  className={`screenshot--container`} >
                    <img src={scr} alt="game image" className={`screenshot--itself`}/>
                </div> 
            studio</div>

            <div>
                <h2 className="text-violet-800 Montserrat font-bold text-center mt-10 uppercase text-[50px] ">nova plus</h2>
                <div className="block bg-stone-800 mx-auto w-[30%] h-[2px]"></div>
                <div className="mt-10 w-[60%] block mx-auto text-center text-stone-500">    
                    NovaPlus stands as the epitome of cool and innovation in the game development industry, setting itself apart through
                    a combination of groundbreaking creativity, cutting-edge technology,
                    and an unwavering commitment to delivering unparalleled gaming experiences.
                </div>
            </div>

            <Cards />
        </div>
    );
}
 
export default WeAre;