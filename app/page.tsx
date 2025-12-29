import Image from "next/image";
import JumboHead from "./src/components/jumbotron/jumbo-head";

export default function Home() {
  return (
    <main className="flex min-h-screen items-start justify-start font-sans h-[100rem]">
      <header className="w-full h-svh flex flex-col">
        <JumboHead></JumboHead>
        <div className="grow flex items-center justify-center px-4 lg:px-26 z-20 ">
          <div className="flex flex-col-reverse lg:flex-row items-stretch w-full max-w-[95%]">
            {/* Left Section */}
            <section className="basis-3/5 jumbo-intro p-8">
              <h1 className="font-black jumbo-name text-shadow-lg">
                <span className="text-[#2C3E50]">Hi, I'm </span>
                <span className="text-[#C94444]">Zharif Aziz</span>
              </h1>
              <div className="flex flex-col gap-12">
                <p>Full stack Developer & Software engineer</p>
                <p>
                  A <span className="font-bold">Computer Science student at the </span>
                  <span className="font-bold">Institute Technology Kalimantan</span> with a strong enthusiasm for 
                  learning and exploring technology. Primarily focused on backend 
                  development, while also maintaining a solid interest in frontend 
                  technologies.
                </p>
              </div>
              <div className="jumbo-btns flex gap-6 justify-center lg:justify-start mt-12">
                <button>
                  View My Work
                </button>

                <button>
                  Get In Touch
                </button>
              </div>
            </section>

            {/* Right Section */}
            <section className="basis-2/5 p-8 h-full flex justify-center items-center">
              {/* Card */}
              <div className="w-91.75 h-134.25 bg-white/50 rounded-[20px] backdrop-blur-md shadow-lg">
                
              </div>
            </section>
          </div>

        </div>
        <svg 
          viewBox="0 0 1500 900" 
          xmlns="http://www.w3.org/2000/svg" 
          className="absolute inset-0 mt-20 w-full h-full pointer-events-none z-10"
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
      <footer>

      </footer>
    </main>
  );
}
