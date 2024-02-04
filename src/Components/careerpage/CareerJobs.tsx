import CareerJobsFilter from "./CareerJobsFilter";
import CareerJobsList from "./CareerJobsList";




const CareerJobs:React.FC = () => {
    return (
        <div className="text-white py-20 max-w-[1700px] mx-auto">
            <h2 className="text-center uppercase font-bold tracking-tighter
            text-5xl
            md:text-6xl
            xl:text-[150px]
            2xl:text-[180px]
            ">join the band</h2>
            <div className="w-[80%] mx-auto flex
            justify-center
            lg:justify-between
            ">
                <CareerJobsFilter />
                <CareerJobsList />
            </div>
        </div>
    );
}
 
export default CareerJobs;