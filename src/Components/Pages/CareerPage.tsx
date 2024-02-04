import { useEffect } from "react";
import CareerBenefits from "../careerpage/CareerBenefits";
import CareerContactUs from "../careerpage/CareerContactUs";
import CareedHeader from "../careerpage/CareerHeader";
import CareerJobs from "../careerpage/CareerJobs";
import CareerMeetings from "../careerpage/CareerMeetings";
import CareerStages from "../careerpage/CareerStages";



const CareerPage:React.FC = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    return (
        <div className="min-h-[100vh] bg-gradient-to-br  from-violet-900  to-slate-950 overflow-x-hidden">
            <CareedHeader />
            <CareerBenefits />
            <CareerMeetings />
            <CareerJobs />
            <CareerStages />
            <CareerContactUs />
        </div>
    );
}
 
export default CareerPage;