import coworking from '../../images/AboutUs/coworking.jpg'



const AboutUsExperience:React.FC = () => {
    return (
        <div className="min-h-[100vh] w-[80%] mx-auto py-40">
            <h1 className="text-white uppercase text-[70px] font-bold relative">A Decade of Innovation and Excellence in Gaming by NovaPlus <i className="fa-solid fa-star absolute rotate-45 text-violet-500"></i></h1>
            <div className='flex justify-between'>
                <div className="w-[60%] text-slate-400">
                    <p className="text-white my-4">For the past ten years, NovaPlus has been on an unparalleled journey in the gaming industry, evolving and thriving in an ever-shifting landscape.</p>
                    <p>As a company with a decade of experience, NovaPlus stands as a seasoned trailblazer, marked by a continuous commitment to innovation, technological prowess, and an unwavering dedication to delivering exceptional gaming experiences.</p>
                    <p>This extensive journey has not only seen NovaPlus weather challenges but emerge stronger, armed with a wealth of insights, wisdom, and a deep understanding of the gaming community. The company's ability to anticipate trends, adapt swiftly, and consistently deliver games that captivate audiences is a testament to the invaluable experience gained over the years.</p>
                </div>
                
                <div className='relative w-[40%] text-center'>
                    <i className="fa-solid fa-certificate text-violet-600 text-[150px] relative rotate-[-30deg] purple--text--shadow">
                        <p className='absolute text-white text-sm top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>10 Years of experience</p>
                    </i>
                </div>

            </div>
            <img src={coworking} alt='image of working people' className='mt-10 rounded-lg relative'/>
            <div className='w-[50%] h-[50px] bg-violet-700 mt-[-40px] relative rounded-r-md'></div>
            <div className='w-[40%] h-[50px] bg-white mt-[-15px] relative rounded-r-lg'></div>
            <div className='w-[30%] h-[50px] bg-slate-700 mt-[-15px] relative rounded-r-xl'></div>
        </div>
    );
}
 
export default AboutUsExperience;