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
        return <CityCard {...city}/>
    })

    return (
        <div className='pt-52 relative pb-[800px]'>
            <h3 className='uppercase text-white font-bold text-4xl Haptik block w-[80%] mx-auto mb-4'>nova plus</h3>
            <div className="block w-[80%] mx-auto select-none">
                <div className='world--map--1 text-end scale-0 relative z-30'>
                    <p className='uppercase Haptik text-7xl text-violet-500 font-bold'>Our</p>
                    <p className='uppercase Haptik text-9xl text-white font-bold relative z-20 leading-10'>offices</p>
                </div>
                <div className='world--map--2 scale-0 block mx-auto mt-40 ml-[27%]'>
                    <p className='uppercase Haptik text-6xl text-violet-500 font-bold'>around</p>
                    <p className='uppercase Haptik text-6xl text-white font-bold'>the</p>
                </div>
                <p className="world--map--3 scale-0 text-white uppercase font-bold text-8xl text-end mr-48">world</p>
            </div>
            <div className='world--map--4 scale-0 w-[80%] absolute top-0 left-[50%] translate-x-[-50%] z-10'>
                <img src={worldMap} alt={worldMap} className='  w-full h-full relative z-20' />
                { renderedCities }
            </div>
        </div>
    );
}
 
export default WorldMap;