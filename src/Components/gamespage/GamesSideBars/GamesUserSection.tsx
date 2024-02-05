import { useAppSelector } from "../../../redux/hook";



const GamesUserSection:React.FC = () => {
    const { isLoading, error, user, isLogged} = useAppSelector(state => state.user)
    if(isLogged){
        return (
            <div className="flex justify-between items-center py-4 hover:bg-slate-800 px-10 rounded-xl transition-all duration-200">
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
            <div className="mx-10 flex items-center gap-4">
                <button className="font-bold text-slate-500 text-sm rounded-xl hover:text-slate-300 transition-all duration-200">Log In</button>
                <button className="font-bold text-violet-500 text-sm rounded-xl hover:text-violet-300 transition-all duration-">Sign Up</button>
            </div>
        )
    }
}
 
export default GamesUserSection;