import { Tilt } from "react-tilt";
import { useAppSelector } from "../../redux/hook";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';



const CareerStages:React.FC = () => {
    const { stages } = useAppSelector(state => state.jobs)
    const renderedStages = stages.map(stage => {
        return (
            <SwiperSlide key={stage.id} className="py-10 px-20  bg-slate-800 rounded-xl">
                <h2 className="text-slate-700 font-bold uppercase Haptik text-2xl">stage {stage.id}</h2>
                <h3 className="mt-10 uppercase font-bold text-4xl text-white">{stage.title}</h3>
                <p className="mt-4">
                    {stage.description}
                </p>
            </SwiperSlide>
        )
    })
    return (
        <div className="py-20 text-white">
            <h2 className="text-center uppercase font-bold  text-[150px]">Get in</h2>
            <h5 className="text-center text-xl uppercase">in 5 steps</h5>
            <div className="h-[2px] w-[20%] mx-auto bg-violet-800 mt-10"></div>
            <div className="w-full mt-10">
                <Swiper loop={true} grabCursor={true} centeredSlides={true} modules={[EffectCards]} effect="cards" className="w-1/2">
                    {renderedStages}
                </Swiper>
            </div>
        </div>
    );
}
 
export default CareerStages;