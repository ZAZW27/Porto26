"use client";
import Jumbotron from "./src/components/sections/jumbotron/Jumbotron";
import AboutMe from "./src/components/sections/about/about";
import MySkills from "./src/components/sections/mySKillls/MySkills";

import HeadSection from "./src/common/headSection";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-start justify-start font-sans ">
            <Jumbotron />
            <div className="w-full">
              <nav className="w-full bg-red-500 sticky top-0 -mt-6 z-[100]">
                something
              </nav>
              <AboutMe />
              <MySkills />
            </div>
            <footer></footer>
        </main>
    );
}
