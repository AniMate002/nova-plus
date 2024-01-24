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
        <div className=" border-violet-800  text-white relative ">
            <p className="uppercase  
            text-[20px] ml-[10%] mt-[0px]
            sm:text-[30px]
            md:ml-[12%]
            xl:text-[30px] xl:ml-[20%] xl:mt-[12%] 
            ">we are a</p>
            <p className="leading-10   font-bold
            text-[60px] ml-[10%]
            sm:text-[100px]
            md:text-[140px] md:ml-[12%]
            xl:text-[170px] xl:ml-[20%] 
            ">creative</p>
            <svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg" className=" absolute 
            right-[17%] top-[-50px] h-20
            sm:right-[30%] sm:h-28
            md:right-[20%] md:h-36
            xl:right-[17%]
            2xl:right-[25%] 2xl:top-[-30px] xl:h-56
            ">
                <circle className="progress--rotate" cx="400" cy="400" fill="none"
                    r="200" stroke-width="50" stroke="#6733c8"
                    stroke-dasharray="700 1400"
                    stroke-linecap="round" />
            </svg>
            <div className="flex items-center
            text-[50px] ml-[10%]
            sm:text-[70px]
            md:ml-[12%] md:text-[100px]
            xl:text-[170px] xl:ml-[20%] 
            ">game 
                <div  className={`screenshot--container 
                hidden
                md:block
                `} >
                    <img src={scr} alt="game image" className={`screenshot--itself min-w-[300px]`}/>
                </div> 
            studio
            </div>
            <div  className={`
                block
                sm:block
                md:hidden`} >
                    <img src={scr} alt="game image" className={`screenshot--itself min-w-[300px]`}/>
                </div> 

            <div className="we--are--trigger opacity-0">
                <h3 className="text-center mt-40 font-bold">we are</h3>
                <h2 className="text-violet-800 leading-10 Montserrat font-bold text-center mb-10  uppercase text-[50px] ">nova plus</h2>
                <div className="block bg-stone-800 mx-auto w-[30%] h-[2px]"></div>
                <div className="mt-10 w-[60%] block mx-auto text-center text-slate-400 
                text-sm
                lg:text-base">    
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