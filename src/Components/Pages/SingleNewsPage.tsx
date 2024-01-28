import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { findSingleNews } from "../../redux/newsReducer";
import SingleNewsHeader from "../singlenewspage/SingleNewsHeader";
import SingleNewsContent from "../singlenewspage/SingleNewsContent";


const SingleNewsPage:React.FC = () => {
    const { newsId } = useParams()
    const dispatch = useAppDispatch()   
    const { singleNews } = useAppSelector(state => state.news)

    useEffect(() => {
        dispatch(findSingleNews(newsId))
    }, [dispatch, newsId])

    return (
        <div className="bg-slate-900 min-h-[100vh]">
            {singleNews ? 
            <>
                <SingleNewsHeader {...singleNews}/>
                <SingleNewsContent {...singleNews}/>
            </>
            :
            <h1 className="text-center pt-40">This article was not found</h1>
            }
        </div>
    );
}
 
export default SingleNewsPage;