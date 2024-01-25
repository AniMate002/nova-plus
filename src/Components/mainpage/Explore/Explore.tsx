import { Link, NavLink } from "react-router-dom";
import Footer from "./Footer";



const Explore:React.FC = () => {
    return (
        <Link target="_blank" to={'/'} className="pt-[150px] main-explore-trigger">
            <h3 className="text-center uppercase tracking-widest 
            text-[10px]
            sm:text-base">still not enough?</h3>
            <p className='uppercase font-bold tracking-widest  text-center 
            mt-10 text-[40px]
            sm:text-[110px] sm:mt-[20]
            md:text-[140px] md:mt-32
            '>explore</p>
            <Footer />
        </Link>
    );
}
 
export default Explore;