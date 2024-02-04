import CareerBenefitsSwiper from "./CareerBenefitsSwiper";




const CareerBenefits:React.FC = () => {
    return (
        <div className="min-h-[100vh] text-white pt-40 pb-20 max-w-[1500px] mx-auto">
            <div className="flex justify-between items-center mx-auto
            flex-col
            lg:flex-row lg:px-20
            xl:px-0
            ">
                <div className="font-bold
                w-[80%] mx-auto text-center
                lg:w-auto lg:text-left
                ">
                    <p className="uppercase Haptik
                    text-6xl 
                    sm:text-7xl
                    lg:text-8xl 
                    ">benefits</p>
                    <p className="uppercase
                    text-[120px] mt-[-50px]
                    sm:text-[140px]
                    lg:text-[195px] lg:mt-[-80px]
                    ">you</p>
                    <p className="uppercase
                    text-[100px] mt-[-80px]
                    sm:text-[125px]
                    lg:text-[165px] lg:mt-[-110px]
                    ">gain</p>
                </div>
                <div className="
                w-full
                lg:w-[60%]
                ">
                    <CareerBenefitsSwiper />
                </div>
            </div>
            <p className="mx-auto text-slate-400
            w-[70%] mt-10 text-sm
            md:text-base
            lg:w-[90%] lg:mt-0
            ">Working at NovaPlus is an immersive journey into a culture of constant innovation. Here, creativity is not just encouraged but expected, as every team member contributes to pushing the boundaries of the gaming industry. The collaborative dynamics within the team create an environment where ideas flourish, and diverse skill sets come together seamlessly to tackle challenges.</p>
        </div>
    );
}
 
export default CareerBenefits;