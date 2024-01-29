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
        <div className="w-[60%] flex tracking-widest mx-auto justify-between pb-20 mt-20 text-white
        flex-col
        md:flex-row
        ">
            <p className="uppercase text-white 
            
            w-full text-center mb-10
            md:w-[20%] md:text-left md:mb-0
            ">the latest</p>
            <div className=" flex flex-col 
            w-full gap-30
            md:w-[80%] md:gap-20
            ">
                {getRenderedNews(filteredNews.length ? filteredNews : news)}
            </div>
        </div>
    );
}
 
export default NewsList;