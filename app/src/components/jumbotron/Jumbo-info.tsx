export default function JumboInfo(){
    return(
        <section className="basis-3/5 jumbo-intro p-8 flex flex-col justify-center ">
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
    ); 
}