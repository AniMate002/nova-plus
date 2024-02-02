import CareerJobsFilter from "./CareerJobsFilter";
import CareerJobsList from "./CareerJobsList";




const CareerJobs:React.FC = () => {
    return (
        <div className="text-white py-20">
            <h2 className="text-center uppercase font-bold text-[180px] tracking-tighter">join the band</h2>
            <div className="w-[80%] mx-auto flex justify-between">
                <CareerJobsFilter />
                <CareerJobsList />
            </div>
        </div>
    );
}
 
export default CareerJobs;