import { Link } from "react-router-dom";
import { emploeeI } from "../../redux/teamReducer";

interface AboutUsSingleEmployeeI extends emploeeI {
    key: number
}

const AboutUsSingleEmployee:React.FC<AboutUsSingleEmployeeI> = ({ image, name, position, id }) => {
    return (
        <div>
            <div className={`aboutus--team--avatar${id}--trigger scale-0 overflow-hidden flex justify-center items-center rounded-full hover:outline hover:outline-4 outline-offset-4 outline-violet-700 transition-all
            h-[200px] w-[200px]
            lg:h-[300px] lg:w-[300px]
            `}>
                <img src={image} alt={image} className="min-w-[200px] mt-20 min-h-max flex-shrink-0"/>
            </div>
            <div className={`aboutus--team--avatarText${id}--trigger relative top-[-10%] opacity-0 text-center mt-6`}>
                <h4 className="text-white text-xl Haptik">{name}</h4>
                <p className="text-slate-400 mt-2">-{position}-</p>
                <div className="flex justify-around w-[50%] mx-auto mt-4 text-slate-600 ">
                    <Link target="_blank" to={'https://www.linkedin.com/in/kirill-shauchenka-356802296/'} className="fa-brands fa-linkedin-in hover:text-white transition-all"></Link>
                    <Link target="_blank" to={'https://github.com/AniMate002'} className="fa-brands fa-github hover:text-white transition-all"></Link>
                    <Link target="_blank" to={'/'} className="fa-brands fa-x-twitter hover:text-white transition-all"></Link>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUsSingleEmployee;