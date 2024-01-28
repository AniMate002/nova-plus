import { useAppSelector } from "../../redux/hook";
import { allNewsType } from "../../redux/newsReducer";
import SingleNewsItem from "./SingleNewsItem";





const NewsList:React.FC = () => {
    const { news, filteredNews } = useAppSelector(state => state.news)

    function getRenderedNews (newsToRender: allNewsType){
        return newsToRender.map((item, index) => {
            return (
                <SingleNewsItem key={item.title} {...item} type={index % 2 === 0 ? 'big' : 'small'}/>
            )
        })
    }
    return (
        <div className="w-[60%] flex tracking-widest mx-auto justify-between pb-20 mt-20 text-white">
            <p className="uppercase text-white w-[20%]">the latest</p>
            <div className="w-[80%] flex flex-col gap-20">
                {getRenderedNews(filteredNews.length ? filteredNews : news)}
            </div>
        </div>
    );
}
 
export default NewsList;