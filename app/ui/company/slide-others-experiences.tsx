'use client';
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviwArrow from './preview-arrow';
import NextArrow from './next-arrow';
import CardOthersExperiences from './card-others-experiences';


const SlideOthersExperiences = ({options}) =>{
    const data=[
        {img:  `${options[10].download_url}`, link1:"/prueba"},
        {img:  `${options[11].download_url}`, link1:"/prueba2"},
        {img:  `${options[12].download_url}`, link1:"/prueba"},
        {img:  `${options[13].download_url}`, link1:"/prueba2"},
        {img:  `${options[14].download_url}`, link1:"/prueba"},
        {img:  `${options[15].download_url}`, link1:"/prueba2"},
        {img:  `${options[16].download_url}`, link1:"/prueba"},                 
    ]
    const settings = {
        autoplay: true,
        speed: 4000,
        autoplaySpeed: 4000,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PreviwArrow />,
        responsive:[
            {
                breakpoint: 1280,
                settings:{
                    slidesToShow: 3,
                }

            },
            {
                breakpoint: 1000,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings:{
                    slidesToShow: 1,
                }
            },
        ],
    };
    
    
    return(
        <div className='relative'>
            
            <Slider {...settings}>
            {data.map((el,index) => <CardOthersExperiences key={index} img={el.img} link1={el.link1}/>)}

            {/* Mostrar todas las imágenes */}
            {/* {options.map((el,index) => <CardOthersExperiences key={index} img={el.download_url} link1={el.author}/>)} */}
            
            </Slider>  
           
        </div>
    )
}

export default SlideOthersExperiences