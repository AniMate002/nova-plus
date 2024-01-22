import { Link } from "react-router-dom";
import { Tilt } from "react-tilt";

interface SocialNetworkIconI {
    iconClass: string;
    link: string;
}

const SocialNetworkIcon:React.FC<SocialNetworkIconI> = ({iconClass, link}) => {
    return (
        <Tilt>
            <Link to={link} target="_blank" className={`purple--shadow ${iconClass} w-[50px] h-[50px] rounded-xl outline outline-violet-800 bg-slate-900 flex justify-center items-center text-2xl`}></Link>

        </Tilt>
    );
}
 
export default SocialNetworkIcon;