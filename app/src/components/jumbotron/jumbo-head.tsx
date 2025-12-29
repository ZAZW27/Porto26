import React from "react";

function JumboHead(){
    return(
        <header className=" w-full flex items-center justify-between px-23">
        {/* logo */}
            <section> 
                <img src="icons/ZAZW-logo.png" alt="ZAZW logo" />
            </section>
            
            {/* buttons */}
            <section className="flex gap-12"> 
                <button>
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