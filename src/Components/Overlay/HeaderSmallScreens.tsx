import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { transform } from "typescript";
import { showHeaderSmall } from "../../animation/Animation";



const HeaderSmallScreens:React.FC = () => {

    return (
        <div className="fixed z-50 block 
        xl:hidden">
            <button onClick={showHeaderSmall} className="text-white text-[27px] ml-[10px] mt-[10px] select-none">
                <i className="fa-solid fa-bars"></i>
            </button>
           
        </div>
    );
}
 
export default HeaderSmallScreens;