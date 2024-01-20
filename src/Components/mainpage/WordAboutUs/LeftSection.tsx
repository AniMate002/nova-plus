

const LeftSection:React.FC = () => {
    return (
        <div className="w-[30%]">
            <div className="font-bold uppercase">
                <p className="text-[100px]">word</p>
                <div className="flex items-end mt-[-20px]">
                    <p className="text-[50px]">about</p>
                    <p className="text-[110px] leading-10">us</p>
                </div>
                <p className="text-violet-800 text-[30px] leading-none mt-[-8px] line-through">nova plus</p>
            </div>
            <div className="text-justify tracking-tight mt-10 text--font text-sm text-slate-500">
                <p className=" mb-2">Established in 2005, Nova Plus embarked on a journey to redefine gaming by fusing technological advancements with creative storytelling. Their early success came in the form of <span className="text--highlight">"Nebula Quest"</span>, a groundbreaking title that captivated gamers with its innovative mechanics and compelling narrative.</p>
                <p className=" mb-2">As the company expanded globally between 2025 and 2030, <span className="text--highlight">Nova Plus</span> established studios in key gaming hubs, fostering international collaborations that resulted in culturally diverse games.</p>
                <p className="">Their commitment to staying at the cutting edge of <span className="text--highlight">technology</span> and <span className="text--highlight">delivering experiences</span> that resonated with players worldwide solidified their status as an influential player in the gaming landscape.</p>
            </div>
        </div>
    );
}
 
export default LeftSection;