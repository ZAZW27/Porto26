import { link } from "fs";
import React from "react";

const social = [
    {name: "Instagram", link: "https://www.instagram.com/zaz.w5"}, 
    {name: "Facebook", link: "https://www.facebook.com/share/1H9mWLQV3S/"}, 
    {name: "GitHub", link: ""}
]

function JumboHead(){
    return(
        <header className=" w-full flex items-center justify-between px-23">
        {/* logo */}
            <section className="w-28"> 
                <img src="icons/ZAZW-logo.png" alt="ZAZW logo" />
            </section>
            
            {/* buttons */}
            <section className="flex gap-12"> 
                <button className="">
                    <img src="icons/Instagram.svg" alt="Instagram btn" />
                </button>
                <button>
                    <img src="icons/Facebook.svg" alt="Facebook Btn" />
                </button>
                <button>
                    <img src="icons/LinedIn.svg" alt="LinkedIn btn" />
                </button>
                <button>
                    <img src="icons/Github.svg" alt="GitHub btn" />
                </button>
            </section>
        </header>
    )
}

export default JumboHead; 