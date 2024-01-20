import LeftSection from "./LeftSection";
import SwiperQuotes from "./SwiperQuotes";



const WordAboutUs:React.FC = () => {
    return (
        <div className="flex flex-row ml-40 pt-40 gap-48 items-center">
            <LeftSection />
            <SwiperQuotes />
        </div>
    );
}
 
export default WordAboutUs;