import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hook';


interface SponsorsSwiperI {
    key: number,
    title: string,
    start: number,
    end: number
}

const SponsorsSwiper:React.FC<SponsorsSwiperI> = ({title, start, end}) => {
    const { sponsors } = useAppSelector(state => state.sponsors)
    const chosenSponsors = sponsors.slice(start, end)
    const renderedSlides = chosenSponsors.map(sponsor => {
        return (
            <SwiperSlide key={sponsor.id}>
                <div className='w-[270px] h-[110px] flex justify-center items-center bg-slate-200 rounded-xl'>
                    <img src={sponsor.image} alt={sponsor.name} className='h-[50px]' />
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div>
            <h2 className='text-center mb-4 text-white uppercase Haptik font-bold text-3xl'>{title}</h2>
            <Swiper slidesPerView={2.5} loop={true} centeredSlides={true}>
                {renderedSlides}
            </Swiper>
        </div>
    );
}
 
export default SponsorsSwiper;