import AboutUsGamesSwiper from "./AboutUsGamesSwiper";



const AboutUsGames:React.FC = () => {
    return (
        <div className="flex py-20 justify-around w-[95%] mx-auto items-center min-h-[100vh] max-w-[1600px]
        flex-col
        lg:hidden
        ">
            <div className="
            w-[80%]
            lg:w-[40%]
            xl:w-[30%]
            ">
                <h2 className="text-white uppercase Haptik 
                text-6xl mb-4
                md:text-[160px] md:mb-0
                "><span className="bg-violet-600 rounded-xl px-2 purple--shadow">Our</span> <span className="text-violet-600
                lg:text-[120px]
                ">pride</span></h2>
                <p className="text-slate-300 
                text-sm pb-10
                lg:text-md md:mb-0
                ">
                    NovaPlus forges its games through an innovative blend of creativity, cutting-edge technology, and a commitment to pushing boundaries. Beginning with conceptualization, the team crafts compelling narratives and meticulously designs gameplay mechanics. Prototyping refines core elements, leading to the development phase where coding and collaboration bring the vision to life.
                </p>
            </div>
            <div className="
            w-[100%]
            md:w-[70%]
            lg:w-[50%]
            ">
                <AboutUsGamesSwiper />
            </div>
        </div>
    );
}
 
export default AboutUsGames;