import { useAppSelector } from "../../redux/hook";
import AboutUsSingleEmployee from "./AboutUsSingleEmployee";



const AboutUsTeam:React.FC = () => {
    const { team } = useAppSelector(state => state.team)
    const renderedTeam = team.map(employee => {
        return <AboutUsSingleEmployee {...employee} key={employee.id} />
    })
    return (
        <div className="min-w-[100vh] py-40">
            <div>
                <div className="w-full h-[100px] bg-violet-800"></div>
                <h1 className="text-white text-7xl uppercase font-bold mt-[-50px] text-center">Our crew</h1>
            </div>
            <div className="w-[40%] mx-auto mt-20">
                <h3 className="Haptik text-center text-white text-2xl">Our team of Professional</h3>
                <p className="text-center mt-4 text-slate-400 Haptik">NovaPlus boasts a dynamic and passionate team, where creativity intertwines with expertise, driving the company's success and cementing its position as a leader in the gaming industry.</p>
            </div>
            <div className="w-[80%] mx-auto flex justify-between mt-20">
                {renderedTeam}
            </div>
        </div>
    );
}
 
export default AboutUsTeam;