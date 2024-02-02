import bgSponsors from '../../images/sponsors/sponsors.png'
import SponsorsSwiper from './SponsorsSwiper';


const AboutUsSponsors:React.FC = () => {
    return (
        <div className="min-h-[100vh] pb-10">
            <div className=' mx-auto flex justify-center max-w-[1500px]
            flex-col w-[80%] pt-10
            md:pt-16
            xl:flex-row xl:w-[90%] xl:pt-20
            '>
                <div className=' overflow-hidden relative max-h-[700px]
                w-full h-auto rounded-t-2xl
                xl:w-[50%] xl:h-[80vh] xl:rounded-l-2xl xl:rounded-tr-none
                '>
                    <img src={bgSponsors} alt={bgSponsors} className='h-full w-full'/>
                    <h2 className="text-white uppercase font-bold py-20 tracking-widest absolute left-1/2 bottom-0 translate-x-[-50%]
                    text-4xl
                    md:text-7xl
                    ">our sponsors</h2>
                </div>
                <div className='bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-around
                w-full rounded-b-2xl pb-10
                xl:w-[50%] xl:rounded-r-2xl xl:pb-0 xl:rounded-bl-none
                '>
                    <SponsorsSwiper key={111} start={0} end={4} title={"Gold sponsors"}/>
                    <SponsorsSwiper key={222} start={4} end={10} title={"Silver sponsors"}/>
                    <SponsorsSwiper key={333} start={10} end={16} title={"Bronze sponsors"}/>

                </div>
            </div>
        </div>
    );
}
 
export default AboutUsSponsors;