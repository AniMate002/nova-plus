import { Link } from "react-router-dom";



const CareedHeader:React.FC = () => {
    return (
        <div className="career--header min-h-[100vh] flex items-center justify-center flex-col text-white
        w-[80%] mx-auto text-center
        sm:w-full
        ">
            <h1 className="font-bold uppercase
            text-6xl
            sm:text-7xl
            ">Start your career here</h1>
            <h2 className="text-violet-300 font-bold text-2xl">become a professional</h2>
            <div className="flex gap-10">
                <Link to={'/'} className="text-violet-100 bg-violet-600 rounded-xl mt-10 hover:bg-violet-500  transition-all
                px-4 py-4 text-[12px] font-bold
                sm:px-8 sm:py-4 sm:text-base
                ">join us now</Link>
                <Link to={'/'} className="text-violet-600 bg-violet-100 rounded-xl mt-10 hover:bg-violet-200 transition-all
                px-4 py-4 text-[12px] font-bold
                sm:px-8 sm:py-4 sm:text-base
                ">try for free</Link>
            </div>
        </div>
    );
}
 
export default CareedHeader;