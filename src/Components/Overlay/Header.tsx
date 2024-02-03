import { Link, NavLink } from "react-router-dom";
import GoUpButton from "./GoUpButtom";
import SocialNetworks from "./SocialNetworks";


const Header:React.FC = () => {
    return (
        <div>
            <header className="main--header z-50 top-[48px] bg-transparent py-0 font-semibold fixed w-[100vw] justify-around text-white uppercase
            hidden
            xl:flex">
                <Link to={'/'}>Nova Plus</Link>
                <div className="flex gap-4">
                    <NavLink to={'/games'}>Games</NavLink>
                    <NavLink to={'/news'}>News</NavLink>
                    <NavLink to={'/career'}>Career</NavLink>
                    <NavLink to={'/aboutUs'}>About Us</NavLink>
                </div>
            </header>

            <SocialNetworks />
            <GoUpButton />

        </div>
    );
}
 
export default Header;