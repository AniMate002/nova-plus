import { Tilt } from "react-tilt";



const NewsSubHeader:React.FC = () => {
    return (
        <div className="block w-[70%] mx-auto mt-20">
            <div className="flex w-full justify-between items-start">
                <Tilt className={'w-[50%] '} options={{scale: 1, speed: 100, perspective: 1000}}>
                    <div className="purple--shadow--xl text-white Haptik w-full bg-violet-500 p-10 rounded-xl rotate-6 select-none">
                        <h2 className="mb-10 text-7xl">Welcome to the <span className="text-violet-800 font-semibold">NovaPlus</span> News Hub</h2>
                        <p>
                            Stay in the loop with the latest from NovaPlus – your portal to the forefront of gaming innovation! Our News Hub is where we share the pulse-pounding excitement and groundbreaking achievements that define NovaPlus's journey in the dynamic world of game development.
                        </p>
                    </div>
                </Tilt>

                <Tilt className={'w-[50%] ml-auto'} options={{scale: 1, speed: 100, perspective: 1000}}>
                    <div className="teal--shadow--xl text-white Haptik w-full text-end bg-teal-400 p-10 rounded-xl rotate-[-2deg] select-none">
                        <h2 className="mb-10 text-5xl">Your Connection to the <span className="text-teal-700 font-semibold">NovaPlus</span> Universe</h2>
                        <p>
                            Explore a diverse range of news articles, announcements, and updates that offer an insider's view into the heart of NovaPlus. From major product launches to community celebrations, this is your go-to source for all things NovaPlus.
                        </p>
                    </div>
                </Tilt>
            </div>

        </div>
    );
}
 
export default NewsSubHeader;