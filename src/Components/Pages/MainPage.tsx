import Border from "../Overlay/Border";
import GoUpButton from "../Overlay/GoUpButtom";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";
import WeAre from "../mainpage/WeAre";


const MainPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Border />
            <Header />
            <div className="h-[100vh] first--trigger mainImage bg-black">
                <BreakThroughLimits />
            </div>
            <div className="second--block min-h-[100vh] bg-black">
                <WeAre />
            </div>
            <div className="min-h-[1000px] bg-blue-400 text-white">
                nhgfd
            </div>
        </div>
    );
}
 
export default MainPage;