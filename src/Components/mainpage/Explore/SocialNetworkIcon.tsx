import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

interface SocialNetworkIconI {
    iconClass: string;
    link: string;
}

const SocialNetworkIcon:React.FC<SocialNetworkIconI> = ({iconClass, link}) => {
    return (
        <Tilt>
            <Link to={link} target="_blank" className={`purple--shadow ${iconClass}  rounded-xl outline outline-violet-800 bg-slate-900 flex justify-center items-center 
            text-md w-[30px] h-[30px]
            sm:w-[40px] sm:h-[40px] sm:text-xl
            lg:w-[50px] lg:h-[50px] lg:text-2xl
            `}></Link>

        </Tilt>
    );
}
 
export default SocialNetworkIcon;