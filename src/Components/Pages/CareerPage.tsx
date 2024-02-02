import CareerBenefits from "../careerpage/CareerBenefits";
import CareedHeader from "../careerpage/CareerHeader";
import CareerJobs from "../careerpage/CareerJobs";
import CareerMeetings from "../careerpage/CareerMeetings";
import CareerStages from "../careerpage/CareerStages";



const CareerPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] bg-slate-900 overflow-x-hidden">
            <CareedHeader />
            <CareerBenefits />
            <CareerMeetings />
            <CareerJobs />
            <CareerStages />
        </div>
    );
}
 
export default CareerPage;