import { useEffect } from "react";
import { useNavigate } from "react-router-dom";



const PageNotFound:React.FC = () => {
    const navigate = useNavigate()
    const goHome = ():void => navigate('/')
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="min-h-[100vh] bg-gradient-to-bl from-violet-950 to-slate-950 overflow-x-hidden">
            <div className=" text-white opacity-[0.2] w-full text-center uppercase font-bold Haptik tracking-widest
            text-7xl pt-40
            min-[490px]:text-[120px]
            sm:text-[150px]
            md:text-[200px] md:pt-20
            lg:text-[250px] lg:pt-20
            xl:text-[340px] xl:pt-32
            2xl:text-[350px] 2xl:pt-32
            ">
                error
            </div>
            <div className="w-full text-white Haptik text-center font-bold
            text-[100px]
            min-[490px]:text-[130px]
            sm:mt-[-100px]
            lg:text-[170px] lg:mt-[-150px]
            xl:text-[200px] xl:mt-[-190px]
            2xl:text-[250px] 2xl:mt-[-200px]
            ">404</div>
            <p className="text-center text-white Haptik tracking-wider makeNunito
            text-[10px]
            min-[480px]:text-sm
            sm:text-md
            md:text-[24px]
            ">The page you are looking for was either removed or doesn't exist.</p>
            <button onClick={goHome} className="mx-auto block mt-10 px-8 py-4 bg-violet-800 text-white rounded-lg hover:bg-violet-700 transition-all ">Go home</button>
        </div>
    );
}
 
export default PageNotFound;