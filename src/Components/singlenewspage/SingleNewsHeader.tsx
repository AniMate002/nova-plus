import { Link } from "react-router-dom";
import { newsI } from "../../redux/newsReducer";


interface SingleNewsHeaderI extends newsI {}

const SingleNewsHeader:React.FC<SingleNewsHeaderI> = ({title, tags, year, date}) => {
    const renderedTags = tags.map(tag => <p className="text-white underline">{tag}</p>)
    const renderSocialNetworkIcon = (className: string, link: string) => <Link to={link} target="_blank" className={`${className} rounded-full flex items-center justify-center bg-violet-400 text-white
    w-[30px] h-[30px]
    md:w-[50px] md:h-[50px]
    lg:w-[35px] lg:h-[35px]
    xl:w-[50px] xl:h-[50px]
    `}></Link>
    return (
        <div className="mx-auto  flex justify-between pb-48
        w-[90%] flex-col pt-28
        md:w-[50%] md:pt-40
        lg:flex-row
        ">
            <div className="
            w-full
            lg:w-[60%]
            ">
                <div className="flex gap-4 cursor-default items-end
                text-[10px] mb-4
                md:text-[11px] md:mb-4
                lg:text-sm lg:mb-0
                ">
                    {renderedTags}
                </div>
                <h3 className="font-bold uppercase text-white
                text-xl mb-10
                min-[500px]:text-3xl
                md:text-4xl md:mb-0
                lg:text-6xl lg:mb-0
                ">{title}</h3>
            </div>
            <div className="relative
            w-full
            lg:w-[22%]
            ">
                <div className="flex w-full
                justify-start gap-2
                lg:justify-between lg:gap-0
                ">
                    {renderSocialNetworkIcon('fa-brands fa-x-twitter', '/')}
                    {renderSocialNetworkIcon('fa-brands fa-github', 'https://github.com/AniMate002')}
                    {renderSocialNetworkIcon('fa-brands fa-linkedin-in', 'https://www.linkedin.com/in/kirill-shauchenka-356802296/')}
                </div>
            </div>
        </div>
    );
}
 
export default SingleNewsHeader;