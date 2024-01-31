import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { Swiper, SwiperSlide } from 'swiper/react';




const AboutUsGamesSwiper:React.FC = () => {
    const { cards } = useAppSelector(state => state.games)
    const renderedSliders = cards.map(card => {
        return (
            <SwiperSlide key={card.id}>
                <div className="w-[500px] text-white">
                    <img src={card.image} alt={card.title} className="relative z-20 black--shadow--bottom "/>
                    <div className="flex justify-between items-start w-[95%] mx-auto pb-10">
                        <h5 className=" mt-4 text-4xl uppercase font-bold w-[70%]">{card.title}</h5>
                        <Link to={'/games'} className="relative z-10 transition-all hover:translate-y-[-20px] text-8xl Haptik font-bold bg-violet-800 px-4 pb-4 pt-20 translate-y-[-60px] rounded-b-xl shadow-sm shadow-violet-800">#{card.id}</Link>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <Swiper slidesPerView={1.5} loop={true} centeredSlides={true}>
            {renderedSliders}
        </Swiper>
    );
}
 
export default AboutUsGamesSwiper;