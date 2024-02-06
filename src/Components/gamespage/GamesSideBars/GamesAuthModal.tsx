import { useForm, SubmitHandler } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { logInUser, singUpUser, toggleType, userI, userPayloadI } from "../../../redux/userReducer";
import { useEffect } from "react";
import { hideGamesAuthModal } from "../../../animation/GamesSideBarAnimations/GamesAuthModalAnimations";
import ErrorFormDisplay from "./ErrorFormDisplay";



const GamesAuthModal:React.FC = () => {

    const { type, isLogged, isLoading, error } = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors: formErrors, isDirty },
      } = useForm<userI | userPayloadI>({
        mode:"onSubmit"
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
            <form onSubmit={handleSubmit(onSubmit)} className="relative w-[500px] rounded-2xl z-20 p-10 bg-gradient-to-bl from-slate-700 to-slate-800 select-none">
                <button type="button" onClick={closeAuthModalClickHandler} className="active:shadow-none transition-all absolute text-lg w-[35px] h-[35px] rounded-full flex items-center justify-center bg-slate-700 shadow-sm shadow-slate-800 right-[30px] text-slate-400 top-[30px]"><i className="fa-solid fa-xmark"></i></button>
                <h3 className="text-center text-7xl Haptik tracking-widest font-bold">{type}</h3>
                <p className="mt-4 mb-10 text-slate-400 text-sm text-center">Please {type} to continue.</p>
                {
                    'name' in formErrors ? 
                    type === 'Sign up' ?
                    <ErrorFormDisplay message={'name' in formErrors ? formErrors.name?.message : 'Name is required!'}/>
                    :
                    ""
                    :
                    ""
                }
                {type === 'Sign up' ? 
                    <div className="mb-4 relative rounded shadow-sm focus-within:scale-[1.02] transition-all duration-200">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 text-2xl">
                                <i className="fa-solid fa-user"></i>
                            </span>
                            </div>
                            <input style={{fontSize: '16px'}} 
                            {...register('name', {
                                required: {
                                    value: true,
                                    message: 'Name is required!'
                                }
                            })}
                            type='text'
                            name="name"
                            className="block w-full rounded-md border-0 py-1.5 pr-20 active:outline-0 sm:text-sm sm:leading-6
                            bg-slate-700 placeholder:text-lg h-[50px] pl-14 text-slate-300 focus:shadow-2xl shadow-black transition-all
                            "
                            placeholder="John Smith"
                            />
                    </div>
                :
                ""
                }
                {
                    formErrors.email ? 
                    <ErrorFormDisplay message={formErrors.email.message}/>
                    :
                    ""
                }
                <div className={`relative mb-4 rounded shadow-sm focus-within:scale-[1.02] transition-all duration-200`}>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 text-2xl">
                            <i className="fa-regular fa-envelope"></i>
                        </span>
                        </div>
                        <input style={{fontSize: '16px'}}
                        {...register('email', {
                            required: {
                                value: true,
                                message: 'Email is required!'
                            }
                        })}
                        type='email'
                        name="email"
                        className="block w-full rounded-md border-0 py-1.5 pr-20 active:outline-0 sm:text-sm sm:leading-6
                        bg-slate-700 placeholder:text-lg h-[50px] pl-14 text-slate-300 focus:shadow-2xl shadow-black transition-all
                        "
                        placeholder="user123@gmail.com"
                        />
                </div>
                {
                    formErrors.password ? 
                    <ErrorFormDisplay message={formErrors.password.message}/>
                    :
                    ""
                }
                <div className="relative mt-4 rounded shadow-sm focus-within:scale-[1.02] transition-all duration-200 mb-4">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="text-gray-500 text-2xl">
                            <i className="fa-solid fa-lock"></i>
                        </span>
                        </div>
                        <input style={{fontSize: '16px'}}
                        {...register('password', {
                            required: {
                                value: true,
                                message: 'Password is required!'
                            }
                        })}
                        type='password'
                        name="password"
                        className="block w-full rounded-md border-0 py-1.5 pr-20 active:outline-0 sm:text-sm sm:leading-6
                        bg-slate-700 placeholder:text-lg h-[50px] pl-14 text-slate-300 focus:shadow-2xl shadow-black transition-all
                        "
                        placeholder="password"
                        />
                </div>
                {error ? 
                <p className="text-slate-300 font-bold mb-4 bg-slate-600 rounded-full px-4 py-2">Error: {error?.includes('401') ? "User was not found!" : error}</p>
                :
                ""
                }
                <button disabled={isLoading} type="submit" className="ml-auto hover:shadow-lg hover:shadow-violet-800 active:shadow-none transition-all duration-200 shadow-md shadow-violet-900 uppercase flex items-center gap-4 rounded-full px-6 py-[10px] bg-gradient-to-r from-violet-600 to-violet-800">
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