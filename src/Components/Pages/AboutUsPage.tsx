import { useEffect } from "react";
import AboutUsExperience from "../aboutuspage/AboutUsExperience";
import AboutUsGames from "../aboutuspage/AboutUsGames";
import AboutUsHeader from "../aboutuspage/AboutUsHeader";
import OverviewGames from "../aboutuspage/AboutUsOverview/OverviewGames";
import OverviewImages from "../aboutuspage/AboutUsOverview/OverviewImages";
import AboutUsTeam from "../aboutuspage/AboutUsTeam";
import { addAnimationsToAboutUs } from "../../animation/pagesAnimations/aboutUsPageAnimations";
import AboutUsSponsors from "../aboutuspage/AboutUsSponsors";



const AboutUsPage:React.FC = () => {
    useEffect(() => {
        addAnimationsToAboutUs()
        window.scrollTo(0,0)
    }, [])


    return (
        <div className="min-h-[100vh] bg-gradient-to-tl from-violet-800 to-slate-900 overflow-x-hidden">
            <AboutUsHeader />
            <AboutUsGames />
            <OverviewImages />
            <OverviewGames />
            <AboutUsExperience />
            <AboutUsTeam />
            <AboutUsSponsors />
        </div>
    );
}
 
export default AboutUsPage;