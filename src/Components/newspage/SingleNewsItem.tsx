import { Link } from "react-router-dom";
import { newsI } from "../../redux/newsReducer";

interface SingleNewsItemI extends newsI {
    key: string,
    type: "small" | "big"
}

const SingleNewsItem:React.FC<SingleNewsItemI> = ({title, tags, read, year, date, images, type, id}) => {
    const renderedTags = tags.map(tag => {
        return (
            <p className="px-4 py-3 text-white border-2 border-white rounded-full">{tag}</p>
        )
    }) 
    if(type === 'big'){
        return (
            <Link to={`/news/${id}`} className="relative w-full">
                <div className=" overflow-hidden">
                    <img src={images[0]} alt={images[0]} className="hover:scale-[1.2] transition-all hover:rotate-6"/>
                    <div className="absolute w-full h-full left-0 top-0 bg-black opacity-[0.4] pointer-events-none"></div>
                    <div className="absolute w-full h-full p-10 top-0 left-0 pointer-events-none">
                        <div className="flex items-center justify-between text-white">
                            <p className="Haptik">{date}</p>
                            <p className="Haptik">{year}</p>
                            <p className="Haptik">~{read}min read</p>
                        </div>
                        <h3 className="text-center mt-20 font-bold text-5xl">{title}</h3>
                        <div className="mt-28 flex flex-wrap gap-4">
                            {renderedTags}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    return (
        <Link to={`/news/${id}`} className="relative w-full">
            <div className="bg-violet-500 h-[2px] w-full mb-5"></div>
            <div className="overflow-hidden flex items-start justify-between">
                <div className="w-[60%]">
                    <div className="flex justify-between items-center">
                        <p className="Haptik">{date}</p>
                        <p className="Haptik">{year}</p>
                        <p className="Haptik">~{read}min read</p>
                    </div>
                    <h3 className="mt-20 font-bold text-5xl">{title}</h3>
                    <div className="mt-20 flex flex-wrap gap-4">
                        {renderedTags}
                    </div>
                </div>
                <img src={images[0]} alt={images[0]} className="w-[35%] rounded-xl"/>
            </div>
        </Link>
    );
    
}
 
export default SingleNewsItem;