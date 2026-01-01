"use client";
import Jumbotron from "./src/components/sections/jumbotron/Jumbotron";
import HeadSection from "./src/common/headSection";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-start justify-start font-sans h-[200rem]">
            <Jumbotron />

            <section className="w-full px-2 lg:px-26 py-8 lg:pt-24 lg:pb-12 flex flex-col justify-center items-center">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
                    <div className="text-center px-12 py-6 bg-gray-50 rounded-2xl">
                        <div className="text-5xl font-bold text-red-500">36+</div>
                        <div className="text-sm text-gray-500 mt-2">GitHub Repositories</div>
                    </div>
                    <div className="text-center px-12 py-6 bg-gray-50 rounded-2xl">
                        <div className="text-5xl font-bold text-red-500">4+</div>
                        <div className="text-sm text-gray-500 mt-2">Work Experiences</div>
                    </div>
                    <div className="text-center px-12 py-6 bg-gray-50 rounded-2xl">
                        <div className="text-5xl font-bold text-red-500">3.24</div>
                        <div className="text-sm text-gray-500 mt-2">GPA</div>
                    </div>
                </div>
              </div>
            </section>
            <footer></footer>
        </main>
    );
}
