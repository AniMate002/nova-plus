import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'

const SwiperQuotes = () => {
    return (
        <div className="
        w-full
        lg:w-[70%]
        ">
            <Swiper slidesPerView={1.5} loop={true} centeredSlides={true} spaceBetween={20} className='w-full' autoplay={{delay:2000}} modules={[Autoplay]} speed={1500}>
                <SwiperSlide >
                    <div className='teal--quote bg-teal-700  cursor-pointer 
                    w-[80%] p-2
                    md:w-[400px]
                    lg:w-[350px]
                    xl:w-[530px] lg:p-14
                    min-[1290px]:w-[540px]
                    min-[1540px]:w-[630px]
                    2xl:w-[700px]
                    '>
                        <p className='text-black font-bold uppercase Haptik
                        text-[10px]
                        sm:text-[15px]
                        lg:text-[20px]
                        xl:text-4xl
                        '>Every design choice we make is a step toward pushing the boundaries of what gaming can achieve, and that's what excites me every day.</p>
                        <p className='text-white tracking-wider Haptik mt-6
                        text-[10px]
                        lg:text-base
                        '>Lena Chen - Lead Game Designer at Nova Plus</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='red--quote bg-red-700  cursor-pointer 
                    w-[80%] p-2
                    md:w-[400px]
                    lg:w-[350px]
                    xl:w-[530px] lg:p-14
                    min-[1290px]:w-[540px]
                    min-[1540px]:w-[630px]

                    2xl:w-[700px]
                    '>
                        <p className='text-black font-bold uppercase Haptik
                        text-[10px]
                        sm:text-[15px]
                        lg:text-[20px]
                        xl:text-4xl
                        '>It's about pushing the limits and creating experiences that leave a lasting impact.</p>
                        <p className='text-white tracking-wider Haptik mt-6
                        text-[10px]
                        lg:text-base
                        '>Alex Rodriguez - Chief Technology Officer at Apex Vanguard</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='orange--quote bg-orange-700  cursor-pointer mb-4
                    w-[80%] p-2
                    md:w-[400px]
                    lg:w-[350px]
                    xl:w-[530px] lg:p-14
                    min-[1290px]:w-[540px]
                    min-[1540px]:w-[630px]

                    2xl:w-[700px]
                    '>
                        <p className='text-black font-bold uppercase Haptik
                        text-[10px]
                        sm:text-[15px]
                        lg:text-[20px]
                        xl:text-4xl
                        '>Animating for Celestial Citadel is like choreographing a dance in the stars. Each movement tells a story, and every frame is a canvas for magic and wonder.</p>
                        <p className='text-white tracking-wider Haptik mt-6
                        text-[10px]
                        lg:text-base
                        '>Sarah Kim - Lead Animator at Celestial Citadel</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className='violet--quote bg-violet-700  cursor-pointer mb-4
                    w-[80%] p-2
                    md:w-[400px]
                    lg:w-[350px]
                    xl:w-[530px] lg:p-14
                    min-[1290px]:w-[540px]
                    min-[1540px]:w-[630px]

                    2xl:w-[700px]
                    '>
                        <p className='text-black font-bold uppercase Haptik
                        text-[10px]
                        sm:text-[15px]
                        lg:text-[20px]
                        xl:text-4xl
                        '>As a sound designer, my goal is to immerse players in a sonic universe that elevates the intensity and emotion of the game.</p>
                        <p className='text-white tracking-wider Haptik mt-6
                        text-[10px]
                        lg:text-base
                        '>Ryan Mitchell - Sound Designer at Apex Vanguard</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
 
export default SwiperQuotes;