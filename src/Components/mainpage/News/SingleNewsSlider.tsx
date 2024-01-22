import { Swiper, SwiperSlide } from 'swiper/react';
import { newsI } from "../../../redux/newsReducer";



interface SingleNewsSliderI extends newsI {
    key: string
}

const SingleNewsSlider:React.FC<SingleNewsSliderI> = ({ images, date, year, read, title, key}) => {
    return (
        <SwiperSlide key={key}>
            <div className='w-[550px] pb-2'>
                <img src={images[0]} alt={images[0]} />
                <div className='flex items-center justify-between px-10 mt-4'>
                    <p className='Haptik'>{date}</p>
                    <p className='Haptik'>{year}</p>
                    <p className='Haptik'>~{read} min read</p>
                </div>
                <p className='w-[70%] pt-10 text-5xl Haptik'>{title}</p>
            </div>
        </SwiperSlide>
    );
}
 
export default SingleNewsSlider;