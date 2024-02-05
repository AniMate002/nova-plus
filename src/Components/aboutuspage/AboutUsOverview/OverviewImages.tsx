import over1 from '../../../images/AboutUs/over1.jpg'
import over2 from '../../../images/AboutUs/over2.jpg'
import over3 from '../../../images/AboutUs/over3.jpg'
import over4 from '../../../images/AboutUs/over4.jpg'
import over5 from '../../../images/AboutUs/over5.jpg'





const OverviewImages:React.FC = () => {
    return (
        <div className="pt-40 pb-20 text-white max-w-[1500px] mx-auto">
            <h2 className="overview--title--trigger opacity-0 Haptik mx-auto
            w-[80%] text-lg
            md:w-[60%] md:text-3xl
            lg:w-[40%]
            ">NovaPlus stands at the forefront of innovation in the gaming industry, where creativity knows no bounds. Our dynamic team is fueled by a passion for pushing the limits, crafting unforgettable gaming experiences that resonate globally.</h2>
            <div className='flex justify-start mt-20
            items-start gap-4 flex-col
            lg:items-stretch lg:gap-20 lg:flex-row
            xl:gap-40
            '>
                <img src={over1} alt={over1} className='overview--1--image--trigger relative opacity-0 left-[-10%] 
                w-full
                lg:w-auto
                ' />
                <div className=' opacity-0 overview--1--text--trigger
                w-[70%] mx-auto
                lg:w-[30%] lg:mx-0
                '>
                    <h4 className='text-3xl'>About Us</h4>
                    <p className='mt-10 text-slate-300'>
                    NovaPlus stands at the forefront of innovation in the gaming industry, where creativity knows no bounds.
                    </p>
                    <p className='mt-10 text-slate-300'>
                    Our dynamic team is fueled by a passion for pushing the limits, crafting unforgettable gaming experiences that resonate globally. At NovaPlus, diversity is our strength. We cultivate an inclusive environment where unique perspectives converge to shape groundbreaking games. Join us on a journey where your individuality is celebrated, and together, we redefine the future of interactive entertainment.
                    </p>
                </div>
            </div>
            <img src={over2} alt={over2} className='w-[20%] ml-40 mt-[-100px] relative overview--2--image--trigger bottom-[10%] opacity-0
            hidden
            lg:block
            ' />
            <div className='flex justify-end mt-20
            items-start gap-4 flex-col-reverse
            lg:items-stretch lg:gap-20 lg:flex-row
            xl:gap-40
            '>
                <div className='opacity-0 overview--2--text--trigger
                w-[70%] mx-auto
                lg:w-[30%] lg:mx-0
                '>
                    <p className='mt-10 text-slate-300'>
                    NovaPlus is not just a company; it's a hub of constant learning and growth.
                    </p>
                    <p className='mt-10 text-slate-300'>
                    Our commitment to the professional development of our team members ensures that every day is an opportunity to enhance skills, stay ahead in the industry, and contribute to projects that captivate audiences worldwide. Immerse yourself in a culture of collaboration at NovaPlus. Our team dynamics are built on seamless cooperation, where diverse skill sets unite to overcome challenges and pioneer new horizons in gaming. Here, your contributions matter, and together, we create games that leave a lasting impact.                    </p>
                </div>
                <img src={over4} alt={over4} className='overview--3--image--trigger relative opacity-0 right-[-10%]
                w-full
                lg:w-auto
                ' />
            </div>
            <img src={over5} alt={over5} className='w-[20%] mt-[-100px] ml-auto mr-40 relative overview--4--image--trigger top-[10%] opacity-0
            hidden
            lg:block
            ' />
        </div>
    );
}
 
export default OverviewImages;