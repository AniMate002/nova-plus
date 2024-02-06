import { FieldErrors, UseFormRegister } from "react-hook-form";
import { userI, userPayloadI } from "../../../../redux/userReducer";
import ErrorFormDisplay from "./ErrorFormDisplay";


interface IGamesAuthFormInput{
    register: UseFormRegister<userI | userPayloadI>,
    inputName: "id" | "email" | "password" | "name" | "role" | "avatar",
    inputType: string,
    placeholder: string,
    formErrors: FieldErrors<userI | userPayloadI>,
    modalType: 'Sign up' | 'Login'
}

const GamesAuthFormInput:React.FC<IGamesAuthFormInput> = ({register, inputName, inputType, placeholder, formErrors, modalType}) => {
    const capitalizedName: string = inputName.charAt(0).toUpperCase() + inputName.slice(1)
    return (
        <div>
            {
                inputName in formErrors ? 
                formErrors[inputName as keyof (userI | userPayloadI)] ?
                <ErrorFormDisplay message={`${capitalizedName} is required!`}/>
                :
                ""
                :
                ""
            }
            <div className="mb-4 relative rounded shadow-sm focus-within:scale-[1.02] transition-all duration-200">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <span className="text-gray-500 text-2xl">
                        <i className="fa-solid fa-user"></i>
                    </span>
                    </div>
                    <input style={{fontSize: '16px'}} 
                    {...register(inputName, {
                        required: {
                            value: true,
                            message: `${capitalizedName} is required!`
                        }
                    })}
                    type={inputType}
                    name={inputName}
                    className="block w-full rounded-md border-0 py-1.5 active:outline-0 sm:text-sm sm:leading-6
                    bg-slate-700 placeholder:text-lg  pl-14 text-slate-300 focus:shadow-2xl shadow-black transition-all
                    pr-2
                    lg:h-[50px] lg:pr-10
                    "
                    placeholder={placeholder}
                    />
            </div>
        </div>
    );
}
 
export default GamesAuthFormInput;