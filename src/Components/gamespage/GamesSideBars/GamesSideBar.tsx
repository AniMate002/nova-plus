import { NavLink } from "react-router-dom";
import GamesUserSection from "./GamesUserSection";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logOut, toggleSideBar } from "../../../redux/userReducer";
import { hideGamesSideBar } from "../../../animation/GamesSideBarAnimations/GamesSideBarAnimations";



const GamesSideBar:React.FC = () => {
    const dispatch = useAppDispatch()
    const { isLogged } = useAppSelector(state => state.user)

    const logOutClickHandler = () => {
        dispatch(logOut())
    }

    function hideMenuClickHandler (){
        hideGamesSideBar()
        dispatch(toggleSideBar())
    }
    
    return (
        <div className="games--sidebar fixed top-0 h-[100vh] bg-gradient-to-tl from-slate-800 to-slate-900 z-40 px-4 text-white overflow-y-scroll
        flex flex-col justify-between
        right-[-120%]
        w-[350px]
        ">
            <div className="py-10">
                <NavLink to={'/'} className={'flex gap-4 items-center Haptik tracking-wider px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-house-chimney"></i>Dashboard</NavLink>
                <NavLink to={'/aboutUs'} className={'flex gap-4 items-center Haptik tracking-wider px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-address-card"></i>About us</NavLink>
                <NavLink to={'/news'} className={'flex gap-4 items-center Haptik tracking-wider px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-newspaper"></i>News</NavLink>
                <NavLink to={'/games'} className={'flex gap-4 items-center Haptik tracking-wider px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-gamepad"></i>Games</NavLink>
                <NavLink to={'/career'} className={'flex gap-4 items-center Haptik tracking-wider px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-solid fa-coins"></i>Career</NavLink>
                <button onClick={logOutClickHandler} className={`${isLogged ? 'flex' : 'hidden'} w-full gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white`}><i className="fa-solid fa-arrow-right-from-bracket"></i>Log out</button>
                <button onClick={hideMenuClickHandler} className={'flex w-full gap-4 items-center Haptik px-10 py-4 hover:bg-slate-800 rounded-xl transition-all duration-200 text-slate-400 hover:text-white'}><i className="fa-regular fa-rectangle-xmark"></i>Close menu</button>
                <h4 className="text-slate-600 mt-10 mx-10 mb-4">Projects</h4>
                <div className="flex flex-col gap-4 mx-10 text-slate-400 text-sm">
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Website redesign</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">NovaPlus API</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Customer migration guides</p>
                    <p className="hover:text-white transition-all duration-200 cursor-pointer">Profit sharing program</p>
                </div>
            </div>
            <div className="w-full pb-2">
                <GamesUserSection />
            </div>
        </div>
    );
}
 
export default GamesSideBar;