import { useState } from "react";
import { useAppSelector } from "../../../redux/hook";
import SingleJob from "./SingleJob";
import { Link } from "react-router-dom";



const JoinUs:React.FC = () => {
    const [linkText, setLinkText] = useState<string>()
    const { jobs } = useAppSelector(state => state.jobs)

    const renderedJobs = jobs.map(job => {
        return <SingleJob key={job.location + job.position} {...job}/>
    })

    const mouseEnterHandler = ():void => {
        setLinkText("fa-solid fa-up-right-from-square")
    }

    const mouseLeaveHandler = ():void => {
        setLinkText('')
    }

    return (
        <div className=" flex justify-between w-[80%] mx-auto relative z-30 gap-10
        flex-col-reverse mt-[-500px]
        lg:flex-row lg:mt-[-400px]
        ">
            <div className="flex flex-col gap-10  flex-shrink-0
            w-full
            lg:w-[55%]
            ">
                <div className="flex items-center gap-10">
                    <p className="text-slate-700 font-semibold 
                    text-[13px]
                    sm:text-base
                    w-[10%]
                    min-[320px]:w-[20%]
                    sm:w-[40%]
                    ">Position</p>
                    <p className="text-slate-700 font-semibold w-[20%]
                    text-[13px]
                    sm:text-base
                    ">Location</p>
                    <p className="text-slate-700 font-semibold
                    text-[13px]
                    sm:text-base
                    w-[10%]
                    sm:w-[15%]
                    ">Type</p>
                    <p className="text-slate-700 font-semibold w-[5%]"></p>
                </div>
                <div className="block h-[1px] w-full bg-slate-700"></div>
                {renderedJobs}
            </div>
            <div>
                <h2 className="text-white  font-bold text-center uppercase
                text-5xl
                lg:text-8xl
                ">nova plus</h2>
                <div className="flex items-center mx-auto justify-center h-[2px] w-[50%] bg-slate-700 my-10"><i className="fa-solid fa-code text-center text-slate-300 text-xl"></i></div>
                <p className="text-center mb-4 text-slate-500
                text-sm
                lg:text-base
                ">Explore exciting career opportunities at NovaPlus, a leading game development company. Join us in shaping the future of gaming with innovative projects and a collaborative, growth-focused environment.</p>
                <Link to={'/'} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className={`${linkText} flex w-[100px] h-[100px] bg-violet-700 mx-auto rounded-full items-center justify-center hover:scale-[1.1] transition-all hover:bg-slate-800 hover:outline hover:outline-violet-800`}>
                    {linkText ? "" : "See more"}
                </Link>
            </div>
        </div>
    );
}
 
export default JoinUs;