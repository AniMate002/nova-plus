import LeftSection from "./LeftSection";
import SwiperQuotes from "./SwiperQuotes";



const WordAboutUs:React.FC = () => {
    return (
        <div className="flex pt-40  items-center
        flex-col px-10 gap-10
        lg:flex-row lg:ml-40 lg:px-0 lg:gap-48
        ">
            <LeftSection />
            <SwiperQuotes />
        </div>
    );
}
 
export default WordAboutUs;