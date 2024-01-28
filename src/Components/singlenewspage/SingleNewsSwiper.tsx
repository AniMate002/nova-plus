import { Swiper, SwiperSlide } from 'swiper/react';
import { useAppSelector } from '../../redux/hook';
import { Link } from 'react-router-dom';


const SingleNewsSwiper:React.FC = () => {
    const { news } = useAppSelector(state => state.news)
    const renderedSlides = news.map(item => {
        return (
            <SwiperSlide key={item.title}>
                <Link to={`/news/${item.id}`} className={`block  pb-2 
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
                </Link>
            </SwiperSlide>
        )
    })
    return (
        <div className='pl-[25%] bg-slate-900 text-white py-20 select-none'>
            <Swiper slidesPerView={2.2} spaceBetween={60} centeredSlides={true} initialSlide={2} loop={true}>
                {renderedSlides}
            </Swiper>
        </div>
    );
}
 
export default SingleNewsSwiper;