import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { clearNewsFilter, filterNews } from "../../redux/newsReducer";

const NewsTags: React.FC = () => {
    const { newsTags } = useAppSelector((state) => state.news);
    const [activeTag, setActiveTag] = useState<string | undefined>(undefined);
    const dispatch = useAppDispatch()
    
    const compareTags = (tag: string): boolean => activeTag === tag;

    const renderedTags = newsTags.map((tag) => (
        <button
            key={tag}
            onClick={() => setActiveTag(compareTags(tag) ? undefined : tag)}
            className={`bg-${compareTags(tag) ? 'white' : 'transparent'} ${compareTags(tag) ? 'text-black' : 'text-white'}  border-2 border-violet-800 rounded-full  ${compareTags(tag) ? '' : 'hover:bg-slate-700'} transition-all
            py-1 px-1 text-[10px]
            md:py-4 md:px-4 md:text-sm
            `}
        >
            {tag} <i className={`fa-solid fa-${compareTags(tag) ? 'minus' : 'plus'}`}></i>
        </button>
    ));


    useEffect(() => {
        if(activeTag){
            dispatch(filterNews(activeTag))
        }else{
            dispatch(clearNewsFilter())
        }
    }, [activeTag])

    return (
        <div className="w-[80%] flex tracking-widest mx-auto justify-between pb-20 mt-40
        flex-col text-center gap-10
        md:flex-row md:text-left md:gap-0
        ">
            <p className="uppercase text-white 
            text-xl w-full
            md:w-[20%] md:text-base
            ">tags</p>
            <div className="flex flex-wrap gap-2
            w-full
            md:w-[80%]
            ">{renderedTags}</div>
        </div>
    );
};

export default NewsTags;
