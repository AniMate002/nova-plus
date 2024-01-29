import { Link } from "react-router-dom";
import { newsI } from "../../redux/newsReducer";

interface SingleNewsItemI extends newsI {
    key: string,
    type: "small" | "big"
}

const SingleNewsItem:React.FC<SingleNewsItemI> = ({title, tags, read, year, date, images, type, id}) => {
    const renderedTags = tags.map(tag => {
        return (
            <p className="text-white border-2 border-white rounded-full
            px-1 py-1 text-[8px]
            sm:px-4 sm:py-3 sm:text-base
            ">{tag}</p>
        )
    }) 
    if(type === 'big'){
        return (
            <Link to={`/news/${id}`} className="relative w-full 
            mb-64
            md:mb-[200px]
            lg:mb-20
            xl:mb-0
            ">
                <div className=" overflow-hidden">
                    <img src={images[0]} alt={images[0]} className="hover:scale-[1.2] transition-all hover:rotate-6 min-w-full"/>
                    <div className="absolute w-full h-full left-0 top-0 bg-black opacity-[0.4] pointer-events-none"></div>
                    <div className="absolute w-full h-full   left-0 pointer-events-none
                    p-2 top-28
                    min-[500px]:top-32
                    md:top-40
                    xl:p-10 xl:top-0
                    ">
                        <div className="flex items-center justify-between text-white
                        text-[10px]
                        sm:text-base
                        ">
                            <p className="Haptik">{date}</p>
                            <p className="Haptik">{year}</p>
                            <p className="Haptik">~{read}min read</p>
                        </div>
                        <h3 className="text-center  font-bold 
                        text-xl mt-4
                        xl:text-5xl xl:mt-10
                        ">{title}</h3>
                        <div className="flex flex-wrap 
                        mt-4 gap-1
                        min-[500px]:mt-10
                        sm:mt-28 sm:gap-4
                        md:mt-10
                        lg:mt-18
                        xl:mt-20
                        ">
                            {renderedTags}
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
    return (
        <Link to={`/news/${id}`} className="relative w-full
        mb-10
        md:mb-0
        ">
            <div className="bg-violet-500 h-[2px] w-full mb-5"></div>
            <div className="overflow-hidden flex items-start justify-between">
                <div className="w-[60%]">
                    <div className="flex justify-between items-center flex-wrap
                    text-[8px]
                    md:text-base
                    ">
                        <p className="Haptik">{date}</p>
                        <p className="Haptik">{year}</p>
                        <p className="Haptik">~{read}min read</p>
                    </div>
                    <h3 className=" font-bold 
                    text-md mt-4
                    md:text-5xl md:mt-20
                    ">{title}</h3>
                    <div className="mt-20 flex-wrap gap-4
                    hidden
                    md:flex
                    ">
                        {renderedTags}
                    </div>
                </div>
                <img src={images[0]} alt={images[0]} className="w-[35%] rounded-xl"/>
            </div>
        </Link>
    );
    
}
 
export default SingleNewsItem;