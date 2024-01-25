import { jobI } from "../../../redux/jobsReducer";
import { Link } from "react-router-dom";

interface SingleJobI extends jobI {
    key: string
}

const SingleJob:React.FC<SingleJobI> = ({location, position, type, id}) => {
    return (
        <div className={`job--trigger--${id} flex items-center gap-10 relative left-[-200%]
        text-[7px]
        min-[320px]:text-[10px]
        sm:text-sm
        `}>
            <p className="text-white underline 
            w-[10%]
            min-[320px]:w-[20%]
            sm:w-[40%]
            ">{position}</p>
            <p className="text-white w-[20%]">{location}</p>
            <p className="text-white 
            w-[10%]
            sm:w-[15%]
            ">{type}</p>
            <Link to={'/'} className="text-violet-300 w-[5%] underline">Details</Link>
        </div>
    );
}
 
export default SingleJob;