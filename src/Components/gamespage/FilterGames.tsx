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
            <button onClick={() => setActiveTag(compareTags(tag) ? "" : tag)} className={` ${setTextColor(tag)} border-[1px] bg-${setBg(tag)} font-semibold rounded-full px-2 py-1 text-md hover:bg-white hover:text-violet-800 flex items-center gap-2`}>
                {tag}{compareTags(tag) ? <i className="fa-solid fa-xmark"></i> : ''}
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
        <div className="w-[90%] mx-auto mt-48 flex justify-between">
            <h3 className="text-white font-bold  text-6xl">all games</h3>
            <div className="flex items-center justify-end w-[50%] ml-auto flex-wrap gap-2">
                {renderedTags}
            </div>
        </div>
    );
}
 
export default FilterGames;