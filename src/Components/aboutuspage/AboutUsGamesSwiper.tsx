import { Link } from "react-router-dom";
import { useAppSelector } from "../../redux/hook";
import { Swiper, SwiperSlide } from 'swiper/react';




const AboutUsGamesSwiper:React.FC = () => {
    const { cards } = useAppSelector(state => state.games)
    const renderedSliders = cards.map(card => {
        return (
            <SwiperSlide key={card.id}>
                <div className="text-white
                w-[170px]
                sm:w-[270px]
                min-[460px]:w-[200px]
                min-[560px]:w-[220px]
                min-[720px]:w-[300px]
                md:w-[300px]
                min-[815px]:w-[360px]
                lg:w-[310px]
                xl:w-[400px]
                2xl:w-[500px]
                ">
                    <img src={card.image} alt={card.title} className="relative z-20 black--shadow--bottom "/>
                    <div className="flex justify-between items-start w-[95%] mx-auto pb-10">
                        <h5 className=" mt-4  uppercase font-bold 
                        w-full text-xl
                        md:w-[90%] md:text-2xl md:max-w-[50%]
                        lg:w-[70%] lg:text-4xl
                        ">{card.title}</h5>
                        <Link to={'/games'} className="relative z-10 transition-all hover:translate-y-[-20px] Haptik font-bold bg-violet-800 px-4 pb-4 pt-20 translate-y-[-60px] rounded-b-xl shadow-sm shadow-violet-800
                        hidden
                        md:block
                        text-6xl
                        lg:text-4xl
                        xl:text-7xl
                        2xl:text-8xl
                        ">#{card.id}</Link>
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