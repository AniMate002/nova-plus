import { Link } from "react-router-dom";
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
                    <Link to={'/games'}>Games</Link>
                    <Link to={'/news'}>News</Link>
                    <Link to={'/career'}>Career</Link>
                    <Link to={'/aboutUs'}>About Us</Link>
                </div>
            </header>

            <SocialNetworks />
            <GoUpButton />

        </div>
    );
}
 
export default Header;