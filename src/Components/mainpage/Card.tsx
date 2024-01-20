import { useEffect, useState } from "react";
import { Tilt } from 'react-tilt'
import { gsap } from "gsap";
import { cardOptions } from "../../tiltOptions";

import steam from '../../images/logos/steam.png'
import epicGames from '../../images/logos/epicGames.png'
import gog from '../../images/logos/gog.png'
import ps5 from '../../images/logos/ps5.png'




const Card:React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(true)

    function expandCard():void {
        if(isOpen){
            setIsOpen(false)
            gsap.to('.content--card--container', {
                height: '0'
            })
        }else{
            setIsOpen(true)
            gsap.to('.content--card--container', {
                height: 'auto'
            })
        }
        
    }

    return (
        <Tilt options={cardOptions} style={{position: 'absolute', top: '300px', right: '150px'}} >
        <div className="cursor-default main--card w-[400px] bg-violet-800 flex flex-col items-center py-5 rounded-xl  opacity-0">
            <h1 className="text-white text-4xl font-bold uppercase">nova plus</h1>
            <button onClick={expandCard} className="text-white expand--button w-full">
                {isOpen ? <i className="fa-solid fa-caret-up fa-bounce"></i> : <i className="fa-solid fa-caret-down fa-bounce"></i>}
                
            </button>
            <div className={`content--card--container w-full h-auto overflow-hidden`}>
                <div className="divider"></div>
                {/* <Tilt options={{scale: 1, perspective: 700,}}> */}
                    {/* <p className="text-white text-justify bg-violet-500 p-4 rounded-lg mx-12">Step into the future of gaming with NovaPuls – where innovation knows no bounds and immers
                    ion is an art form. We're not just a game development company; we're pioneers, crafting experiences that redefine the very essence 
                    of play. From heart-pounding action to mind-bending narratives, our diverse portfolio is a rollercoaster of excitement.</p> */}
                    <div className="text-center text-white font-bold">Available on</div>
                    
                    <div className="flex justify-evenly mt-4 mb-2 items-stretch">
                        <div className="p-2 bg-violet-400 rounded-xl violet---shadow hover:scale-[1.1] transition-all">
                            <img src={steam} alt="steamLogo"  className="white--logo w-[50px]"/>
                        </div>
                        <div className="p-2 bg-violet-400 rounded-xl violet---shadow flex items-center hover:scale-[1.1] transition-all">
                            <img src={ps5} alt="steamLogo"  className="white--logo w-[50px]"/>
                        </div>                        
                        <div className="p-2 bg-violet-400 rounded-xl violet---shadow hover:scale-[1.1] transition-all">
                            <img src={epicGames} alt="steamLogo"  className=" w-[50px]"/>
                        </div>                        
                        <div className="p-2 bg-violet-400 rounded-xl violet---shadow hover:scale-[1.1] transition-all">
                            <img src={gog} alt="steamLogo"  className="white--logo w-[50px]"/>
                        </div>

                    </div>
                {/* </Tilt> */}

            </div>
        </div>
        </Tilt>
    );
}
 
export default Card;