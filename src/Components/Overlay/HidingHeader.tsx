import { Link } from "react-router-dom";
import { closeHeaderSmall } from "../../animation/Animation";



const HidingHeader:React.FC = () => {
    return (
        <div className="header--small fixed top-full hidden w-full h-full bg-[#6733c8] z-50">
        <div className="px-10 py-10 w-full">
            <button onClick={closeHeaderSmall} className="text-white text-[27px]"><i className="fa-solid fa-xmark"></i></button>
            <div className="flex flex-col items-end w-full text-white font-semibold tracking-widest gap-4 text-4xl mt-28">
                <Link to={'/games'} className="block h-[40px] overflow-hidden"><p className="link--header--small relative top-9">Games</p></Link>
                <Link to={'/mediaCenter'} className="block sm:h-[40px] text-end vsm:h-[80px] overflow-hidden"><p className="link--header--small relative top-9 ">Media Center</p></Link>
                <Link to={'/career'} className="block h-[40px] overflow-hidden"><p className="link--header--small relative top-9">Career</p></Link>
                <Link to={'/aboutUs'} className="block h-[40px] overflow-hidden"><p className="link--header--small relative top-9">About Us</p></Link>
            </div>
        </div>

        <div className="flex items-stretch justify-between mt-20 h-[250px] overflow-hidden">
            <Link to={'/career'} className="block--link--small--header h-[250px] bg-white py-2 px-2 w-[50%] relative top-[100%]">
                <p className=" font-bold">jobs<br></br>available</p>
                <p className="text-8xl text-center mt-10"><i className="fa-brands fa-codepen"></i></p>
            </Link>
            <Link to={'/games'} className="block--link--small--header h-[250px] bg-slate-800 py-2 px-2 w-[50%] text-white relative top-[100%]">
                <p className=" font-bold">view our<br></br>games</p>
                <p className="text-8xl text-center mt-10"><i className="fa-solid fa-dice-d20"></i></p>
            </Link>
        </div>
    </div>
    );
}
 
export default HidingHeader;