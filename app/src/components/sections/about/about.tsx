import styles from './about.module.css'; 
import HeadSection from '@/app/src/common/headSection';

const outliers = [
    {
        description: "Projects", 
        nominals: "36+"
    }, 
    {
        description: "Experience", 
        nominals: "4+"
    }
]

export default function AboutMe() {
    return(
        <section className="w-full px-2 lg:px-26 py-8 lg:pt-24 lg:pb-20 flex flex-col justify-center items-center">
            <HeadSection title={"About Me"} />
            <div className="w-full lg:max-w-5xl bg-white text-[#555555] shadow-lg px-6 lg:px-12 py-8 rounded-2xl flex flex-col gap-6">
                <p className="text-justify">
                    I am a Software Engineer and Computer Science student at the Institute Technology Kalimantan. 
                    My journey in tech is driven by a fascination with how different systems communicate, 
                    leading me to explore everything from full-stack web development to mobile applications 
                    and database engineering.
                </p>

                <p className="text-justify">
                    While I am currently pursuing my Bachelor’s in Informatics, I have spent my recent years building practical 
                    solutions in the real world. I’ve engineered full-stack platforms using Laravel and Node.js, developed 
                    public-service mobile apps, and designed relational databases to handle complex data.
                </p>

                <p className="text-justify">
                    I am particularly drawn to the logic and structure of backend development. My experience with languages 
                    like C#, C++, and PHP has given me a versatile foundation, allowing me to adapt to different architectural 
                    challenges, whether I’m building a search engine for legal documents or mentoring the next generation of 
                    junior engineers in robotics logic. For me, software engineering isn't just about writing code; it's about 
                    architecting reliable systems that provide a seamless experience for the end user.
                </p>
                <div className="flex flex-row items-center justify-center gap-4">
                    {outliers.map((items)=>(
                        <div className="text-center px-12 py-6 bg-zinc-100/90 rounded-2xl">
                            <div className="text-5xl font-bold text-red-500">{items.nominals}</div>
                            <div className="text-sm text-gray-500 mt-2">{items.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    ); 
}