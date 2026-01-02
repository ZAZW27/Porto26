"use client";
import Jumbotron from "./src/components/sections/jumbotron/Jumbotron";
import AboutMe from "./src/components/sections/about/about";
import HeadSection from "./src/common/headSection";

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen items-start justify-start font-sans ">
            <Jumbotron />
            <div>
              <nav className="w-full bg-red-500 sticky top-0 -mt-6">
                something
              </nav>
              <AboutMe />
              <section className="w-full px-2 lg:px-26 py-8 lg:pt-24 lg:pb-12 flex flex-col justify-center items-center bg-slate-50">
                <HeadSection title={`My SKills`} />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis optio, aspernatur qui sit consequuntur pariatur illo reiciendis minus omnis provident nisi itaque porro earum veniam aut necessitatibus quis doloribus?</p>
              </section>
            </div>
            <footer></footer>
        </main>
    );
}
