import JumboHead from "./jumbo-head"
import GyroCard from "./GyroCard"
import JumboInfo from "./Jumbo-info"

export default function Jumbotron(){
    return (
        <header className="w-full h-svh flex flex-col">
            <JumboHead />
            <div className="grow flex items-center justify-center px-4 lg:px-26 z-20 ">
                <div className="flex flex-col-reverse lg:flex-row items-stretch w-full max-w-[95%]">
                    <JumboInfo />
                    <GyroCard />
                </div>
            </div>

            <svg 
                viewBox="0 0 1500 900" 
                xmlns="http://www.w3.org/2000/svg" 
                className="absolute inset-0 mt-20 w-full h-[70svh] lg:h-full pointer-events-none z-10"
                preserveAspectRatio="none"
                >
                <defs>
                    <linearGradient id="fadeRed" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#C94444" stopOpacity="0" />
                    <stop offset="30%" stopColor="#C94444" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#C94444" stopOpacity="0.7" />
                    </linearGradient>
                </defs>
                <path 
                    d="M -150 900 C 100 850, 300 750, 700 750 S 1450 550, 1510 100" 
                    stroke="url(#fadeRed)" 
                    strokeWidth="30" 
                    fill="transparent" 
                    strokeLinecap="round"
                />
            </svg>
        </header>
    )
}