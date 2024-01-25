import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../../redux/hook';



const NewsSwiper:React.FC = () => {
    const { news } = useAppSelector(state => state.news)

    const rendreredSliders = news.map((item, index) => <SwiperSlide key={item.title}>
        <div className={`news--trigger--${index}  pb-2 opacity-0
        w-[110px]
        min-[410px]:w-[150px]
        min-[513px]:w-[180px]
        sm:w-[210px]
        md:w-[270px]
        lg:w-[330px]
        xl:w-[450px]
        2xl:w-[550px]
        `}>
            <img src={item.images[0]} alt={item.images[0]}/>
            <div className='flex items-center justify-between  mt-4
            text-[8px] px-0
            lg:text-base lg:px-10
            '>
                <p className='Haptik'>{item.date}</p>
                <p className='Haptik'>{item.year}</p>
                <p className='Haptik'>~{item.read} min read</p>
            </div>
            <p className=' Haptik
            w-full text-base pt-2
            lg:w-[70%] lg:text-5xl lg:pt-10
            '>{item.title}</p>
        </div>
    </SwiperSlide>)
    
    return (
        <Swiper slidesPerView={2.1} freeMode={{sticky: false}}  speed={1500}>
            {rendreredSliders}
        </Swiper>
    );
}
 
export default NewsSwiper;