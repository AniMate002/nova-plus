import { cardI } from "../../redux/gamesReducer";
import { getRenderedPlatforms, getRenderedTags } from "./GamesSwiper";


interface SingleGameCardI extends cardI {}

const SingleGameCard:React.FC<SingleGameCardI> = ({image, title, tags, platforms}) => {
    return (
        <div className="h-[800px] relative overflow-hidden rounded-2xl hover:translate-x-[10px] hover:translate-y-[-10px] transition-all opacity-[0.7] hover:opacity-[1]">
            <img src={image} alt={image} className="h-full translate-x-[-30%] min-w-max"/>
            <div className="absolute w-full h-full p-10 top-0 left-0">
                <p className="text-white text-center uppercase font-bold text-4xl">{title}</p>
                <div className="absolute bottom-10 ">
                    <div className="flex gap-4 ml-4 mb-4">
                        {platforms.map(platform => {
                            return <p className='text-white text-md font-semibold'><i className={platform}></i></p>
                        })}
                    </div>
                    <div className="flex gap-4 flex-wrap">
                        {
                            tags.map((tag: string) => {
                                return (
                                    <p className='text-white bg-transparent border-[1px] border-white px-2 py-1 rounded-full uppercase text-[10px]'>{tag}</p>
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