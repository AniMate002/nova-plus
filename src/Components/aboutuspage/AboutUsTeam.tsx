import { useAppSelector } from "../../redux/hook";
import AboutUsSingleEmployee from "./AboutUsSingleEmployee";



const AboutUsTeam:React.FC = () => {
    const { team } = useAppSelector(state => state.team)
    const renderedTeam = team.map(employee => {
        return <AboutUsSingleEmployee {...employee} key={employee.id} />
    })
    return (
        <div className="min-h-[100vh] py-40">
            <div>
                <div className="w-full h-[100px] bg-violet-800"></div>
                <h1 className="text-white uppercase font-bold mt-[-50px] text-center
                text-4xl
                sm:text-7xl
                ">Our crew</h1>
            </div>
            <div className="mx-auto mt-20
            w-[80%]
            md:w-[40%]
            ">
                <h3 className="Haptik text-center text-white text-2xl">Our team of Professional</h3>
                <p className="text-center mt-4 text-slate-400 Haptik
                text-sm
                sm:text-base
                ">NovaPlus boasts a dynamic and passionate team, where creativity intertwines with expertise, driving the company's success and cementing its position as a leader in the gaming industry.</p>
            </div>
            <div className="w-[80%] mx-auto flex justify-between mt-20 items-center flex-wrap max-w-[1500px]
            gap-10 flex-col
            2xl:gap-0 sm:flex-row
            ">
                {renderedTeam}
            </div>
        </div>
    );
}
 
export default AboutUsTeam;