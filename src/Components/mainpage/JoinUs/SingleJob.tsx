import { jobI } from "../../../redux/jobsReducer";
import { Link } from "react-router-dom";

interface SingleJobI extends jobI {
    key: string
}

const SingleJob:React.FC<SingleJobI> = ({location, position, type, id}) => {
    return (
        <div className={`job--trigger--${id} flex items-center gap-10 text-sm relative left-[-200%]`}>
            <p className="text-white underline w-[40%]">{position}</p>
            <p className="text-white w-[20%]">{location}</p>
            <p className="text-white w-[15%]">{type}</p>
            <Link to={'/'} className="text-violet-300 w-[5%] underline">Details</Link>
        </div>
    );
}
 
export default SingleJob;