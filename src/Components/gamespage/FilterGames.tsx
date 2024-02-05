import { useEffect, useState } from "react";
import { clearGamesFilter, filterGames } from "../../redux/gamesReducer";
import { useAppDispatch, useAppSelector } from "../../redux/hook";



const FilterGames:React.FC = () => {
    const { tags } = useAppSelector(state => state.games)
    const [activeTag, setActiveTag] = useState<string>()
    const dispatch = useAppDispatch()
    const compareTags = (tag:string):boolean => tag === activeTag
    const renderedTags = tags.slice(0, 11).map(tag => {
        return (
            <button key={tag} onClick={() => setActiveTag(compareTags(tag) ? "" : tag)} className={` ${setTextColor(tag)} border-[1px] bg-${setBg(tag)} font-semibold rounded-full px-2 py-1  hover:bg-white hover:text-violet-800 flex items-center gap-2
            text-[8px]
            sm:text-md
            lg:text-sm
            `}>
                {tag} <i className={`fa-solid fa-${compareTags(tag) ? 'minus' : 'plus'}`}></i>
            </button>
        )
    })

    useEffect(() => {
        if(activeTag !== '')
            dispatch(filterGames(activeTag))
        else
            dispatch(clearGamesFilter())
    }, [activeTag])

    function setBg (tag: string):string{
        const currBg = compareTags(tag) ? 'white' : 'transparent'
        return currBg
    }

    function setTextColor (tag: string):string{
        const currColor = compareTags(tag) ? 'text-violet-700' : 'text-white'
        return currColor
    }

    return (
        <div className="w-[90%] mx-auto  flex justify-between
        flex-col mt-28 gap-4
        sm:flex-row sm:mt-48 sm:gap-0
        ">
            <h3 className="text-white font-bold  
            text-xl
            sm:text-4xl
            md:text-6xl
            ">all games</h3>
            <div className="flex items-center  ml-auto flex-wrap gap-2
            w-full justify-start
            sm:w-[50%] sm:justify-end
            ">
                {renderedTags}
            </div>
        </div>
    );
}
 
export default FilterGames;