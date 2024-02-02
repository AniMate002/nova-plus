import CareerBenefitsSwiper from "./CareerBenefitsSwiper";




const CareerBenefits:React.FC = () => {
    return (
        <div className="min-h-[100vh] text-white pt-40 pb-20">
            <div className="w-[80%] mx-auto flex justify-between items-center">
                <div className="font-bold">
                    <p className="text-8xl uppercase Haptik">benefits</p>
                    <p className="text-[195px] uppercase mt-[-80px]">you</p>
                    <p className="text-[165px] uppercase mt-[-110px]">gain</p>
                </div>
                <div className="w-[60%]">
                    <CareerBenefitsSwiper />
                </div>
            </div>
            <p className="w-[80%] mx-auto text-slate-400">Working at NovaPlus is an immersive journey into a culture of constant innovation. Here, creativity is not just encouraged but expected, as every team member contributes to pushing the boundaries of the gaming industry. The collaborative dynamics within the team create an environment where ideas flourish, and diverse skill sets come together seamlessly to tackle challenges.</p>
        </div>
    );
}
 
export default CareerBenefits;