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
                <div className='flex justify-center items-center bg-slate-200 rounded-xl
                w-[100px] h-[50px]
                min-[400px]:w-[120px] min-[400px]:h-[60px]
                min-[500px]:w-[140px] min-[500px]:h-[70px]
                min-[600px]:w-[180px] min-[600px]:h-[90px]
                md:w-[240px] md:h-[110px]
                min-[900px]:w-[270px] min-[900px]:h-[120px] 
                min-[1000px]:w-[310px] min-[1000px]:h-[130px]
                min-[1150px]:w-[330px] min-[1150px]:h-[150px]
                xl:w-[230px] xl:h-[110px]
                2xl:w-[270px] 2xl:h-[120px]
                '>
                    <img src={sponsor.image} alt={sponsor.name} className='
                    h-[20px]
                    min-[600px]:h-[30px]
                    md:h-[50px]' />
                </div>
            </SwiperSlide>
        )
    })
    return (
        <div>
            <h2 className='text-center mb-4 text-white uppercase Haptik font-bold 
            text-md mt-10
            md:text-3xl xl:mt-0
            '>{title}</h2>
            <Swiper slidesPerView={2.5} loop={true} centeredSlides={true}>
                {renderedSlides}
            </Swiper>
        </div>
    );
}
 
export default SponsorsSwiper;