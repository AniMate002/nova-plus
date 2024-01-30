import { useNavigate } from "react-router-dom";



const PageNotFound:React.FC = () => {
    const navigate = useNavigate()
    const goHome = ():void => navigate('/')
    return (
        <div className="min-h-[100vh] bg-gradient-to-bl from-violet-950 to-slate-950">
            <div className="text-[350px] text-white opacity-[0.2] w-full text-center uppercase font-bold Haptik tracking-widest pt-10">
                error
            </div>
            <div className="w-full text-white text-[250px] Haptik text-center mt-[-300px] font-bold">404</div>
            <p className="text-center text-white Haptik text-[24px] tracking-wider makeNunito">The page you are looking for was either removed or doesn't exist.</p>
            <button onClick={goHome} className="mx-auto block mt-10 px-8 py-4 bg-violet-800 text-white rounded-lg hover:bg-violet-700 transition-all ">Go home</button>
        </div>
    );
}
 
export default PageNotFound;