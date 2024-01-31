import AboutUsExperience from "../aboutuspage/AboutUsExperience";
import AboutUsGames from "../aboutuspage/AboutUsGames";
import AboutUsHeader from "../aboutuspage/AboutUsHeader";



const AboutUsPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] bg-slate-900">
            <AboutUsHeader />
            <AboutUsGames />
            <AboutUsExperience />
        </div>
    );
}
 
export default AboutUsPage;