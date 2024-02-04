import { Link, NavLink, useNavigate } from "react-router-dom";
import GoUpButton from "./GoUpButtom";
import SocialNetworks from "./SocialNetworks";
import { startTransitionAnimation } from "../../animation/transitionOverlayAnimation/TransitionOveryAnimation";


const Header:React.FC = () => {
    const navigate = useNavigate()
    const transitionHandler = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>, location: string):void => {
        startTransitionAnimation(navigate, location)
        e.preventDefault()
    }
    return (
        <div>
            <header className="main--header z-50 top-[48px] bg-transparent py-0 font-semibold fixed w-[100vw] justify-around text-white uppercase
            hidden
            xl:flex">
                <Link onClick={(e) => transitionHandler(e, '/')} to={'/'}>Nova Plus</Link>
                <div className="flex gap-4">
                    <NavLink to={'/aboutUs'} onClick={(e) => transitionHandler(e, '/aboutUs')}>About Us</NavLink>
                    <NavLink onClick={(e) => transitionHandler(e, '/games')}  to={'/games'}>Games</NavLink>
                    <NavLink onClick={(e) => transitionHandler(e, '/news')} to={'/news'}>News</NavLink>
                    <NavLink onClick={(e) => transitionHandler(e, '/career')} to={'/career'}>Career</NavLink>
                </div>
            </header>

            <SocialNetworks />
            <GoUpButton />

        </div>
    );
}
 
export default Header;