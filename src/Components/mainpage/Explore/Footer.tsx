import SocialNetworkIcon from "./SocialNetworkIcon";




const Footer:React.FC = () => {
    return (
        <footer className="mx-auto  pb-[100px]  flex items-center justify-between
        flex-col mt-[50px] gap-4 w-[75%]
        sm:flex-row sm:mt-[150px] sm:gap-0 lg:w-[46%]
        ">
                <h4 className="makeNunito 
                text-center w-full text-sm
                sm:text-left sm:w-[33%]
                md:text-base
                ">Made by Kiryl Shauchenka</h4>
                <div className="flex items-center justify-center gap-4
                w-full
                sm:w-[33%]
                ">
                    <SocialNetworkIcon iconClass="fa-brands fa-github" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-linkedin-in" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-vk" link="https://github.com/AniMate002"/>
                    <SocialNetworkIcon iconClass="fa-brands fa-x-twitter" link="https://github.com/AniMate002"/>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-white  flex  hover:text-violet-800 cursor-pointer transition-all
                text-xl w-full justify-center
                sm:text-5xl sm:w-[33%] sm:justify-end
                "></i>
        </footer>
    );
}
 
export default Footer;