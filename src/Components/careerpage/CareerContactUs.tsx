import { Link } from "react-router-dom";





const CareerContactUs:React.FC = () => {
    return (
        <div className="w-[80%] mx-auto pt-20 pb-40 text-white">
            <p className="text-slate-500 mb-10">/ contact</p>
            <div className="h-[1px] w-full bg-slate-500 mb-28"></div>
            <div className="flex justify-between w-full items-baseline">
                <h3 className="text-9xl text-violet-700 mb-40">Ready To Get Started</h3>
                <Link to='/' className="w-[100px] h-[95px] flex items-center justify-center rounded-full bg-violet-600 text-2xl hover:bg-slate-600 hover:scale-[1.1] transition-all duration-200">
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <div className="flex justify-between uppercase">
                <h4 className="font-bold text-5xl">nova plus</h4>
                <div>
                    <p className="text-violet-500 mb-14 text-lg">/phone</p>
                    <p className="Haptik">451-118-044</p>
                </div>
                <div>
                    <p className="text-violet-500 mb-14 text-lg">/email</p>
                    <p className="lowercase">kirill1974111@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
 
export default CareerContactUs;