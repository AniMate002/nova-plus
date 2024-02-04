import coworking from '../../images/AboutUs/coworking.jpg'



const AboutUsExperience:React.FC = () => {
    return (
        <div className="min-h-[100vh] w-[80%] mx-auto max-w-[1500px]
        py-10
        md:py-40
        ">
            <h1 className="aboutus--experience--title--trigger text-white uppercase font-bold relative opacity-0
            text-xl
            md:text-4xl
            lg:text-5xl
            2xl:text-[70px]
            ">A Decade of Innovation and Excellence in Gaming by NovaPlus <i className="fa-solid fa-star absolute rotate-45 text-violet-500"></i></h1>
            <div className=' flex justify-between 
            flex-col gap-4
            md:flex-row md:gap-0
            '>
                <div className="text-slate-400 aboutus--experience--text--trigger relative left-[-10%] opacity-0
                w-full
                md:w-[60%]
                ">
                    <p className="text-white my-4">For the past ten years, NovaPlus has been on an unparalleled journey in the gaming industry, evolving and thriving in an ever-shifting landscape.</p>
                    <p>As a company with a decade of experience, NovaPlus stands as a seasoned trailblazer, marked by a continuous commitment to innovation, technological prowess, and an unwavering dedication to delivering exceptional gaming experiences.</p>
                    <p>This extensive journey has not only seen NovaPlus weather challenges but emerge stronger, armed with a wealth of insights, wisdom, and a deep understanding of the gaming community. The company's ability to anticipate trends, adapt swiftly, and consistently deliver games that captivate audiences is a testament to the invaluable experience gained over the years.</p>
                </div>
                
                <div className='relative w-[40%] text-center'>
                    <i className="aboutus--experience--star--trigger opacity-0 scale-0 fa-solid fa-certificate text-violet-600 text-[150px] relative purple--text--shadow">
                        <p className='absolute text-white text-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>10 Years of experience</p>
                    </i>
                </div>

            </div>
            <img src={coworking} alt='image of working people' className='aboutus--experience--image--trigger mt-10 rounded-lg relative'/>
            <div className='aboutus--experience--line1--trigger left-[-10%] opacity-0 w-[50%] bg-violet-700 relative rounded-r-md
            h-[30px] mt-[-20px]
            md:h-[50px] md:mt-[-40px]
            '></div>
            <div className='aboutus--experience--line2--trigger left-[-10%] opacity-0 w-[40%] bg-white mt-[-15px] relative rounded-r-lg
            h-[30px]
            md:h-[50px]
            '></div>
            <div className='aboutus--experience--line3--trigger left-[-10%] opacity-0 w-[30%] bg-slate-700 mt-[-15px] relative rounded-r-xl
            h-[30px]
            md:h-[50px]
            '></div>
        </div>
    );
}
 
export default AboutUsExperience;