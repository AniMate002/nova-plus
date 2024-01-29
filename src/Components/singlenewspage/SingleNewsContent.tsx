import { newsI } from "../../redux/newsReducer";

interface SingleNewsContentI extends newsI {}

const SingleNewsContent:React.FC<SingleNewsContentI> = ({images, body, read, subtitle, year, date}) => {
    return (
        <div className=" shadow-slate-800 mx-auto rounded-xl bg-gradient-to-bl from-slate-700 to-slate-900 relative min-h-[70vh] text-slate-400
        w-full pb-20
        md:w-[60%] md:pb-40
        ">
            <img src={images[0]} alt={images[0]} className="absolute left-[50%] translate-x-[-50%] top-[-100px] mx-auto rounded-lg
            h-auto w-full
            xl:h-[500px] xl:w-auto
            "/>
            <div className=" mx-auto p-10
            pt-[80px]
            min-[380px]:pt-[110px]
            min-[440px]:pt-[160px]
            min-[515px]:pt-[250px]
            min-[670px]:pt-[280px]
            min-[984px]:pt-[250px]
            min-[1130px]:pt-[280px]
            sm:pt-[250px]
            xl:pt-[400px]
            ">
                <div className="px-10 flex justify-between text-white flex-wrap mt-10 
                text-sm
                md:text-xl
                ">
                    <p className="Haptik">{date}</p>
                    <p className="Haptik">{year}</p>
                    <p className="Haptik">~{read}min read</p>
                </div>
                <p className="mt-14 text-justify
                text-sm
                md:text-base
                ">{body}</p>
                <h4 className="text-center text-2xl mt-10 Haptik font-bold">{subtitle}</h4>
            </div>
        </div>
    );
}
 
export default SingleNewsContent;