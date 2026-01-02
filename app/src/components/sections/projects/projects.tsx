import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import styles from './projects.module.css'; 

const projectData = [
    {
        name: "BSWMobile", 
        image: "what", 
        description: "Mobile version of BSW application built with Flutter, providing seamless mobile experience for users.", 
        url: "something", 
        tech: [
            "Flutter", "Dart", "Mobile"
        ]
    }

]

export default function Projects(){
    return (
        <main>
            <div>
                <Swiper modules={[Pagination]}>
                    {projectData.map((slide, index)=> (
                        <SwiperSlide key={index}>
                            
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </main>
  );
}