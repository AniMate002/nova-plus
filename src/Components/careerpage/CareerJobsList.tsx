import { useAppSelector } from "../../redux/hook";
import { jobsType } from "../../redux/jobsReducer";



const CareerJobsList:React.FC = () => {
    const { jobs, filteredJobs } = useAppSelector(state => state.jobs)
    function getRenderedJobs (jobsToRender: jobsType){
        return jobsToRender.map(job => {
            return ( 
                <div className="w-full" key={job.id}>
                    <div className="w-full flex justify-between px-10 py-4">
                        <div>
                            <h5 className="font-bold text-md">{job.position} <span className="px-2 py-1 bg-slate-700 text-[10px] rounded-lg">{job.type}</span></h5>
                            <p className="text-sm underline">{job.location}</p>
                        </div>
                        <button className="bg-violet-700 text-white px-8 py-0 rounded-full text-[12px] hover:bg-violet-800 transition-all">Apply now</button>
                    </div>
                    <div className="h-[2px] w-full bg-slate-800"></div>
                </div>
            )
        })
    }
    return (
        <div className="w-[70%]">
            {getRenderedJobs(filteredJobs.length === 0 ? jobs : filteredJobs)}
        </div>
    );
}
 
export default CareerJobsList;