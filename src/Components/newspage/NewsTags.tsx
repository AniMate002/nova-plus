import { useState } from "react";
import { useAppSelector } from "../../redux/hook";

const NewsTags: React.FC = () => {
    const { newsTags } = useAppSelector((state) => state.news);
    const [activeTag, setActiveTag] = useState<string | undefined>();
    
    const compareTags = (tag: string): boolean => activeTag === tag;

    const renderedTags = newsTags.map((tag) => (
        <button
            key={tag}
            onClick={() => setActiveTag(compareTags(tag) ? undefined : tag)}
            className={`bg-${compareTags(tag) ? 'white' : 'transparent'} ${compareTags(tag) ? 'text-black' : 'text-white'} py-4 px-4 border-2 border-violet-800 rounded-full text-sm ${compareTags(tag) ? '' : 'hover:bg-slate-700'} transition-all`}
        >
            {tag} <i className={`fa-solid fa-${compareTags(tag) ? 'minus' : 'plus'}`}></i>
        </button>
    ));

    return (
        <div className="w-[60%] flex tracking-widest mx-auto justify-between pb-20 mt-40">
            <p className="uppercase text-white w-[20%]">tags</p>
            <div className="w-[80%] flex flex-wrap">{renderedTags}</div>
        </div>
    );
};

export default NewsTags;
