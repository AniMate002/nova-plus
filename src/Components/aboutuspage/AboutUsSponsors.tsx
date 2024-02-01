import bgSponsors from '../../images/sponsors/sponsors.png'
import SponsorsSwiper from './SponsorsSwiper';


const AboutUsSponsors:React.FC = () => {
    return (
        <div className="min-h-[100vh] pt-32 pb-10">
            <div className='w-[90%] mx-auto flex justify-between'>
                <div className='w-[50%] h-[80vh] overflow-hidden rounded-l-2xl relative'>
                    <img src={bgSponsors} alt={bgSponsors} className='h-full'/>
                    <h2 className="text-white uppercase text-7xl font-bold py-20 tracking-widest absolute left-1/2 bottom-0 translate-x-[-50%]">our sponsors</h2>
                </div>
                <div className='w-[50%] bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col justify-around rounded-r-2xl'>
                    <SponsorsSwiper key={111} start={0} end={4} title={"Gold sponsors"}/>
                    <SponsorsSwiper key={222} start={4} end={10} title={"Silver sponsors"}/>
                    <SponsorsSwiper key={333} start={10} end={16} title={"Bronze sponsors"}/>

                </div>
            </div>
        </div>
    );
}
 
export default AboutUsSponsors;