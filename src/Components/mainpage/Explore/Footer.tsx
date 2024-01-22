import SocialNetworkIcon from "./SocialNetworkIcon";




const Footer:React.FC = () => {
    return (
        <footer className="mx-auto w-[56%] pb-[100px] mt-[150px] flex items-center justify-between">
                <h4 className="makeNunito w-[33%]">Made by Kiryl Shauchenka</h4>
                <div className="flex items-center justify-center gap-4 w-[33%]">
                    <SocialNetworkIcon iconClass="fa-brands fa-github" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-linkedin-in" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-vk" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-x-twitter" link="https://github.com/AniMate002"/>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-white text-5xl w-[33%] flex justify-end hover:text-violet-800 cursor-pointer transition-all"></i>
        </footer>
    );
}
 
export default Footer;