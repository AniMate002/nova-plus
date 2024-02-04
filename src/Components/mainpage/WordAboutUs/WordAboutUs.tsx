import LeftSection from "./LeftSection";
import SwiperQuotes from "./SwiperQuotes";



const WordAboutUs:React.FC = () => {
    return (
        <div className="flex pt-40  items-center max-w-[1500px] min-[1700px]:mx-auto
        flex-col w-[90%] gap-10 mx-auto
        lg:flex-row lg:justify-between lg:gap-20 lg:ml-auto
        ">
            <LeftSection />
            <SwiperQuotes />
        </div>
    );
}
 
export default WordAboutUs;