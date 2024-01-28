import NewsHeader from "../newspage/NewsHeader";
import NewsSlidingText from "../newspage/NewsSlidingText";
import NewsSubHeader from "../newspage/NewsSubHeader";
import NewsTags from "../newspage/NewsTags";




const NewsPage:React.FC = () => {
    return (
        <div className="bg-slate-950 min-h-[100vh] overflow-x-hidden">
            <NewsHeader />
            <NewsSubHeader />
            <NewsSlidingText />
            <NewsTags />
        </div>
    );
}
 
export default NewsPage;