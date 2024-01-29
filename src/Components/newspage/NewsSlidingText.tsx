import { useEffect } from "react";
import { createNewsTextAnimation } from "../../animation/Animation";



const NewsSlidingText:React.FC = () => {

    useEffect(() => {
        const timeLine = createNewsTextAnimation()
        timeLine.to('.news--sliding--text', {
            left: '-100%',
            duration: 2
        })
    })

    return (
        <p className="news--sliding--text Haptik text-white font-bold mt-20 left-[50%] relative
        text-[200px]
        md:text-[300px]
        ">news</p>
    );
}
 
export default NewsSlidingText;