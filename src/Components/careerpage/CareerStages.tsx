import { Tilt } from "react-tilt";
import { useAppSelector } from "../../redux/hook";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';



const CareerStages:React.FC = () => {
    const { stages } = useAppSelector(state => state.jobs)
    const renderedStages = stages.map(stage => {
        return (
            <SwiperSlide key={stage.id} className=" bg-slate-800 rounded-xl
            py-4 px-4
            lg:py-10 lg:px-20
            ">
                <h2 className="text-slate-700 font-bold uppercase Haptik
                text-sm
                lg:text-2xl
                ">stage {stage.id}</h2>
                <h3 className="mt-10 uppercase font-bold text-white
                text-[12px]
                lg:text-4xl
                ">{stage.title}</h3>
                <p className="mt-4 
                text-[10px]
                lg:text-base
                ">
                    {stage.description}
                </p>
            </SwiperSlide>
        )
    })
    return (
        <div className="py-20 text-white max-w-[1500px] mx-auto">
            <h2 className="text-center uppercase font-bold
            text-6xl
            sm:text-8xl
            lg:text-[150px]
            ">Get in</h2>
            <h5 className="text-center uppercase
            text-sm
            lg:text-xl
            ">in 5 steps</h5>
            <div className="h-[2px] w-[20%] mx-auto bg-violet-800
            mt-4
            sm:mt-8
            lg:mt-10
            "></div>
            <div className=" mx-auto mt-10">
                <Swiper loop={true} grabCursor={true} centeredSlides={true} modules={[EffectCards]} effect="cards" className="
                w-[80%]
                sm:w-[60%]
                lg:w-1/2
                ">
                    {renderedStages}
                </Swiper>
            </div>
        </div>
    );
}
 
export default CareerStages;