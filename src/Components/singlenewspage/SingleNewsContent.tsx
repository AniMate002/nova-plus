import { newsI } from "../../redux/newsReducer";

interface SingleNewsContentI extends newsI {}

const SingleNewsContent:React.FC<SingleNewsContentI> = ({images, body, read, subtitle, year, date}) => {
    return (
        <div className="w-[60%] mx-auto rounded-xl bg-slate-800 relative min-h-[70vh]  pb-40 text-slate-400">
            <img src={images[0]} alt={images[0]} className="absolute left-[50%] translate-x-[-50%] top-[-100px] h-[500px] mx-auto rounded-lg"/>
            <div className=" mx-auto pt-[400px] p-10">
                <div className="px-10 flex justify-between text-white">
                    <p className="Haptik mt-10 text-xl">{date}</p>
                    <p className="Haptik mt-10 text-xl">{year}</p>
                    <p className="Haptik mt-10 text-xl">~{read}min read</p>
                </div>
                <p className="mt-14">{body}</p>
                <h4 className="text-center text-2xl mt-10 Haptik font-bold">{subtitle}</h4>
            </div>
        </div>
    );
}
 
export default SingleNewsContent;