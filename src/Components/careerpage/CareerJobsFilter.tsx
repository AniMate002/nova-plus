import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { filterJobs, resetJobsFilter } from "../../redux/jobsReducer";




const CareerJobsFilter:React.FC = () => {
    const { locations } = useAppSelector(state => state.jobs)
    const dispatch = useAppDispatch()
    const renderedLocations = locations.map(location => {
        return (
            <button onClick={e => setJobsFilter(location)} key={location} className="text-sm hover:text-white transition-all">{location}</button>
        )
    })

    function setJobsFilter(location: string){
        dispatch(location ? filterJobs(location) : resetJobsFilter())
    }

    return (
        <div className="w-[20%] text-slate-500  flex-col gap-6 items-end
        hidden
        lg:flex
        ">
            <h4 className="font-bold">Select location</h4>
            <button onClick={e => setJobsFilter('')} className="text-sm hover:text-white transition-all">All locations</button>
            {renderedLocations}
        </div>
    );
}
 
export default CareerJobsFilter;