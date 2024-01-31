import AboutUsExperience from "../aboutuspage/AboutUsExperience";
import AboutUsGames from "../aboutuspage/AboutUsGames";
import AboutUsHeader from "../aboutuspage/AboutUsHeader";
import AboutUsSponsors from "../aboutuspage/AboutUsSponsors";
import AboutUsTeam from "../aboutuspage/AboutUsTeam";



const AboutUsPage:React.FC = () => {
    return (
        <div className="min-h-[100vh] bg-slate-900">
            <AboutUsHeader />
            <AboutUsGames />
            <AboutUsExperience />
            <AboutUsTeam />
            <AboutUsSponsors />
        </div>
    );
}
 
export default AboutUsPage;