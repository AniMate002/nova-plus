import { cardI } from "../../redux/gamesReducer";
import { getRenderedPlatforms, getRenderedTags } from "./GamesSwiper";


interface SingleGameCardI extends cardI {}

const SingleGameCard:React.FC<SingleGameCardI> = ({image, title, tags, platforms}) => {
    return (
        <div className=" max-w-[600px] relative overflow-hidden rounded-2xl sm:hover:translate-x-[10px] sm:hover:translate-y-[-10px] transition-all opacity-[0.7] hover:opacity-[1]
        h-[500px]
        sm:h-[500px]
        md:h-[600px]
        lg:h-[500px]
        xl:h-[800px]
        ">
            <img src={image} alt={image} className="h-full translate-x-[-30%] min-w-max"/>
            <div className="absolute w-full h-full  top-0 left-0
            p-2
            sm:p-10
            ">
                <p className="text-white text-center uppercase font-bold 
                text-xl mt-10
                sm:text-4xl sm:mt-0
                ">{title}</p>
                <div className="absolute 
                bottom-6
                sm:bottom-10
                ">
                    <div className="flex gap-4 mb-4
                    ml-4
                    sm:ml-1
                    md:ml-4
                    ">
                        {platforms.map(platform => {
                            return <p key={platform+"gameCard"} className='text-white text-md font-semibold'><i className={platform}></i></p>
                        })}
                    </div>
                    <div className="flex  flex-wrap
                    gap-1
                    sm:gap-2
                    md:gap-4

                    ">
                        {
                            tags.map((tag: string) => {
                                return (
                                    <p key={tag+"gameCard"} className='text-white bg-transparent border-[1px] border-white px-2 py-1 rounded-full uppercase 
                                    text-[10px]
                                    sm:text-[8px]
                                    md:text-[10px]
                                    '>{tag}</p>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default SingleGameCard;