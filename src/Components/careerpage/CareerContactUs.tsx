import { Link } from "react-router-dom";





const CareerContactUs:React.FC = () => {
    return (
        <div className="w-[80%] mx-auto pt-20 pb-40 text-white max-w-[1500px] mx-auto">
            <p className="text-slate-500 mb-10">/ contact</p>
            <div className="h-[1px] w-full bg-slate-500
            mb-10
            lg:mb-28
            "></div>
            <div className="flex justify-between w-full items-baseline
            mb-10 flex-col
            lg:mb-40 xl:flex-row
            ">
                <h3 className="text-violet-700
                text-6xl mb-4
                lg:text-9xl lg:mb-0
                ">Ready To Get Started</h3>
                <Link to='/' className="flex items-center justify-center rounded-full bg-violet-600 text-2xl hover:bg-slate-600 hover:scale-[1.1] transition-all duration-200
                w-[50px] h-[50px]
                lg:min-w-[100px] lg:min-h-[100px]
                ">
                    <i className="fa-solid fa-arrow-right"></i>
                </Link>
            </div>
            <div className="flex justify-between uppercase
            flex-col
            lg:flex-row
            ">
                <h4 className="font-bold text-5xl">nova plus</h4>
                <div>
                    <p className="text-violet-500 text-lg      
                    mb-4 mt-10
                    lg:mb-14 lg:mt-0
                    ">/phone</p>
                    <p className="Haptik">451-118-044</p>
                </div>
                <div>
                    <p className="text-violet-500 text-lg
                    mb-4 mt-10
                    lg:mb-14 lg:mt-0
                    ">/email</p>
                    <p className="lowercase">kirill1974111@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
 
export default CareerContactUs;