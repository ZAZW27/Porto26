import styles from './main.module.css'; 

type HeadSectionProps = {
    title: string; 
}

export default function HeadSection({ title }: HeadSectionProps){
    return(
        <div className={`w-full h-[50px] flex justify-center items-center flex-col mb-8 headline`}>
            <div className='flex flex-col justify-center items-center'>
                <h1 className="text-4xl lg:text-5xl font-bold text-[#2C3E50] text-shadow-md">
                    {title}
                </h1>
                <div className="w-20 lg:w-24 mt-4 bg-[#C94444]"/>
            </div>
        </div>
    )
}