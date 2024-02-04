import { gsap } from "gsap";
import worldMap from '../../../images/worldMap3.png'
import { useEffect } from "react";
import { useAppSelector } from "../../../redux/hook";
import CityCard from "./CityCard";


const WorldMap:React.FC = () => {
    const { cities } = useAppSelector(state => state.worldMap)

    useEffect(() => {
        const timeLine = gsap.timeline({
            repeat: -1
        })
        timeLine.to('.fading--spot',{
            scale: 1.2
        })
    }, [])

    const renderedCities = cities.map(city => {
        return <CityCard key={city.name} {...city}/>
    })

    return (
        <div className='pt-52 relative pb-[800px] max-w-[1500px] mx-auto'>
            {/* <h3 className='uppercase text-white font-bold Haptik block w-[80%] mx-auto mb-4
            text-sm
            lg:text-4xl
            '>nova plus</h3> */}
            <div className="block w-[80%] mx-auto select-none">
                <div className='world--map--1 text-end scale-0 relative z-30'>
                    <p className='uppercase Haptik  text-violet-500 font-bold
                    text-sm
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    '>Our</p>
                    <p className='uppercase Haptik  text-white font-bold relative z-20 leading-10 left-[-30%]
                    text-md top-[-10px]
                    sm:text-3xl
                    md:text-6xl
                    lg:text-9xl lg:top-0
                    '>offices</p>
                </div>
                <div className='world--map--2 scale-0 block mx-auto  ml-[27%]
                mt-0
                sm:mt-20
                md:mt-24
                lg:mt-24
                '>
                    <p className='uppercase Haptik  text-violet-500 font-bold
                    text-sm
                    lg:text-6xl
                    '>around</p>
                    <p className='uppercase Haptik  text-white font-bold
                    text-8xl
                    lg:text-6xl
                    '>the</p>
                </div>
                <p className="world--map--3 scale-0 text-white uppercase font-bold  text-end mr-48
                text-6xl
                lg:text-8xl
                ">world</p>
            </div>
            <div className='world--map--4 scale-0 w-[80%] absolute left-[50%] translate-x-[-50%] z-10
            top-[160px]
            lg:top-0
            '>
                <img src={worldMap} alt={worldMap} className='  w-full h-full relative z-20' />
                { renderedCities }
            </div>
        </div>
    );
}
 
export default WorldMap;