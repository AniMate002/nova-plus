import { Link } from "react-router-dom";


const SocialNetworks:React.FC = () => {
    return (
        <div className="social--neworks flex fixed flex-col z-50 text-white text-md left-5 top-[50%] gap-3">
            <Link to={'https://github.com/AniMate002'} target="_blank">
                <i className="fa-brands fa-github"></i>
            </Link>
            <Link to={'https://www.linkedin.com/in/kirill-shauchenka-356802296/'} target="_blank">
            <i className="fa-brands fa-linkedin-in"></i>
            </Link>
            <Link to={'https://vk.com/soda_lakerino'} target="_blank">
                <i className="fa-brands fa-vk"></i>
            </Link>
            <Link to={'/'} target="_blank">
                <i className="fa-brands fa-x-twitter"></i>
            </Link>
        </div>
    );
}
 
export default SocialNetworks;