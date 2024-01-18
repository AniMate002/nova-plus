import Border from "../Overlay/Border";
import Header from "../Overlay/Header";
import BreakThroughLimits from "../mainpage/BreakThroughLimits";


const MainPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] overflow-hidden">
            <Border />
            <Header />
            <div className="min-h-[1000px] first--trigger  bg-black">
                <BreakThroughLimits />
            </div>
            <div className="second--block min-h-[1000px] bg-red-400">

            </div>
            <div className="min-h-[1000px] bg-blue-400">

            </div>
        </div>
    );
}
 
export default MainPage;