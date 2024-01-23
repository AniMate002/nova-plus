import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../redux/hook';



const NewsSwiper:React.FC = () => {
    const { news } = useAppSelector(state => state.news)

    const rendreredSliders = news.map((item, index) => <SwiperSlide key={item.title}>
        <div className={`news--trigger--${index} w-[550px] pb-2 opacity-0`}>
            <img src={item.images[0]} alt={item.images[0]}/>
            <div className='flex items-center justify-between px-10 mt-4'>
                <p className='Haptik'>{item.date}</p>
                <p className='Haptik'>{item.year}</p>
                <p className='Haptik'>~{item.read} min read</p>
            </div>
            <p className='w-[70%] pt-10 text-5xl Haptik'>{item.title}</p>
        </div>
    </SwiperSlide>)
    
    return (
        <Swiper slidesPerView={2.1} freeMode={{sticky: false}}  speed={1500}>
            {rendreredSliders}
        </Swiper>
    );
}
 
export default NewsSwiper;