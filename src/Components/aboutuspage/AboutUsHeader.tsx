import { useEffect, useState } from "react";

// interface countersI {
//     ["projects"]: number,
//     ["stories"]: number,
//     ["experience"]: number,
//     ["locations"]: number
// }


const createInterval = (setProjects: React.Dispatch<React.SetStateAction<number>>, maxValue: number, speed: number) => {
    return new Promise<number>((resolve) => {
        let counter = 0;
        const intervalId = setInterval(function(){
            setProjects(prev => prev + 1)
            counter++;
            if(counter === maxValue){
                clearInterval(intervalId)
                resolve(counter)
            }
        }, speed)
    })
}


const AboutUsHeader:React.FC = () => {
    const [projects, setProjects] = useState(0)
    const [stories, setStories] = useState(0)
    const [studios, setStudios] = useState(0)
    const [years, setYears] = useState(0)


    useEffect(() => {
        const startAllIntervals = async () => {
            const projectsInterval = await createInterval(setProjects, 15, 50)
            const storiesInterval = await createInterval(setStories, 40, 20)
            const studiosInterval = await createInterval(setStudios, 6, 20)
            const yearsInterval = await createInterval(setYears, 10, 10)
        }
        startAllIntervals()
    }, [])

    return (
        <div className="about--us--header min-h-[100vh]">
            <div className="flex  justify-between mx-auto pt-10 max-w-[1500px]
            flex-col w-[70%]
            lg:flex-row lg:w-[90%]
            xl:w-[70%]
            ">
                <div className=" text-white flex  font-bold uppercase
                gap-0 pt-20 flex-col items-start
                md:gap-4 md:pt-40 md:flex-row md:items-center
                ">
                    <h3 className="min-w-[120px] 
                    text-[100px]
                    ">{projects}</h3>
                    <h3 className="text-left 
                    text-3xl
                    md:text-5xl
                    ">Successfull Projects</h3>
                </div>
                <div className=" text-white text-center flex font-bold uppercase
                gap-0 pt-10 flex-col items-start
                md:gap-4 md:pt-40 md:flex-row md:items-center
                ">
                    <h3 className="min-w-[120px] text-[100px]">{stories}</h3>
                    <h3 className="text-left
                    text-4xl
                    md:text-5xl
                    ">Completed Stories</h3>
                </div>
            </div>
            {/* <div className="flex w-[70%] justify-between mx-auto gap-10">
                <div className="pt-40 text-white text-center flex items-center gap-4 font-bold uppercase">
                    <h3 className="min-w-[120px] text-[100px]">{studios}</h3>
                    <h3 className="text-left text-5xl">World Studios</h3>
                </div>
                <div className="pt-40 text-white text-center flex items-center gap-4 font-bold uppercase w-1/2">
                    <h3 className="min-w-[120px] text-[100px]">{years}</h3>
                    <h3 className="text-left text-5xl">Years of experience</h3>
                </div>
            </div> */}
            <div className="flex mx-auto justify-between pt-10 max-w-[1500px]
            flex-col w-[70%]
            lg:flex-row lg:w-[90%] lg:gap-40
            xl:w-[70%]
            ">
                <div className=" text-white flex  font-bold uppercase
                gap-0 pt-20 flex-col items-start
                md:gap-4 md:pt-20 md:flex-row md:items-center
                ">
                    <h3 className="min-w-[120px] 
                    text-[100px]
                    ">{studios}</h3>
                    <h3 className="text-left 
                    text-3xl
                    md:text-5xl
                    ">World Studios</h3>
                </div>
                <div className=" text-white text-center flex font-bold uppercase
                gap-0 pt-10 flex-col items-start pb-40
                md:gap-4 md:pt-20 md:flex-row md:items-center lg:pb-0
                ">
                    <h3 className="min-w-[120px] text-[100px]">{years}</h3>
                    <h3 className="text-left
                    text-4xl
                    md:text-5xl
                    ">Years of experience</h3>
                </div>
            </div>
        </div>
    );
}
 
export default AboutUsHeader;