import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";


const MainPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Border />
            <Header />
            <div className="h-[100vh] first--trigger  bg-black">
                <BreakThroughLimits />
            </div>
            <div className="second--block min-h-[1000px] bg-red-400 text-white">
                frhgrj
            </div>
            <div className="min-h-[1000px] bg-blue-400 text-white">
nhgfd
            </div>
        </div>
    );
}
 
export default MainPage;