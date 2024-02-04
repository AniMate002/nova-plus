import { Swiper, SwiperSlide } from "swiper/react";
import { useAppSelector } from "../../redux/hook";
import { Autoplay } from 'swiper/modules';


const AboutUsSponsors:React.FC = () => {
    const { sponsors } = useAppSelector(state => state.sponsors)
    const renderedSponsors = sponsors.map(sponsor => {
        return (
            <SwiperSlide key={sponsor.id}>
                <div className="w-[200px] h-[50px] overflow-hidden flex items-center justify-center select-none">
                    <img src={sponsor.image} alt={sponsor.image} className="h-[50px] min-w-max" />

                </div>
            </SwiperSlide>
        )
    })
    return (
        <div className="pt-20 pb-40 text-white ">
            <h2 className="text-center font-bold text-7xl">Become our sponsor today</h2>
            <p className="w-[30%] mx-auto text-center mt-10">Elevate your brand presence and engage with our passionate audience by becoming a sponsor today. Together, let's create memorable gaming experiences that resonate with audiences worldwide.</p>
            <button className="block mx-auto py-4 px-8 bg-slate-200 rounded-full text-violet-600 font-bold mt-10 hover:bg-violet-500 hover:text-white transition-all duration-200">contact us</button>
            <div className="w-[80%] mx-auto items-center justify-between mt-20">
                <Swiper slidesPerView={7} spaceBetween={200} loop={true} centeredSlides={true} grabCursor={true} modules={[Autoplay]} autoplay={{delay: 0, pauseOnMouseEnter: true}} speed={1500}>
                    {renderedSponsors}
                </Swiper>
            </div>
        </div>
    );
}
 
export default AboutUsSponsors;