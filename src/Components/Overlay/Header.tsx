import { Link } from "react-router-dom";
import GoUpButton from "./GoUpButtom";
import SocialNetworks from "./SocialNetworks";


const Header:React.FC = () => {
    return (
        <div>
            <header className="main--header z-50 top-[48px] font-semibold fixed flex w-[100vw] justify-around text-white uppercase">
                <div>Nova Plus</div>
                <div className="flex gap-4">
                    <Link to={'/games'}>Games</Link>
                    <Link to={'/mediaCenter'}>Media Center</Link>
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