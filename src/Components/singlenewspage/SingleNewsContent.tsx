import { newsI } from "../../redux/newsReducer";
import NewsSwiper from "../mainpage/News/NewsSwiper";

interface SingleNewsContentI extends newsI {}

const SingleNewsContent:React.FC<SingleNewsContentI> = ({images, body, read, subtitle}) => {
    return (
        <div className="w-full bg-violet-950 relative min-h-[70vh] text-white pb-40">
            <img src={images[0]} alt={images[0]} className="absolute left-[50%] translate-x-[-50%] top-[-100px] h-[500px] mx-auto rounded-lg"/>
            <div className="w-[50%] mx-auto pt-[400px]">
                <p className=" mt-10">{body}</p>
                <h4 className="text-center text-2xl mt-10 Haptik font-bold">{subtitle}</h4>
                <p className="Haptik mt-10">Also check:</p>
                <NewsSwiper />
            </div>
        </div>
    );
}
 
export default SingleNewsContent;