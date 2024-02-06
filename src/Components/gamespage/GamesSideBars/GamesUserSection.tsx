import { showGamesAuthModal } from "../../../animation/GamesSideBarAnimations/GamesAuthModalAnimations";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { changeType } from "../../../redux/userReducer";



const GamesUserSection:React.FC = () => {
    const { isLoading, error, user, isLogged, type} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const authBtnClickHandler = (btnType: 'Sign up' | 'Login') => {
        if(type !== btnType)
            dispatch(changeType(btnType))
        showGamesAuthModal()
    }

    if(isLogged){
        return (
            <div className="flex justify-between items-center py-4 hover:bg-slate-800 px-4 rounded-xl transition-all duration-200">
                <div className="flex gap-4 items-center">
                    <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                        <img src={user?.avatar} alt={user?.avatar} />
                    </div>
                    <div className="flex flex-col justify-between items-start">
                        <h5 className="font-bold Haptik">{user?.name}</h5>
                        <p className="text-[12px] text-slate-400 ">View Profile</p>
                    </div>
                </div>
                <button className="hover:rotate-45 transition-all text-xl">
                    <i className="fa-solid fa-gear"></i>
                </button>
            </div>
        );
    }else{
        return (
            <div className="mx-10 flex my-4 items-center gap-4">
                <button type="button" onClick={() => authBtnClickHandler("Login")} className="font-bold text-slate-500 text-sm rounded-xl hover:text-slate-300 transition-all duration-200">Log In</button>
                <button type="button" onClick={() => authBtnClickHandler("Sign up")} className="font-bold text-violet-500 text-sm rounded-xl hover:text-violet-300 transition-all duration-">Sign Up</button>
            </div>
        )
    }
}
 
export default GamesUserSection;