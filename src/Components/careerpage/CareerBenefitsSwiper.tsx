import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hook';
import { Autoplay } from 'swiper/modules';



const CareerBenefitsSwiper:React.FC = () => {
    const { benefits } = useAppSelector(state => state.jobs)
    const renderedBenefits = benefits.map(benefit => {
        return (
            <SwiperSlide key={benefit.id}>
                <div>
                    <h2 className={`${benefit.icon} text-3xl`}></h2>
                    <h3 className='Haptik mb-4 uppercase font-bold text-xl text-violet-600
                    mt-4
                    lg:mt-10
                    '>{benefit.title}</h3>
                    <p className='
                    text-sm
                    lg:text-base
                    '>{benefit.description}</p>
                </div>
            </SwiperSlide>
        )
    })
    return (
        <Swiper slidesPerView={1.5} loop={true} centeredSlides={true} spaceBetween={50} grabCursor={true} autoplay={{delay:0, pauseOnMouseEnter: true}} modules={[Autoplay]} speed={3000}>
            {renderedBenefits}
        </Swiper>
    );
}
 
export default CareerBenefitsSwiper;