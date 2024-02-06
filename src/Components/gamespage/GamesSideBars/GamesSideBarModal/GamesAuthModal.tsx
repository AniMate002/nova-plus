import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../redux/hook";
import { logInUser, singUpUser, toggleType, userI, userPayloadI } from "../../../../redux/userReducer";
import { useEffect } from "react";
import { hideGamesAuthModal } from "../../../../animation/GamesSideBarAnimations/GamesAuthModalAnimations";
import GamesAuthFormInput from "./GamesAuthFormInput";



const GamesAuthModal:React.FC = () => {

    const { type, isLogged, isLoading, error } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors: formErrors, isDirty },
      } = useForm<userI | userPayloadI>({
        mode:"all"
      })

    useEffect(() => {
        console.log("isDirty: ", isDirty, " Errors: ", formErrors)
    },[isDirty, formErrors])

    const changeTypeHandler = () => {
        dispatch(toggleType())
    }

    const onSubmit: SubmitHandler<userI | userPayloadI> = (data) => {
        if (type === 'Sign up' && 'name' in data) {
            dispatch(singUpUser(data));
        } else if (type === 'Login') {
            dispatch(logInUser(data));
        }
        console.log(data);
    }

    useEffect(() => {
        if(isLogged){
            hideGamesAuthModal()
        }
    }, [isLogged])

    function closeAuthModalClickHandler() {
        hideGamesAuthModal()
    }

    return (
        <div className="games--auth--modal scale-0 fixed w-full h-full z-50 flex items-center justify-center text-white">
            <div className="absolute w-full h-full bg-black opacity-[0.6] top-0 left-0 z-10"></div>
            <form onSubmit={handleSubmit(onSubmit)} className="relative w-[500px] z-20 bg-gradient-to-bl from-slate-700 to-slate-800 select-none
            p-6 h-full rounded-none pt-32
            min-[500px]:rounded-2xl min-[500px]:h-auto min-[500px]:pt-10
            lg:p-10 
            ">
                <button type="button" onClick={closeAuthModalClickHandler} className="active:shadow-none transition-all absolute text-lg w-[35px] h-[35px] rounded-full flex items-center justify-center bg-slate-700 shadow-sm shadow-slate-800 right-[30px] text-slate-400 top-[30px]"><i className="fa-solid fa-xmark"></i></button>
                <h3 className="text-center Haptik tracking-widest font-bold
                text-5xl
                sm:text-7xl
                ">{type}</h3>
                <p className="mt-4 mb-10 text-slate-400 text-sm text-center">Please {type} to continue.</p>
                {type === 'Sign up' ? 
                    <GamesAuthFormInput modalType={type} formErrors={formErrors} inputName="name" placeholder="John Smith" inputType="text" register={register} key={1}/>
                :
                ""
                }
                <GamesAuthFormInput modalType={type} formErrors={formErrors} inputName="email" placeholder="user123@gmail.com" inputType="email" register={register} key={2}/>
                <GamesAuthFormInput modalType={type} formErrors={formErrors} inputName="password" placeholder="Password" inputType="password" register={register} key={3}/>  
                {error ? 
                <p className="text-slate-300 font-bold mb-4 bg-slate-600 rounded-full px-4 py-2">Error: {error?.includes('401') ? "User was not found!" : error}</p>
                :
                ""
                }
                <button disabled={isLoading} type="submit" className="ml-auto hover:shadow-lg hover:shadow-violet-800 active:shadow-none transition-all duration-200 shadow-md shadow-violet-900 uppercase flex items-center gap-4 rounded-full  bg-gradient-to-r from-violet-600 to-violet-800
                px-4 py-[6px] text-sm
                lg:px-6 lg:py-[10px] lg:text-base
                ">
                    {isLoading ? 
                        <i className="fa-solid fa-spinner fa-spin-pulse"></i>
                    :
                        type
                    }
                    <i className={`${isLoading ? 'hidden' : 'inline'} fa-solid fa-arrow-right`}></i>
                </button>
                <div className=" mt-10 flex items-center gap-2 text-sm text-slate-500">
                    Dont have an account?
                    <button type="button" onClick={changeTypeHandler} className="text-violet-500 font-bold">{type === 'Login' ? 'Sign up' : 'Login' }</button>
                </div>
            </form>

        </div>
    );
}
 
export default GamesAuthModal;