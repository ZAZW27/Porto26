// jumbo-head.jsx
export const social = [ // Export this so GyroCard can use it
    {name: "GitHub", link: "https://github.com/ZAZW27"}, 
    {name: "LinkedIn", link: "https://www.linkedin.com/in/zharif-widodo-374a29360..."},
    {name: "Instagram", link: "https://www.instagram.com/zaz.w5"}, 
    {name: "Facebook", link: "https://www.facebook.com/share/1H9mWLQV3S/"}, 
];

export default function JumboHead(){
    return(
        /* Changed absolute to relative so it doesn't float over your text */
        <nav className="w-full flex items-center justify-between px-6 lg:px-23 py-2 lg:py-4 absolute z-30">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                {/* logo */}
                <section className="w-24 lg:w-28"> 
                    <img src="icons/ZAZW-logo.png" alt="ZAZW logo" />
                </section>
                
                {/* buttons - HIDDEN ON MOBILE */}
                <section className="hidden lg:flex gap-12 items-center"> 
                    {social.map((btn) => (
                        <a href={btn.link} key={btn.name} target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                            <img src={`icons/${btn.name}.svg`} alt={`${btn.name} btn`} />
                        </a>
                    ))}
                </section>
            </div>
        </nav>
    )
}