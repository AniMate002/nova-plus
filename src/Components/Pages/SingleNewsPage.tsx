import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { useEffect } from "react";
import { findSingleNews } from "../../redux/newsReducer";
import SingleNewsHeader from "../singlenewspage/SingleNewsHeader";
import SingleNewsContent from "../singlenewspage/SingleNewsContent";
import SingleNewsSwiper from "../singlenewspage/SingleNewsSwiper";


const SingleNewsPage:React.FC = () => {
    const { newsId } = useParams()
    const dispatch = useAppDispatch()   
    const { singleNews } = useAppSelector(state => state.news)

    function scrollToTop(){
        document.documentElement.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        dispatch(findSingleNews(newsId))
    }, [dispatch, newsId])
    useEffect(() => {
        window.scrollTo(0,0)
        scrollToTop()
    })

    return (
        <div className="bg-gradient-to-tr from-slate-950 to-slate-800 min-h-[100vh] overflow-x-hidden">
            {singleNews ? 
            <>
                <SingleNewsHeader {...singleNews}/>
                <SingleNewsContent {...singleNews}/>
                <SingleNewsSwiper />
            </>
            :
            <h1 className="text-center pt-40">This article was not found</h1>
            }
        </div>
    );
}
 
export default SingleNewsPage;