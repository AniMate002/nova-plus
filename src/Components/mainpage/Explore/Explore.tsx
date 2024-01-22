import { NavLink } from "react-router-dom";
import Footer from "./Footer";



const Explore:React.FC = () => {
    return (
        <div className="pt-[150px] main-explore-trigger">
            <h3 className="text-center uppercase tracking-widest ">still not enough?</h3>
            <p className='uppercase font-bold tracking-widest mt-32 text-center text-[170px]'>explore</p>
            <Footer />
        </div>
    );
}
 
export default Explore;