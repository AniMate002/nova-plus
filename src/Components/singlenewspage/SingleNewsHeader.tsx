import { Link } from "react-router-dom";
import { newsI } from "../../redux/newsReducer";


interface SingleNewsHeaderI extends newsI {}

const SingleNewsHeader:React.FC<SingleNewsHeaderI> = ({title, tags, year, date}) => {
    const renderedTags = tags.map(tag => <p className="text-white underline text-sm">{tag}</p>)
    const renderSocialNetworkIcon = (className: string, link: string) => <Link to={link} target="_blank" className={`${className} rounded-full w-[50px] h-[50px] flex items-center justify-center bg-violet-400 text-white`}></Link>
    return (
        <div className="w-[50%] mx-auto bg-slate-900 pt-40 flex justify-between pb-48">
            <div className="w-[60%]">
                <div className="flex gap-4 cursor-default">
                    {renderedTags}
                </div>
                <h3 className="text-6xl font-bold uppercase text-white">{title}</h3>
            </div>
            <div className="w-[22%] relative">
                <div className="flex justify-between w-full">
                    {renderSocialNetworkIcon('fa-brands fa-x-twitter', '/')}
                    {renderSocialNetworkIcon('fa-brands fa-github', 'https://github.com/AniMate002')}
                    {renderSocialNetworkIcon('fa-brands fa-linkedin-in', 'https://www.linkedin.com/in/kirill-shauchenka-356802296/')}
                </div>
            </div>
        </div>
    );
}
 
export default SingleNewsHeader;