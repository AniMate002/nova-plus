import { useAppSelector } from "../../redux/hook";
import { jobsType } from "../../redux/jobsReducer";



const CareerJobsList:React.FC = () => {
    const { jobs, filteredJobs } = useAppSelector(state => state.jobs)
    function getRenderedJobs (jobsToRender: jobsType){
        return jobsToRender.map(job => {
            return ( 
                <div className="w-full" key={job.id}>
                    <div className="w-full flex justify-between py-4
                    px-2 flex-col mt-10
                    lg:px-10 lg:flex-row lg:mt-0
                    ">
                        <div>
                            <h5 className="font-bold 
                            text-sm mb-2
                            sm:text-xl
                            lg:text-md lg:mb-0
                            ">{job.position} <span className="px-2 py-1 bg-slate-700 text-[10px] rounded-lg text-nowrap">{job.type}</span></h5>
                            <p className="text-sm underline">{job.location}</p>
                        </div>
                        <button className="bg-violet-700 text-white rounded-full hover:bg-violet-800 transition-all
                        px-1 text-[10px] mt-4 py-2
                        sm:py-2 sm:text-sm
                        lg:px-4 lg:text-[12px] lg:mt-0
                        ">Apply now</button>
                    </div>
                    <div className="h-[1px] w-full bg-slate-700"></div>
                </div>
            )
        })
    }
    return (
        <div className="
        lg:w-[70%]
        ">
            {getRenderedJobs(filteredJobs.length === 0 ? jobs : filteredJobs)}
        </div>
    );
}
 
export default CareerJobsList;